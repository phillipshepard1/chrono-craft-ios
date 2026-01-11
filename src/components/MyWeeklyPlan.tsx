import { Challenge } from "@/data/challengePrompts";
import { cn } from "@/lib/utils";
import { Check, ChevronRight, Sparkles } from "lucide-react";

interface MyWeeklyPlanProps {
  plannedChallenges: Challenge[];
  onViewPlan: () => void;
}

export function MyWeeklyPlan({ plannedChallenges, onViewPlan }: MyWeeklyPlanProps) {
  const isEmpty = plannedChallenges.length === 0;

  return (
    <div className="bg-card rounded-2xl card-elevated overflow-hidden">
      <div className="p-4 flex items-center justify-between border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">My Week</h3>
            <p className="text-xs text-muted-foreground">
              {isEmpty ? "No challenges planned yet" : `${plannedChallenges.length} challenge${plannedChallenges.length > 1 ? 's' : ''} planned`}
            </p>
          </div>
        </div>
        {!isEmpty && (
          <button 
            onClick={onViewPlan}
            className="text-sm font-medium text-primary ios-bounce flex items-center gap-1"
          >
            View all
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {isEmpty ? (
        <div className="p-6 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Swipe through challenges below and add some to your week!
          </p>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-muted animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
            ))}
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {plannedChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className={cn(
                  "flex-shrink-0 w-24 flex flex-col items-center gap-2 p-3 rounded-2xl",
                  "bg-muted/50 border border-border/50"
                )}
              >
                <span className="text-3xl">{challenge.emoji}</span>
                <p className="text-xs font-medium text-foreground text-center line-clamp-2">
                  {challenge.title}
                </p>
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
