import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  User,
  Bell,
  Palette,
  Shield,
  HelpCircle,
  ChevronRight,
  Moon,
  Sun,
  Globe,
  Clock,
  Mail,
  Smartphone,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";

interface SettingItemProps {
  icon: React.ElementType;
  label: string;
  description?: string;
  action?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
}

function SettingItem({ icon: Icon, label, description, action, onClick, danger }: SettingItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors text-left ios-bounce"
    >
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center",
        danger ? "bg-destructive/10" : "bg-secondary"
      )}>
        <Icon className={cn(
          "w-5 h-5",
          danger ? "text-destructive" : "text-secondary-foreground"
        )} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={cn(
          "text-sm font-semibold",
          danger ? "text-destructive" : "text-foreground"
        )}>{label}</p>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      {action || <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
    </button>
  );
}

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-subtle pb-8">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 border-b border-border/50">
        <div className="px-5 py-4 safe-top max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors ios-bounce">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Settings</h1>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 max-w-lg mx-auto space-y-6">
        {/* Profile Section */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Profile
          </h3>
          <div className="bg-card rounded-2xl card-elevated overflow-hidden">
            <div className="p-4 flex items-center gap-4 border-b border-border/50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                <span className="text-xl font-bold text-white">JD</span>
              </div>
              <div className="flex-1">
                <h2 className="text-base font-bold text-foreground">John Doe</h2>
                <p className="text-sm text-muted-foreground">john@example.com</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <SettingItem icon={User} label="Edit Profile" description="Name, email, photo" />
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Notifications
          </h3>
          <div className="bg-card rounded-2xl card-elevated overflow-hidden divide-y divide-border/50">
            <div className="flex items-center gap-4 p-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">Push Notifications</p>
                <p className="text-xs text-muted-foreground">Receive alerts on your device</p>
              </div>
              <Switch 
                checked={pushNotifications} 
                onCheckedChange={setPushNotifications} 
              />
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <Mail className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">Email Notifications</p>
                <p className="text-xs text-muted-foreground">Weekly reports and updates</p>
              </div>
              <Switch 
                checked={emailNotifications} 
                onCheckedChange={setEmailNotifications} 
              />
            </div>
            <SettingItem 
              icon={Bell} 
              label="Notification Preferences" 
              description="Customize what you're notified about"
            />
          </div>
        </div>

        {/* Appearance */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Appearance
          </h3>
          <div className="bg-card rounded-2xl card-elevated overflow-hidden divide-y divide-border/50">
            <div className="flex items-center gap-4 p-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                {darkMode ? (
                  <Moon className="w-5 h-5 text-secondary-foreground" />
                ) : (
                  <Sun className="w-5 h-5 text-secondary-foreground" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">Dark Mode</p>
                <p className="text-xs text-muted-foreground">Switch between light and dark themes</p>
              </div>
              <Switch 
                checked={darkMode} 
                onCheckedChange={setDarkMode} 
              />
            </div>
            <SettingItem icon={Globe} label="Language" description="English (US)" />
            <SettingItem icon={Clock} label="Timezone" description="Pacific Time (PT)" />
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Support
          </h3>
          <div className="bg-card rounded-2xl card-elevated overflow-hidden divide-y divide-border/50">
            <SettingItem icon={HelpCircle} label="Help Center" description="FAQs and guides" />
            <SettingItem icon={Shield} label="Privacy Policy" />
            <SettingItem icon={Shield} label="Terms of Service" />
          </div>
        </div>

        {/* Logout */}
        <div className="bg-card rounded-2xl card-elevated overflow-hidden">
          <SettingItem 
            icon={LogOut} 
            label="Log Out" 
            danger
          />
        </div>

        {/* Version */}
        <p className="text-center text-xs text-muted-foreground">
          PostFlow v1.0.0
        </p>
      </div>
    </div>
  );
}
