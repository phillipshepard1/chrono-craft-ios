import { Clock, Instagram, ChevronRight } from "lucide-react";
import { Challenge, categoryColors, categoryLabels, difficultyConfig } from "@/data/challengePrompts";
import { cn } from "@/lib/utils";

interface ChallengeCardProps {
  challenge: Challenge;
  onSelect: (challenge: Challenge) => void;
  isPlanned?: boolean;
}

const platformIcons: Record<string, React.ElementType> = {
  instagram: Instagram,
};

export function ChallengeCard({ challenge, onSelect, isPlanned }: ChallengeCardProps) {
  const categoryStyle = categoryColors[challenge.category];
  const difficultyStyle = difficultyConfig[challenge.difficulty];

  return (
    <button
      onClick={() => onSelect(challenge)}
      className={cn(
        "w-full bg-card rounded-3xl card-elevated overflow-hidden text-left",
        "transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
        "border border-border/50 ios-bounce"
      )}
    >
      {/* Card Header with Gradient */}
      <div className={cn(
        "h-32 relative flex items-center justify-center",
        "bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20"
      )}>
        <span className="text-6xl">{challenge.emoji}</span>
        
        {/* Challenge Number Badge */}
        <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
          <span className="text-sm font-bold text-foreground">{challenge.number}</span>
        </div>
        
        {/* Planned Badge */}
        {isPlanned && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            Planned ✓
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-3">
        {/* Category & Difficulty */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={cn(
            "px-2.5 py-0.5 rounded-full text-xs font-medium",
            categoryStyle.bg, categoryStyle.text
          )}>
            {categoryLabels[challenge.category]}
          </span>
          <span className={cn(
            "px-2.5 py-0.5 rounded-full text-xs font-medium",
            difficultyStyle.color
          )}>
            {difficultyStyle.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground leading-snug">
          {challenge.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {challenge.shortDescription}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            {/* Time */}
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">{challenge.timeEstimate}</span>
            </div>
            
            {/* Platforms */}
            <div className="flex -space-x-1">
              {challenge.platforms.slice(0, 3).map((platform) => (
                <div
                  key={platform}
                  className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs border-2 border-card",
                    platform === "instagram" && "bg-gradient-to-br from-purple-500 to-pink-500",
                    platform === "tiktok" && "bg-black",
                    platform === "facebook" && "bg-blue-600",
                    platform === "linkedin" && "bg-blue-700"
                  )}
                >
                  {platform[0].toUpperCase()}
                </div>
              ))}
            </div>
          </div>

          {/* View Details Arrow */}
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </button>
  );
}
