import { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  Calendar as CalendarIcon,
  Instagram, 
  Twitter, 
  Linkedin,
  MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

const scheduledDays: Record<number, { platform: string; count: number; time: string }[]> = {
  12: [{ platform: "instagram", count: 1, time: "9:00 AM" }, { platform: "twitter", count: 1, time: "2:30 PM" }],
  13: [{ platform: "instagram", count: 1, time: "6:00 PM" }],
  14: [{ platform: "linkedin", count: 1, time: "10:00 AM" }],
  18: [{ platform: "twitter", count: 2, time: "11:00 AM" }],
  22: [{ platform: "instagram", count: 1, time: "3:00 PM" }],
  25: [{ platform: "linkedin", count: 1, time: "9:00 AM" }],
};

const platformIcons: Record<string, React.ElementType> = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
};

type ViewMode = "calendar" | "grid";

export function PlanTab() {
  const [currentDate] = useState(new Date(2026, 0, 11));
  const [viewMode, setViewMode] = useState<ViewMode>("calendar");
  const [selectedDay, setSelectedDay] = useState<number | null>(12);
  const today = 11;
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }
  
  return (
    <div className="pb-28 bg-gradient-subtle min-h-screen">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 border-b border-border/50">
        <div className="px-5 py-4 safe-top max-w-lg mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground tracking-tight">Plan</h1>
            <div className="flex items-center gap-1 bg-secondary rounded-xl p-1">
              <button 
                onClick={() => setViewMode("calendar")}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  viewMode === "calendar" ? "bg-card shadow-sm" : "text-muted-foreground"
                )}
              >
                <CalendarIcon className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  viewMode === "grid" ? "bg-card shadow-sm" : "text-muted-foreground"
                )}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Month Navigation */}
        <div className="px-5 pb-3 max-w-lg mx-auto">
          <div className="flex items-center justify-between">
            <button className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors ios-bounce">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <h2 className="text-base font-semibold text-foreground">{monthName}</h2>
            <button className="p-2 -mr-2 rounded-xl hover:bg-muted transition-colors ios-bounce">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="px-5 py-4 max-w-lg mx-auto">
        {viewMode === "calendar" ? (
          <>
            {/* Days of week header */}
            <div className="grid grid-cols-7 mb-2">
              {daysOfWeek.map((day, i) => (
                <div key={i} className="text-center py-2">
                  <span className="text-xs font-semibold text-muted-foreground">{day}</span>
                </div>
              ))}
            </div>
            
            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-1.5">
              {calendarDays.map((day, index) => {
                const hasScheduled = day ? scheduledDays[day] : null;
                const isSelected = day === selectedDay;
                const isToday = day === today;
                
                return (
                  <button
                    key={index}
                    onClick={() => day && setSelectedDay(day)}
                    disabled={!day}
                    className={cn(
                      "aspect-square flex flex-col items-center justify-center rounded-2xl transition-all ios-bounce relative",
                      day && "hover:bg-muted cursor-pointer",
                      isSelected && "bg-primary text-primary-foreground shadow-lg",
                      isToday && !isSelected && "ring-2 ring-primary/30"
                    )}
                  >
                    {day && (
                      <>
                        <span className={cn(
                          "text-sm font-semibold",
                          isSelected ? "text-primary-foreground" : isToday ? "text-primary" : day < today ? "text-muted-foreground" : "text-foreground"
                        )}>
                          {day}
                        </span>
                        {hasScheduled && !isSelected && (
                          <div className="absolute bottom-1.5 flex gap-0.5">
                            {hasScheduled.slice(0, 3).map((_, i) => (
                              <div key={i} className="w-1 h-1 rounded-full bg-primary" />
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Day Details */}
            {selectedDay && scheduledDays[selectedDay] && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  January {selectedDay}
                </h3>
                <div className="space-y-2">
                  {scheduledDays[selectedDay].map((item, i) => {
                    const Icon = platformIcons[item.platform];
                    return (
                      <div key={i} className="bg-card rounded-2xl card-elevated p-4 flex items-center gap-3 ios-bounce">
                        <div className={cn(
                          "w-11 h-11 rounded-xl flex items-center justify-center",
                          `platform-${item.platform}`
                        )}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground">Scheduled Post</p>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
                        <button className="p-2 rounded-xl hover:bg-muted transition-colors">
                          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(scheduledDays).map(([day, items]) => (
              <div key={day} className="bg-card rounded-2xl card-elevated p-4 ios-bounce">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-muted-foreground">Jan {day}</span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {items.length} post{items.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex gap-2">
                  {items.map((item, i) => {
                    const Icon = platformIcons[item.platform];
                    return (
                      <div key={i} className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center",
                        `platform-${item.platform}`
                      )}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}