import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { HomeTab } from "@/components/HomeTab";
import { PlanTab } from "@/components/PlanTab";
import { InboxTab } from "@/components/InboxTab";
import { MoreTab } from "@/components/MoreTab";
import { CreateModal } from "@/components/CreateModal";
import { ChallengesTab } from "@/components/ChallengesTab";

type Tab = "home" | "plan" | "create" | "inbox" | "more" | "challenges";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {activeTab === "home" && (
        <HomeTab onNavigateToChallenges={() => setActiveTab("challenges")} />
      )}
      {activeTab === "plan" && <PlanTab />}
      {activeTab === "inbox" && <InboxTab />}
      {activeTab === "more" && <MoreTab />}
      {activeTab === "challenges" && (
        <ChallengesTab onBack={() => setActiveTab("home")} />
      )}
      
      {activeTab !== "challenges" && (
        <BottomNav 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          onCreateClick={() => setIsCreateOpen(true)}
        />
      )}
      
      <CreateModal 
        isOpen={isCreateOpen} 
        onClose={() => setIsCreateOpen(false)} 
      />
    </div>
  );
};

export default Index;