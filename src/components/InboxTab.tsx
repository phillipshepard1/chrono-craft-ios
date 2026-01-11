import { useState } from "react";
import { 
  MessageCircle, 
  AtSign, 
  Mail,
  Heart,
  Repeat,
  Instagram,
  Twitter,
  MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

type FilterType = "all" | "comments" | "mentions" | "dms";

interface NotificationProps {
  type: "comment" | "mention" | "dm" | "like" | "repost";
  platform: "instagram" | "twitter";
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  time: string;
  unread?: boolean;
}

function Notification({ type, platform, user, content, time, unread }: NotificationProps) {
  const PlatformIcon = platform === "instagram" ? Instagram : Twitter;
  
  const typeIcons = {
    comment: MessageCircle,
    mention: AtSign,
    dm: Mail,
    like: Heart,
    repost: Repeat,
  };
  const TypeIcon = typeIcons[type];
  
  return (
    <div className={cn(
      "flex items-start gap-3 p-4 transition-colors ios-bounce cursor-pointer",
      unread ? "bg-primary/5" : "hover:bg-muted/50"
    )}>
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center overflow-hidden">
          <span className="text-base font-semibold text-foreground">{user.name.charAt(0)}</span>
        </div>
        <div className={cn(
          "absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-card",
          `platform-${platform}`
        )}>
          <PlatformIcon className="w-2.5 h-2.5 text-white" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-sm">
              <span className="font-semibold text-foreground">{user.name}</span>
              <span className="text-muted-foreground">
                {type === "comment" && " commented on your post"}
                {type === "mention" && " mentioned you"}
                {type === "dm" && " sent you a message"}
                {type === "like" && " liked your post"}
                {type === "repost" && " shared your post"}
              </span>
            </p>
            <p className="text-sm text-foreground mt-1 line-clamp-2">{content}</p>
          </div>
          {unread && (
            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-2">{time}</p>
      </div>
    </div>
  );
}

const filters: { id: FilterType; label: string; icon: React.ElementType }[] = [
  { id: "all", label: "All", icon: Mail },
  { id: "comments", label: "Comments", icon: MessageCircle },
  { id: "mentions", label: "Mentions", icon: AtSign },
  { id: "dms", label: "Messages", icon: Mail },
];

const notifications: NotificationProps[] = [
  {
    type: "comment",
    platform: "instagram",
    user: { name: "Sarah Chen", avatar: "" },
    content: "This is exactly what I needed! Great tips 🙌",
    time: "2 min ago",
    unread: true,
  },
  {
    type: "mention",
    platform: "twitter",
    user: { name: "Alex Rivera", avatar: "" },
    content: "@yourhandle Your latest post about productivity is 🔥",
    time: "15 min ago",
    unread: true,
  },
  {
    type: "dm",
    platform: "instagram",
    user: { name: "Jordan Taylor", avatar: "" },
    content: "Hey! Would love to collaborate on a project...",
    time: "1 hour ago",
    unread: true,
  },
  {
    type: "like",
    platform: "twitter",
    user: { name: "Morgan Lee", avatar: "" },
    content: "Your post received 234 likes",
    time: "2 hours ago",
  },
  {
    type: "comment",
    platform: "instagram",
    user: { name: "Casey Kim", avatar: "" },
    content: "Can you share more about your workflow?",
    time: "3 hours ago",
  },
  {
    type: "repost",
    platform: "twitter",
    user: { name: "Jamie Chen", avatar: "" },
    content: "Great insights! Sharing with my followers",
    time: "5 hours ago",
  },
];

export function InboxTab() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  
  const filteredNotifications = notifications.filter(n => {
    if (activeFilter === "all") return true;
    if (activeFilter === "comments") return n.type === "comment";
    if (activeFilter === "mentions") return n.type === "mention";
    if (activeFilter === "dms") return n.type === "dm";
    return true;
  });

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="pb-28 bg-gradient-subtle min-h-screen">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 border-b border-border/50">
        <div className="px-5 py-4 safe-top max-w-lg mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground tracking-tight">Inbox</h1>
              {unreadCount > 0 && (
                <p className="text-sm text-muted-foreground">{unreadCount} unread</p>
              )}
            </div>
            <button className="p-2 rounded-xl hover:bg-muted transition-colors ios-bounce">
              <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
        
        {/* Filter Pills */}
        <div className="px-5 pb-3 max-w-lg mx-auto">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ios-bounce",
                    activeFilter === filter.id 
                      ? "bg-foreground text-background" 
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Notifications List */}
      <div className="max-w-lg mx-auto">
        <div className="bg-card rounded-2xl mx-5 mt-4 card-elevated overflow-hidden divide-y divide-border/50">
          {filteredNotifications.map((notification, i) => (
            <Notification key={i} {...notification} />
          ))}
        </div>
      </div>
    </div>
  );
}