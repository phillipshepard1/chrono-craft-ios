import { 
  BarChart3, 
  FolderOpen, 
  Sparkles, 
  Settings,
  ChevronRight,
  User,
  Bell,
  Palette,
  Shield,
  HelpCircle,
  LogOut,
  TrendingUp,
  Users,
  Eye,
  Instagram,
  Twitter,
  Linkedin,
  Facebook
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";

interface MenuItemProps {
  icon: React.ElementType;
  label: string;
  description?: string;
  badge?: string;
  gradient?: string;
  onClick?: () => void;
}

function MenuItem({ icon: Icon, label, description, badge, gradient, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors text-left ios-bounce"
    >
      <div className={cn(
        "w-11 h-11 rounded-xl flex items-center justify-center",
        gradient || "bg-secondary"
      )}>
        <Icon className={cn(
          "w-5 h-5",
          gradient ? "text-white" : "text-secondary-foreground"
        )} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      {badge && (
        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
          {badge}
        </span>
      )}
      <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
    </button>
  );
}

const analyticsStats = [
  { label: "Impressions", value: "24.5K", change: "+12%", icon: Eye },
  { label: "Engagement", value: "2.4K", change: "+8%", icon: TrendingUp },
  { label: "Followers", value: "1.2K", change: "+3%", icon: Users },
];

const connectedAccounts = [
  { platform: "Instagram", icon: Instagram, connected: true, handle: "@yourhandle" },
  { platform: "Twitter", icon: Twitter, connected: true, handle: "@yourhandle" },
  { platform: "Facebook", icon: Facebook, connected: false },
  { platform: "LinkedIn", icon: Linkedin, connected: true, handle: "Your Name" },
];

export function MoreTab() {
  return (
    <div className="pb-28 bg-gradient-subtle min-h-screen">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 border-b border-border/50">
        <div className="px-5 py-4 safe-top max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">More</h1>
        </div>
      </div>
      
      <div className="px-5 py-5 max-w-lg mx-auto space-y-6">
        {/* Profile Card */}
        <div className="bg-card rounded-2xl card-elevated overflow-hidden ios-bounce">
          <div className="p-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
              <span className="text-xl font-bold text-white">JD</span>
            </div>
            <div className="flex-1">
              <h2 className="text-base font-bold text-foreground">John Doe</h2>
              <p className="text-sm text-muted-foreground">john@example.com</p>
              <span className="inline-flex items-center gap-1 mt-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-primary text-white">
                <Sparkles className="w-3 h-3" />
                Pro Plan
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        {/* Quick Analytics */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            This Week
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {analyticsStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-card rounded-2xl p-3 card-elevated text-center">
                  <Icon className="w-4 h-4 text-primary mx-auto mb-1" />
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <span className="text-xs font-medium text-status-published">{stat.change}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Menu */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Tools
          </h3>
          <div className="bg-card rounded-2xl card-elevated overflow-hidden">
            <MenuItem 
              icon={BarChart3} 
              label="Analytics" 
              description="Detailed performance insights"
              gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
            />
            <MenuItem 
              icon={FolderOpen} 
              label="Library" 
              description="Media & templates"
              gradient="bg-gradient-to-br from-orange-500 to-pink-500"
            />
            <MenuItem 
              icon={Sparkles} 
              label="AI Lab" 
              description="Generate content with AI"
              badge="New"
              gradient="bg-gradient-primary"
            />
          </div>
        </div>

        {/* Connected Accounts */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Connected Accounts
          </h3>
          <div className="bg-card rounded-2xl card-elevated overflow-hidden divide-y divide-border/50">
            {connectedAccounts.map((account) => {
              const Icon = account.icon;
              return (
                <div key={account.platform} className="p-4 flex items-center gap-3 ios-bounce">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    `platform-${account.platform.toLowerCase()}`
                  )}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{account.platform}</p>
                    <p className="text-xs text-muted-foreground">
                      {account.connected ? account.handle : "Not connected"}
                    </p>
                  </div>
                  {account.connected ? (
                    <span className="text-xs font-semibold text-status-published">Connected</span>
                  ) : (
                    <button className="text-xs font-semibold text-primary">Connect</button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Settings */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Settings
          </h3>
          <div className="bg-card rounded-2xl card-elevated overflow-hidden">
            <div className="flex items-center gap-4 p-4">
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                <Bell className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">Notifications</p>
                <p className="text-xs text-muted-foreground">Push & email alerts</p>
              </div>
              <Switch defaultChecked />
            </div>
            <MenuItem icon={Palette} label="Appearance" description="Light mode" />
            <MenuItem icon={Shield} label="Privacy & Security" />
            <MenuItem icon={HelpCircle} label="Help Center" />
          </div>
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl border border-destructive/20 hover:bg-destructive/5 transition-colors ios-bounce">
          <LogOut className="w-5 h-5 text-destructive" />
          <span className="text-sm font-semibold text-destructive">Log Out</span>
        </button>
      </div>
    </div>
  );
}