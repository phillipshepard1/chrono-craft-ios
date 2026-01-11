import { 
  TrendingUp, 
  Calendar, 
  CheckCircle2, 
  Circle,
  Clock,
  ArrowUpRight,
  Sparkles,
  Instagram,
  Twitter
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down";
  icon: React.ElementType;
  gradient?: string;
}

function StatCard({ title, value, change, trend, icon: Icon, gradient }: StatCardProps) {
  return (
    <div className={cn(
      "bg-card rounded-2xl p-4 card-elevated relative overflow-hidden",
      gradient
    )}>
      <div className="flex items-start justify-between mb-3">
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center",
          gradient ? "bg-white/20" : "bg-primary/10"
        )}>
          <Icon className={cn(
            "w-5 h-5",
            gradient ? "text-white" : "text-primary"
          )} />
        </div>
        {change && (
          <div className={cn(
            "flex items-center gap-0.5 text-xs font-medium",
            gradient ? "text-white/90" : trend === "up" ? "text-status-published" : "text-destructive"
          )}>
            <ArrowUpRight className={cn(
              "w-3 h-3",
              trend === "down" && "rotate-90"
            )} />
            {change}
          </div>
        )}
      </div>
      <p className={cn(
        "text-2xl font-bold tracking-tight",
        gradient ? "text-white" : "text-foreground"
      )}>{value}</p>
      <p className={cn(
        "text-sm mt-0.5",
        gradient ? "text-white/70" : "text-muted-foreground"
      )}>{title}</p>
    </div>
  );
}

interface TodoItemProps {
  text: string;
  completed?: boolean;
  time?: string;
  platform?: "instagram" | "twitter";
}

function TodoItem({ text, completed, time, platform }: TodoItemProps) {
  const PlatformIcon = platform === "instagram" ? Instagram : platform === "twitter" ? Twitter : null;
  
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors ios-bounce cursor-pointer">
      <button className="flex-shrink-0">
        {completed ? (
          <CheckCircle2 className="w-5 h-5 text-status-published" />
        ) : (
          <Circle className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
      <div className="flex-1 min-w-0">
        <p className={cn(
          "text-sm font-medium truncate",
          completed ? "text-muted-foreground line-through" : "text-foreground"
        )}>{text}</p>
        {time && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <Clock className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{time}</span>
          </div>
        )}
      </div>
      {PlatformIcon && (
        <div className={cn(
          "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0",
          platform === "instagram" ? "platform-instagram" : "platform-twitter"
        )}>
          <PlatformIcon className="w-3.5 h-3.5 text-white" />
        </div>
      )}
    </div>
  );
}

export function HomeTab() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="pb-28 bg-gradient-subtle min-h-screen">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 border-b border-border/50">
        <div className="px-5 py-4 safe-top max-w-lg mx-auto">
          <p className="text-sm font-medium text-muted-foreground">{greeting}</p>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Dashboard</h1>
        </div>
      </div>
      
      <div className="px-5 py-5 max-w-lg mx-auto space-y-6">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard
            title="Posts Scheduled"
            value="12"
            change="+23%"
            trend="up"
            icon={Calendar}
          />
          <StatCard
            title="Engagement"
            value="2.4K"
            change="+12%"
            trend="up"
            icon={TrendingUp}
            gradient="bg-gradient-primary"
          />
        </div>

        {/* AI Insights Card */}
        <div className="bg-card rounded-2xl card-elevated overflow-hidden">
          <div className="p-4 flex items-center gap-3 border-b border-border/50">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">AI Insights</p>
              <p className="text-xs text-muted-foreground">Based on your performance</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-foreground leading-relaxed">
              Your best posting time is <span className="font-semibold text-primary">9:00 AM</span>. 
              Posts with images get <span className="font-semibold text-primary">47% more</span> engagement.
            </p>
          </div>
        </div>

        {/* Today's Tasks */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-lg font-semibold text-foreground">Today's Tasks</h2>
            <button className="text-sm font-medium text-primary ios-bounce">See all</button>
          </div>
          <div className="bg-card rounded-2xl card-elevated overflow-hidden">
            <TodoItem 
              text="Review scheduled posts for the week"
              completed={true}
            />
            <TodoItem 
              text="Product launch announcement"
              time="9:00 AM"
              platform="instagram"
            />
            <TodoItem 
              text="Respond to comments on viral post"
              platform="twitter"
            />
            <TodoItem 
              text="Create content for weekend campaign"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3 px-1">Quick Actions</h2>
          <div className="grid grid-cols-3 gap-3">
            <button className="bg-card rounded-2xl p-4 card-elevated ios-bounce flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">Schedule</span>
            </button>
            <button className="bg-card rounded-2xl p-4 card-elevated ios-bounce flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xs font-medium text-foreground">AI Write</span>
            </button>
            <button className="bg-card rounded-2xl p-4 card-elevated ios-bounce flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-status-published/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-status-published" />
              </div>
              <span className="text-xs font-medium text-foreground">Analytics</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}