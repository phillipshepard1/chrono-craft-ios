import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Search,
  Filter,
  Calendar,
  Clock,
  MoreHorizontal,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Edit2,
  Trash2,
  Copy,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

type FilterStatus = "all" | "scheduled" | "draft" | "published";

interface ScheduledPost {
  id: string;
  content: string;
  platform: "instagram" | "twitter" | "linkedin" | "facebook";
  scheduledDate: string;
  scheduledTime: string;
  status: "scheduled" | "draft" | "published";
  image?: string;
}

const mockPosts: ScheduledPost[] = [
  { 
    id: "1", 
    content: "Excited to share our latest product update! 🚀", 
    platform: "instagram",
    scheduledDate: "Jan 12, 2026",
    scheduledTime: "9:00 AM",
    status: "scheduled",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop"
  },
  { 
    id: "2", 
    content: "Quick tip: Consistency is key when building your brand on social media. 🧵", 
    platform: "twitter",
    scheduledDate: "Jan 12, 2026",
    scheduledTime: "2:30 PM",
    status: "scheduled"
  },
  { 
    id: "3", 
    content: "Behind the scenes at our latest photoshoot! ✨", 
    platform: "instagram",
    scheduledDate: "Jan 13, 2026",
    scheduledTime: "6:00 PM",
    status: "draft",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&h=100&fit=crop"
  },
  { 
    id: "4", 
    content: "We're thrilled to announce our partnership with industry leaders.", 
    platform: "linkedin",
    scheduledDate: "Jan 14, 2026",
    scheduledTime: "10:00 AM",
    status: "scheduled"
  },
  { 
    id: "5", 
    content: "Check out our latest blog post on marketing trends for 2026!", 
    platform: "facebook",
    scheduledDate: "Jan 10, 2026",
    scheduledTime: "3:00 PM",
    status: "published"
  },
];

const platformIcons: Record<string, React.ElementType> = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
};

const statusColors: Record<string, string> = {
  scheduled: "bg-status-scheduled text-white",
  draft: "bg-muted text-muted-foreground",
  published: "bg-status-published text-white",
};

export default function ScheduledPosts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<FilterStatus>("all");
  const [swipedPost, setSwipedPost] = useState<string | null>(null);

  const filteredPosts = mockPosts.filter((post) => {
    if (filter !== "all" && post.status !== filter) return false;
    if (searchQuery && !post.content.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-subtle pb-8">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 border-b border-border/50">
        <div className="px-5 py-4 safe-top max-w-lg mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/" className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors ios-bounce">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Scheduled Posts</h1>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts..."
              className="w-full h-11 pl-11 pr-4 bg-card rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {(["all", "scheduled", "draft", "published"] as FilterStatus[]).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-semibold transition-all ios-bounce capitalize whitespace-nowrap",
                  filter === status
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                )}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-4 max-w-lg mx-auto space-y-3">
        {filteredPosts.map((post) => {
          const Icon = platformIcons[post.platform];
          const isSwipedOpen = swipedPost === post.id;

          return (
            <div 
              key={post.id} 
              className="relative overflow-hidden rounded-2xl"
            >
              {/* Swipe Actions Background */}
              <div className="absolute inset-y-0 right-0 flex">
                <button className="w-16 bg-primary flex items-center justify-center">
                  <Edit2 className="w-5 h-5 text-white" />
                </button>
                <button className="w-16 bg-accent flex items-center justify-center">
                  <Copy className="w-5 h-5 text-white" />
                </button>
                <button className="w-16 bg-destructive flex items-center justify-center">
                  <Trash2 className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Post Card */}
              <div 
                className={cn(
                  "bg-card card-elevated p-4 transition-transform duration-200",
                  isSwipedOpen ? "-translate-x-48" : "translate-x-0"
                )}
                onClick={() => setSwipedPost(isSwipedOpen ? null : post.id)}
              >
                <div className="flex gap-3">
                  {/* Platform Icon */}
                  <div className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
                    `platform-${post.platform}`
                  )}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className={cn(
                        "px-2 py-0.5 rounded-full text-[10px] font-semibold capitalize",
                        statusColors[post.status]
                      )}>
                        {post.status}
                      </span>
                      <button 
                        className="p-1 -m-1 rounded-lg hover:bg-muted transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSwipedPost(isSwipedOpen ? null : post.id);
                        }}
                      >
                        <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>

                    <p className="text-sm text-foreground line-clamp-2 mb-2">
                      {post.content}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.scheduledDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.scheduledTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail */}
                  {post.image && (
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No posts found</p>
          </div>
        )}

        {/* Stats Summary */}
        <div className="mt-6 p-4 bg-card rounded-2xl card-elevated">
          <h3 className="text-sm font-semibold text-foreground mb-3">Quick Stats</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {mockPosts.filter((p) => p.status === "scheduled").length}
              </p>
              <p className="text-xs text-muted-foreground">Scheduled</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {mockPosts.filter((p) => p.status === "draft").length}
              </p>
              <p className="text-xs text-muted-foreground">Drafts</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                {mockPosts.filter((p) => p.status === "published").length}
              </p>
              <p className="text-xs text-muted-foreground">Published</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
