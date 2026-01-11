import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { ContentTab } from "@/components/ContentTab";
import { CalendarTab } from "@/components/CalendarTab";
import { SettingsTab } from "@/components/SettingsTab";

type Tab = "content" | "calendar" | "settings";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("content");

  return (
    <div className="min-h-screen bg-background">
      {activeTab === "content" && <ContentTab />}
      {activeTab === "calendar" && <CalendarTab />}
      {activeTab === "settings" && <SettingsTab />}
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
