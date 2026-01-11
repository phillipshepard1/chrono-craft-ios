import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Tab = 'home' | 'plan' | 'inbox' | 'more' | 'challenges';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <ScrollView style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.greeting}>{greeting}</Text>
              <Text style={styles.title}>Dashboard</Text>
            </View>

            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <View style={styles.statIcon}>
                  <Ionicons name="calendar-outline" size={24} color="#6366f1" />
                </View>
                <Text style={styles.statValue}>12</Text>
                <Text style={styles.statLabel}>Posts Scheduled</Text>
                <Text style={styles.statChange}>+23%</Text>
              </View>

              <View style={[styles.statCard, styles.statCardHighlight]}>
                <View style={styles.statIcon}>
                  <Ionicons name="trending-up" size={24} color="#fff" />
                </View>
                <Text style={[styles.statValue, styles.statValueWhite]}>2.4K</Text>
                <Text style={[styles.statLabel, styles.statLabelWhite]}>Engagement</Text>
                <Text style={[styles.statChange, styles.statChangeWhite]}>+12%</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.challengeCard}
              onPress={() => setActiveTab('challenges')}
            >
              <View style={styles.challengeHeader}>
                <View style={styles.challengeIconContainer}>
                  <Ionicons name="flame" size={32} color="#fff" />
                </View>
                <View style={styles.challengeText}>
                  <Text style={styles.challengeTitle}>Weekly Challenges</Text>
                  <Text style={styles.challengeSubtitle}>10 content ideas for this week</Text>
                </View>
              </View>
              <View style={styles.challengeEmojis}>
                <Text style={styles.emoji}>☕</Text>
                <Text style={styles.emoji}>🎬</Text>
                <Text style={styles.emoji}>🎤</Text>
                <Text style={styles.emoji}>📊</Text>
                <Text style={styles.emojiMore}>+6 more</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.insightsCard}>
              <View style={styles.insightsHeader}>
                <View style={styles.insightsIcon}>
                  <Ionicons name="sparkles" size={20} color="#fff" />
                </View>
                <View>
                  <Text style={styles.insightsTitle}>AI Insights</Text>
                  <Text style={styles.insightsSubtitle}>Based on your performance</Text>
                </View>
              </View>
              <Text style={styles.insightsText}>
                Your best posting time is <Text style={styles.bold}>9:00 AM</Text>.
                Posts with images get <Text style={styles.bold}>47% more</Text> engagement.
              </Text>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAll}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tasksCard}>
                <TaskItem text="Review scheduled posts for the week" completed />
                <TaskItem text="Product launch announcement" time="9:00 AM" platform="instagram" />
                <TaskItem text="Respond to comments on viral post" platform="twitter" />
                <TaskItem text="Create content for weekend campaign" />
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quick Actions</Text>
              <View style={styles.quickActions}>
                <TouchableOpacity style={styles.quickAction}>
                  <View style={[styles.quickActionIcon, { backgroundColor: '#e0e7ff' }]}>
                    <Ionicons name="calendar" size={24} color="#6366f1" />
                  </View>
                  <Text style={styles.quickActionText}>Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quickAction}>
                  <View style={[styles.quickActionIcon, { backgroundColor: '#fef3c7' }]}>
                    <Ionicons name="sparkles" size={24} color="#f59e0b" />
                  </View>
                  <Text style={styles.quickActionText}>AI Write</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quickAction}>
                  <View style={[styles.quickActionIcon, { backgroundColor: '#d1fae5' }]}>
                    <Ionicons name="stats-chart" size={24} color="#10b981" />
                  </View>
                  <Text style={styles.quickActionText}>Analytics</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        );
      case 'plan':
        return (
          <View style={styles.centerContent}>
            <Ionicons name="calendar" size={64} color="#6366f1" />
            <Text style={styles.placeholderTitle}>Plan</Text>
            <Text style={styles.placeholderText}>Schedule and manage your content calendar</Text>
          </View>
        );
      case 'inbox':
        return (
          <View style={styles.centerContent}>
            <Ionicons name="mail" size={64} color="#6366f1" />
            <Text style={styles.placeholderTitle}>Inbox</Text>
            <Text style={styles.placeholderText}>Manage messages and notifications</Text>
          </View>
        );
      case 'more':
        return (
          <View style={styles.centerContent}>
            <Ionicons name="menu" size={64} color="#6366f1" />
            <Text style={styles.placeholderTitle}>More</Text>
            <Text style={styles.placeholderText}>Additional settings and options</Text>
          </View>
        );
      case 'challenges':
        return (
          <ScrollView style={styles.content}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setActiveTab('home')} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.title}>Weekly Challenges</Text>
            </View>
            <View style={styles.centerContent}>
              <Text style={styles.challengesEmoji}>🎉</Text>
              <Text style={styles.placeholderTitle}>10 Content Ideas</Text>
              <Text style={styles.placeholderText}>Explore creative prompts to boost your content</Text>
            </View>
          </ScrollView>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderContent()}
      {activeTab !== 'challenges' && (
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setActiveTab('home')}
          >
            <Ionicons
              name={activeTab === 'home' ? 'home' : 'home-outline'}
              size={24}
              color={activeTab === 'home' ? '#6366f1' : '#9ca3af'}
            />
            <Text style={[styles.navLabel, activeTab === 'home' && styles.navLabelActive]}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setActiveTab('plan')}
          >
            <Ionicons
              name={activeTab === 'plan' ? 'calendar' : 'calendar-outline'}
              size={24}
              color={activeTab === 'plan' ? '#6366f1' : '#9ca3af'}
            />
            <Text style={[styles.navLabel, activeTab === 'plan' && styles.navLabelActive]}>Plan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.createButton}>
            <Ionicons name="add" size={32} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setActiveTab('inbox')}
          >
            <Ionicons
              name={activeTab === 'inbox' ? 'mail' : 'mail-outline'}
              size={24}
              color={activeTab === 'inbox' ? '#6366f1' : '#9ca3af'}
            />
            <Text style={[styles.navLabel, activeTab === 'inbox' && styles.navLabelActive]}>Inbox</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => setActiveTab('more')}
          >
            <Ionicons
              name={activeTab === 'more' ? 'menu' : 'menu-outline'}
              size={24}
              color={activeTab === 'more' ? '#6366f1' : '#9ca3af'}
            />
            <Text style={[styles.navLabel, activeTab === 'more' && styles.navLabelActive]}>More</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

interface TaskItemProps {
  text: string;
  completed?: boolean;
  time?: string;
  platform?: 'instagram' | 'twitter';
}

function TaskItem({ text, completed, time, platform }: TaskItemProps) {
  return (
    <View style={styles.taskItem}>
      <Ionicons
        name={completed ? 'checkmark-circle' : 'ellipse-outline'}
        size={20}
        color={completed ? '#10b981' : '#9ca3af'}
      />
      <View style={styles.taskContent}>
        <Text style={[styles.taskText, completed && styles.taskTextCompleted]}>
          {text}
        </Text>
        {time && (
          <View style={styles.taskMeta}>
            <Ionicons name="time-outline" size={12} color="#9ca3af" />
            <Text style={styles.taskTime}>{time}</Text>
          </View>
        )}
      </View>
      {platform && (
        <View style={[
          styles.platformBadge,
          platform === 'instagram' ? styles.instagramBadge : styles.twitterBadge
        ]}>
          <Ionicons
            name={platform === 'instagram' ? 'logo-instagram' : 'logo-twitter'}
            size={14}
            color="#fff"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  greeting: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statCardHighlight: {
    backgroundColor: '#6366f1',
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#e0e7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  statValueWhite: {
    color: '#fff',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  statLabelWhite: {
    color: 'rgba(255,255,255,0.8)',
  },
  statChange: {
    fontSize: 12,
    color: '#10b981',
    marginTop: 4,
    fontWeight: '600',
  },
  statChangeWhite: {
    color: '#fff',
  },
  challengeCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  challengeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  challengeIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#f97316',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  challengeText: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  challengeSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  challengeEmojis: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 24,
  },
  emojiMore: {
    fontSize: 14,
    color: '#6b7280',
  },
  insightsCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  insightsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  insightsIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  insightsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  insightsSubtitle: {
    fontSize: 12,
    color: '#6b7280',
  },
  insightsText: {
    padding: 16,
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  bold: {
    fontWeight: '600',
    color: '#6366f1',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  seeAll: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '600',
  },
  tasksCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 12,
  },
  taskContent: {
    flex: 1,
  },
  taskText: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
  },
  taskTextCompleted: {
    color: '#9ca3af',
    textDecorationLine: 'line-through',
  },
  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  taskTime: {
    fontSize: 12,
    color: '#9ca3af',
  },
  platformBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instagramBadge: {
    backgroundColor: '#e4405f',
  },
  twitterBadge: {
    backgroundColor: '#1da1f2',
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
  },
  quickAction: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#111827',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingBottom: 8,
    paddingTop: 8,
    paddingHorizontal: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navLabel: {
    fontSize: 10,
    color: '#9ca3af',
    marginTop: 4,
  },
  navLabelActive: {
    color: '#6366f1',
    fontWeight: '600',
  },
  createButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -24,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 16,
  },
  placeholderText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 8,
  },
  backButton: {
    marginBottom: 12,
  },
  challengesEmoji: {
    fontSize: 64,
  },
});
