import { Plus, Filter } from "lucide-react";
import { PostCard } from "./PostCard";

const mockPosts = [
  {
    id: "1",
    content: "Excited to share our latest product update! We've been working hard on new features that will help you save time and boost productivity. 🚀",
    platform: "instagram" as const,
    scheduledTime: "9:00 AM",
    scheduledDate: "Jan 12",
    status: "scheduled" as const,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    content: "Quick tip: Consistency is key when building your brand on social media. Here's what we learned from our journey... 🧵",
    platform: "twitter" as const,
    scheduledTime: "2:30 PM",
    scheduledDate: "Jan 12",
    status: "scheduled" as const,
  },
  {
    id: "3",
    content: "Behind the scenes at our latest photoshoot! Can't wait to show you what we've been creating. Stay tuned for the big reveal! ✨",
    platform: "instagram" as const,
    scheduledTime: "6:00 PM",
    scheduledDate: "Jan 13",
    status: "draft" as const,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    content: "We're thrilled to announce our partnership with industry leaders to bring you even more value. Read the full story on our blog.",
    platform: "linkedin" as const,
    scheduledTime: "10:00 AM",
    scheduledDate: "Jan 14",
    status: "scheduled" as const,
  },
];

export function ContentTab() {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 px-4 py-4 border-b border-border">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div>
            <h1 className="text-xl font-bold text-foreground">Content</h1>
            <p className="text-sm text-muted-foreground">4 posts scheduled</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
              <Filter className="w-5 h-5 text-secondary-foreground" />
            </button>
            <button className="p-2.5 rounded-xl bg-primary hover:bg-primary/90 transition-colors">
              <Plus className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Posts List */}
      <div className="px-4 py-4 max-w-lg mx-auto space-y-4">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
