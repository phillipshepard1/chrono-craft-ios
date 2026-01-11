import { useState } from "react";
import { ChevronLeft, ChevronRight, Instagram, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const scheduledDays: Record<number, { platform: string; count: number }[]> = {
  12: [{ platform: "instagram", count: 1 }, { platform: "twitter", count: 1 }],
  13: [{ platform: "instagram", count: 1 }],
  14: [{ platform: "linkedin", count: 1 }],
  18: [{ platform: "twitter", count: 2 }],
  22: [{ platform: "instagram", count: 1 }, { platform: "facebook", count: 1 }],
};

const platformColors: Record<string, string> = {
  instagram: "bg-platform-instagram",
  twitter: "bg-platform-twitter",
  facebook: "bg-platform-facebook",
  linkedin: "bg-platform-linkedin",
};

export function CalendarTab() {
  const [currentDate] = useState(new Date(2026, 0, 11)); // January 2026
  const today = 11;
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  
  const calendarDays = [];
  
  // Empty cells for days before the first day of month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }
  
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 px-4 py-4 border-b border-border">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <button className="p-2 rounded-xl hover:bg-muted transition-colors">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">{monthName}</h1>
          <button className="p-2 rounded-xl hover:bg-muted transition-colors">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
      
      {/* Calendar Grid */}
      <div className="px-4 py-4 max-w-lg mx-auto">
        {/* Days of week header */}
        <div className="grid grid-cols-7 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center py-2">
              <span className="text-xs font-medium text-muted-foreground">{day}</span>
            </div>
          ))}
        </div>
        
        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={cn(
                "aspect-square flex flex-col items-center justify-start p-1.5 rounded-xl transition-colors",
                day && "hover:bg-muted cursor-pointer",
                day === today && "bg-primary/10"
              )}
            >
              {day && (
                <>
                  <span className={cn(
                    "text-sm font-medium mb-1",
                    day === today ? "text-primary font-bold" : "text-foreground",
                    day < today && "text-muted-foreground"
                  )}>
                    {day}
                  </span>
                  {scheduledDays[day] && (
                    <div className="flex gap-0.5 flex-wrap justify-center">
                      {scheduledDays[day].map((item, i) => (
                        <div
                          key={i}
                          className={cn(
                            "w-1.5 h-1.5 rounded-full animate-pulse-dot",
                            platformColors[item.platform]
                          )}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        
        {/* Upcoming section */}
        <div className="mt-8">
          <h2 className="text-base font-semibold text-foreground mb-4">Upcoming</h2>
          <div className="space-y-3">
            <div className="bg-card rounded-xl card-elevated p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full platform-instagram flex items-center justify-center">
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Product Update Post</p>
                <p className="text-xs text-muted-foreground">Tomorrow at 9:00 AM</p>
              </div>
            </div>
            <div className="bg-card rounded-xl card-elevated p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full platform-twitter flex items-center justify-center">
                <Twitter className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Tips Thread</p>
                <p className="text-xs text-muted-foreground">Tomorrow at 2:30 PM</p>
              </div>
            </div>
            <div className="bg-card rounded-xl card-elevated p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full platform-linkedin flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Partnership Announcement</p>
                <p className="text-xs text-muted-foreground">Jan 14 at 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
