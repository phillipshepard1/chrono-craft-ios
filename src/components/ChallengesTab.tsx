import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { weeklyChallenge, Challenge } from "@/data/challengePrompts";
import { ChallengeCard } from "./ChallengeCard";
import { ChallengeDetailModal } from "./ChallengeDetailModal";
import { MyWeeklyPlan } from "./MyWeeklyPlan";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { useToast } from "@/hooks/use-toast";

interface ChallengesTabProps {
  onBack?: () => void;
}

export function ChallengesTab({ onBack }: ChallengesTabProps) {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plannedIds, setPlannedIds] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { toast } = useToast();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    loop: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Track current slide
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Set up event listener
  useState(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  });

  const handleSelectChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setIsModalOpen(true);
  };

  const handleTogglePlan = (challengeId: string) => {
    setPlannedIds((prev) => {
      const isPlanned = prev.includes(challengeId);
      if (isPlanned) {
        toast({
          title: "Removed from your week",
          description: "Challenge removed from your plan",
        });
        return prev.filter((id) => id !== challengeId);
      } else {
        toast({
          title: "Added to your week! 🎉",
          description: "You're one step closer to crushing it this week",
        });
        return [...prev, challengeId];
      }
    });
  };

  const plannedChallenges = weeklyChallenge.filter((c) => plannedIds.includes(c.id));

  // Get current week string
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  const weekString = `${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;

  return (
    <div className="pb-28 bg-gradient-subtle min-h-screen">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 border-b border-border/50">
        <div className="px-5 py-4 safe-top max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-1">
            {onBack && (
              <button onClick={onBack} className="ios-bounce -ml-2 p-2">
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
            )}
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Week of {weekString}</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Weekly Challenges</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            10 content ideas for real estate agents
          </p>
        </div>
      </div>

      <div className="px-5 py-5 max-w-lg mx-auto space-y-6">
        {/* Progress */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-sm font-bold text-primary">{plannedIds.length}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              of {weeklyChallenge.length} planned
            </span>
          </div>
          <div className="flex gap-1">
            {weeklyChallenge.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  plannedIds.includes(weeklyChallenge[i].id) 
                    ? "bg-primary" 
                    : "bg-muted"
                )}
              />
            ))}
          </div>
        </div>

        {/* My Weekly Plan */}
        <MyWeeklyPlan 
          plannedChallenges={plannedChallenges} 
          onViewPlan={() => {}} 
        />

        {/* Challenge Cards Carousel */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-lg font-semibold text-foreground">This Week's Challenges</h2>
            <div className="flex gap-1">
              <button
                onClick={scrollPrev}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center ios-bounce"
              >
                <ChevronLeft className="w-4 h-4 text-foreground" />
              </button>
              <button
                onClick={scrollNext}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center ios-bounce"
              >
                <ChevronRight className="w-4 h-4 text-foreground" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden -mx-5" ref={emblaRef}>
            <div className="flex">
              {weeklyChallenge.map((challenge, index) => (
                <div 
                  key={challenge.id} 
                  className={cn(
                    "flex-shrink-0 w-[85%] px-2 first:pl-5 last:pr-5 transition-all duration-300",
                    index === currentIndex ? "scale-100 opacity-100" : "scale-95 opacity-70"
                  )}
                >
                  <ChallengeCard
                    challenge={challenge}
                    onSelect={handleSelectChallenge}
                    isPlanned={plannedIds.includes(challenge.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {weeklyChallenge.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "w-6 bg-primary" 
                    : "w-1.5 bg-muted hover:bg-muted-foreground/50"
                )}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Challenge Detail Modal */}
      <ChallengeDetailModal
        challenge={selectedChallenge}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isPlanned={selectedChallenge ? plannedIds.includes(selectedChallenge.id) : false}
        onTogglePlan={handleTogglePlan}
      />
    </div>
  );
}
