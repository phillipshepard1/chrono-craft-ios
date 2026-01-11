import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { HomeTab } from "@/components/HomeTab";
import { PlanTab } from "@/components/PlanTab";
import { InboxTab } from "@/components/InboxTab";
import { MoreTab } from "@/components/MoreTab";
import { CreateModal } from "@/components/CreateModal";

type Tab = "home" | "plan" | "create" | "inbox" | "more";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {activeTab === "home" && <HomeTab />}
      {activeTab === "plan" && <PlanTab />}
      {activeTab === "inbox" && <InboxTab />}
      {activeTab === "more" && <MoreTab />}
      
      <BottomNav 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        onCreateClick={() => setIsCreateOpen(true)}
      />
      
      <CreateModal 
        isOpen={isCreateOpen} 
        onClose={() => setIsCreateOpen(false)} 
      />
    </div>
  );
};

export default Index;