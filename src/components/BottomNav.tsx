import { Home, CalendarDays, MessageCircle, Menu, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "home" | "plan" | "create" | "inbox" | "more";

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  onCreateClick: () => void;
}

const navItems = [
  { id: "home" as Tab, label: "Home", icon: Home },
  { id: "plan" as Tab, label: "Plan", icon: CalendarDays },
  { id: "create" as Tab, label: "Create", icon: Plus, isCenter: true },
  { id: "inbox" as Tab, label: "Inbox", icon: MessageCircle },
  { id: "more" as Tab, label: "More", icon: Menu },
];

export function BottomNav({ activeTab, onTabChange, onCreateClick }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-nav border-t border-border/50 safe-bottom z-50">
      <div className="flex items-center justify-around h-20 max-w-lg mx-auto px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={onCreateClick}
                className="relative -mt-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/30 ios-bounce hover:scale-105 transition-transform">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
              </button>
            );
          }
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 w-16 h-full transition-all duration-200 ios-bounce",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon 
                className={cn(
                  "w-6 h-6 transition-all duration-200",
                  isActive && "scale-105"
                )} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={cn(
                "text-[10px] font-medium transition-all duration-200",
                isActive && "font-semibold"
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}