import { 
  User, 
  Bell, 
  Palette, 
  Link2, 
  Shield, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Instagram,
  Twitter,
  Facebook,
  Linkedin
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface SettingItemProps {
  icon: React.ElementType;
  label: string;
  description?: string;
  action?: React.ReactNode;
  onClick?: () => void;
}

function SettingItem({ icon: Icon, label, description, action, onClick }: SettingItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors text-left"
    >
      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
        <Icon className="w-5 h-5 text-secondary-foreground" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      {action || <ChevronRight className="w-5 h-5 text-muted-foreground" />}
    </button>
  );
}

const connectedAccounts = [
  { platform: "Instagram", icon: Instagram, connected: true, handle: "@yourhandle" },
  { platform: "Twitter", icon: Twitter, connected: true, handle: "@yourhandle" },
  { platform: "Facebook", icon: Facebook, connected: false, handle: null },
  { platform: "LinkedIn", icon: Linkedin, connected: true, handle: "Your Name" },
];

const platformClasses: Record<string, string> = {
  Instagram: "platform-instagram",
  Twitter: "platform-twitter",
  Facebook: "platform-facebook",
  LinkedIn: "platform-linkedin",
};

export function SettingsTab() {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 px-4 py-4 border-b border-border">
        <div className="max-w-lg mx-auto">
          <h1 className="text-xl font-bold text-foreground">Settings</h1>
        </div>
      </div>
      
      <div className="px-4 py-4 max-w-lg mx-auto space-y-6">
        {/* Profile Section */}
        <div className="bg-card rounded-2xl card-elevated overflow-hidden">
          <div className="p-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">JD</span>
            </div>
            <div className="flex-1">
              <h2 className="text-base font-semibold text-foreground">John Doe</h2>
              <p className="text-sm text-muted-foreground">john@example.com</p>
              <span className="inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                Pro Plan
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
        
        {/* Connected Accounts */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Connected Accounts
          </h3>
          <div className="bg-card rounded-2xl card-elevated overflow-hidden divide-y divide-border">
            {connectedAccounts.map((account) => {
              const Icon = account.icon;
              return (
                <div key={account.platform} className="p-4 flex items-center gap-3">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    platformClasses[account.platform]
                  )}>
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{account.platform}</p>
                    <p className="text-xs text-muted-foreground">
                      {account.connected ? account.handle : "Not connected"}
                    </p>
                  </div>
                  {account.connected ? (
                    <span className="text-xs font-medium text-status-published">Connected</span>
                  ) : (
                    <button className="text-xs font-medium text-primary">Connect</button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Preferences */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Preferences
          </h3>
          <div className="bg-card rounded-2xl card-elevated overflow-hidden">
            <SettingItem 
              icon={Bell} 
              label="Notifications" 
              description="Push, email, and in-app alerts"
              action={<Switch defaultChecked />}
            />
            <SettingItem 
              icon={Palette} 
              label="Appearance" 
              description="Light mode"
            />
            <SettingItem 
              icon={Link2} 
              label="Default Link" 
              description="bio.link/yourhandle"
            />
          </div>
        </div>
        
        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Support
          </h3>
          <div className="bg-card rounded-2xl card-elevated overflow-hidden">
            <SettingItem 
              icon={Shield} 
              label="Privacy & Security" 
            />
            <SettingItem 
              icon={HelpCircle} 
              label="Help Center" 
            />
          </div>
        </div>
        
        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl border border-destructive/20 hover:bg-destructive/5 transition-colors">
          <LogOut className="w-5 h-5 text-destructive" />
          <span className="text-sm font-medium text-destructive">Log Out</span>
        </button>
      </div>
    </div>
  );
}
