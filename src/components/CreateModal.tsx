import { useState } from "react";
import { 
  X, 
  Image, 
  Video, 
  Calendar, 
  Sparkles,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const platforms = [
  { id: "instagram", name: "Instagram", icon: Instagram },
  { id: "twitter", name: "Twitter", icon: Twitter },
  { id: "linkedin", name: "LinkedIn", icon: Linkedin },
  { id: "facebook", name: "Facebook", icon: Facebook },
];

export function CreateModal({ isOpen, onClose }: CreateModalProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["instagram"]);
  const [content, setContent] = useState("");

  const togglePlatform = (id: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-card rounded-t-3xl animate-slide-up">
        {/* Handle */}
        <div className="flex justify-center py-3">
          <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
        </div>

        {/* Header */}
        <div className="px-5 pb-4 flex items-center justify-between border-b border-border/50">
          <button 
            onClick={onClose}
            className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors ios-bounce"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
          <h2 className="text-base font-semibold text-foreground">Create Post</h2>
          <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-xl ios-bounce hover:opacity-90 transition-opacity">
            Post
          </button>
        </div>

        {/* Platform Selector */}
        <div className="px-5 py-4 border-b border-border/50">
          <div className="flex gap-2">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              const isSelected = selectedPlatforms.includes(platform.id);
              return (
                <button
                  key={platform.id}
                  onClick={() => togglePlatform(platform.id)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-xl transition-all ios-bounce",
                    isSelected 
                      ? "bg-primary/10 ring-2 ring-primary" 
                      : "bg-secondary hover:bg-muted"
                  )}
                >
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center",
                    `platform-${platform.id}`
                  )}>
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="px-5 py-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full h-32 bg-transparent text-foreground placeholder:text-muted-foreground resize-none focus:outline-none text-base leading-relaxed"
          />
        </div>

        {/* Media & Actions */}
        <div className="px-5 py-4 border-t border-border/50 flex items-center justify-between">
          <div className="flex gap-1">
            <button className="p-3 rounded-xl hover:bg-muted transition-colors ios-bounce">
              <Image className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-3 rounded-xl hover:bg-muted transition-colors ios-bounce">
              <Video className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-3 rounded-xl hover:bg-muted transition-colors ios-bounce flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Schedule</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <button className="p-3 rounded-xl bg-gradient-primary hover:opacity-90 transition-opacity ios-bounce">
            <Sparkles className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Safe Area */}
        <div className="safe-bottom" />
      </div>
    </div>
  );
}