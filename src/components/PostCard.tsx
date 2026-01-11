import { Instagram, Twitter, Facebook, Linkedin, Clock, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface Post {
  id: string;
  content: string;
  platform: "instagram" | "twitter" | "facebook" | "linkedin";
  scheduledTime: string;
  scheduledDate: string;
  status: "scheduled" | "draft" | "published";
  image?: string;
}

interface PostCardProps {
  post: Post;
}

const platformIcons = {
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
};

const platformColors = {
  instagram: "platform-instagram",
  twitter: "platform-twitter",
  facebook: "platform-facebook",
  linkedin: "platform-linkedin",
};

const statusLabels = {
  scheduled: "Scheduled",
  draft: "Draft",
  published: "Published",
};

export function PostCard({ post }: PostCardProps) {
  const PlatformIcon = platformIcons[post.platform];
  
  return (
    <div className="bg-card rounded-2xl card-elevated p-4 animate-slide-up">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center",
            platformColors[post.platform]
          )}>
            <PlatformIcon className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <span className={cn(
              "text-xs font-medium px-2 py-0.5 rounded-full",
              post.status === "scheduled" && "bg-status-scheduled/10 text-status-scheduled",
              post.status === "draft" && "bg-status-draft/10 text-status-draft",
              post.status === "published" && "bg-status-published/10 text-status-published"
            )}>
              {statusLabels[post.status]}
            </span>
          </div>
        </div>
        <button className="p-1.5 rounded-lg hover:bg-muted transition-colors">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
      
      {post.image && (
        <div className="relative mb-3 rounded-xl overflow-hidden aspect-video bg-muted">
          <img 
            src={post.image} 
            alt="Post preview" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <p className="text-sm text-foreground leading-relaxed mb-3 line-clamp-3">
        {post.content}
      </p>
      
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Clock className="w-3.5 h-3.5" />
        <span className="text-xs font-medium">
          {post.scheduledDate} at {post.scheduledTime}
        </span>
      </div>
    </div>
  );
}
