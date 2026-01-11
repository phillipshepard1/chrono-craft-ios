import { 
  X, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  Copy,
  CalendarPlus,
  Check,
  Lightbulb,
  ListChecks,
  MessageSquareText
} from "lucide-react";
import { Challenge, categoryColors, categoryLabels, difficultyConfig } from "@/data/challengePrompts";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ChallengeDetailModalProps {
  challenge: Challenge | null;
  isOpen: boolean;
  onClose: () => void;
  isPlanned: boolean;
  onTogglePlan: (challengeId: string) => void;
}

export function ChallengeDetailModal({ 
  challenge, 
  isOpen, 
  onClose, 
  isPlanned,
  onTogglePlan 
}: ChallengeDetailModalProps) {
  const { toast } = useToast();
  const [copiedCaption, setCopiedCaption] = useState(false);

  if (!challenge || !isOpen) return null;

  const categoryStyle = categoryColors[challenge.category];
  const difficultyStyle = difficultyConfig[challenge.difficulty];

  const copyCaption = () => {
    if (challenge.captionTemplate) {
      navigator.clipboard.writeText(challenge.captionTemplate);
      setCopiedCaption(true);
      toast({
        title: "Caption copied!",
        description: "Paste it into your social media app",
      });
      setTimeout(() => setCopiedCaption(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={cn(
        "relative z-50 w-full max-w-lg max-h-[90vh] overflow-hidden",
        "bg-background rounded-t-3xl sm:rounded-3xl",
        "animate-in slide-in-from-bottom-4 fade-in duration-300",
        "flex flex-col"
      )}>
        {/* Header with Gradient */}
        <div className={cn(
          "h-40 relative flex items-center justify-center shrink-0",
          "bg-gradient-to-br from-primary/30 via-primary/20 to-accent/30"
        )}>
          <span className="text-7xl">{challenge.emoji}</span>
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center ios-bounce"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          
          {/* Challenge Number */}
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm">
            <span className="text-sm font-bold text-foreground">Challenge #{challenge.number}</span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
          {/* Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className={cn(
              "px-3 py-1 rounded-full text-sm font-medium",
              categoryStyle.bg, categoryStyle.text
            )}>
              {categoryLabels[challenge.category]}
            </span>
            <span className={cn(
              "px-3 py-1 rounded-full text-sm font-medium",
              difficultyStyle.color
            )}>
              {difficultyStyle.label}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {challenge.timeEstimate}
            </span>
          </div>

          {/* Title & Description */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">{challenge.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{challenge.fullDescription}</p>
          </div>

          {/* Platforms */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Post on:</span>
            <div className="flex gap-2">
              {challenge.platforms.map((platform) => (
                <div
                  key={platform}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium text-white capitalize",
                    platform === "instagram" && "bg-gradient-to-r from-purple-500 to-pink-500",
                    platform === "tiktok" && "bg-black",
                    platform === "facebook" && "bg-blue-600",
                    platform === "linkedin" && "bg-blue-700"
                  )}
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-muted/50 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Step-by-Step Instructions</h3>
            </div>
            <ol className="space-y-2">
              {challenge.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-foreground">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tips */}
          <div className="bg-amber-500/10 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <h3 className="font-semibold text-foreground">Pro Tips</h3>
            </div>
            <ul className="space-y-2">
              {challenge.tips.map((tip, index) => (
                <li key={index} className="flex gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Caption Template */}
          {challenge.captionTemplate && (
            <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquareText className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Caption Template</h3>
                </div>
                <button 
                  onClick={copyCaption}
                  className="flex items-center gap-1.5 text-sm text-primary font-medium ios-bounce"
                >
                  {copiedCaption ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed bg-muted/50 rounded-xl p-3">
                {challenge.captionTemplate}
              </p>
            </div>
          )}

          {/* How To Link */}
          {challenge.howToLink && (
            <a 
              href={challenge.howToLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-muted/50 rounded-2xl group ios-bounce"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Learn How to Do This</p>
                  <p className="text-xs text-muted-foreground">Step-by-step tutorial</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          )}
        </div>

        {/* Fixed Bottom Action */}
        <div className="shrink-0 px-5 py-4 border-t border-border bg-background/80 backdrop-blur-sm safe-bottom">
          <button
            onClick={() => onTogglePlan(challenge.id)}
            className={cn(
              "w-full py-4 rounded-2xl font-semibold text-base flex items-center justify-center gap-2 ios-bounce transition-all",
              isPlanned 
                ? "bg-muted text-foreground" 
                : "bg-gradient-primary text-white shadow-lg shadow-primary/30"
            )}
          >
            {isPlanned ? (
              <>
                <Check className="w-5 h-5" />
                Added to My Week
              </>
            ) : (
              <>
                <CalendarPlus className="w-5 h-5" />
                Add to My Week
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
