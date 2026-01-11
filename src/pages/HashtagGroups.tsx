import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Plus,
  Hash,
  Copy,
  Trash2,
  Edit2,
  ChevronRight,
  Search,
  Star,
  StarOff
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HashtagGroup {
  id: string;
  name: string;
  hashtags: string[];
  color: string;
  isFavorite: boolean;
  usageCount: number;
}

const mockGroups: HashtagGroup[] = [
  {
    id: "1",
    name: "Marketing",
    hashtags: ["#marketing", "#digitalmarketing", "#socialmedia", "#contentmarketing", "#branding"],
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    isFavorite: true,
    usageCount: 24,
  },
  {
    id: "2",
    name: "Tech",
    hashtags: ["#tech", "#technology", "#innovation", "#startup", "#ai", "#saas"],
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    isFavorite: true,
    usageCount: 18,
  },
  {
    id: "3",
    name: "Lifestyle",
    hashtags: ["#lifestyle", "#motivation", "#inspiration", "#wellness", "#mindset"],
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    isFavorite: false,
    usageCount: 12,
  },
  {
    id: "4",
    name: "Product Launch",
    hashtags: ["#newproduct", "#launch", "#comingsoon", "#sneakpeek", "#announcement"],
    color: "bg-gradient-primary",
    isFavorite: false,
    usageCount: 8,
  },
];

export default function HashtagGroups() {
  const [groups, setGroups] = useState(mockGroups);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [newHashtags, setNewHashtags] = useState("");

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    group.hashtags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleFavorite = (id: string) => {
    setGroups((prev) =>
      prev.map((g) => (g.id === id ? { ...g, isFavorite: !g.isFavorite } : g))
    );
  };

  const copyHashtags = (hashtags: string[]) => {
    navigator.clipboard.writeText(hashtags.join(" "));
    // Would show toast here
  };

  const handleCreate = () => {
    if (!newGroupName.trim() || !newHashtags.trim()) return;
    
    const hashtags = newHashtags.split(/[\s,]+/).map((tag) => 
      tag.startsWith("#") ? tag : `#${tag}`
    );

    setGroups((prev) => [
      {
        id: Date.now().toString(),
        name: newGroupName,
        hashtags,
        color: "bg-gradient-to-br from-emerald-500 to-teal-500",
        isFavorite: false,
        usageCount: 0,
      },
      ...prev,
    ]);
    
    setNewGroupName("");
    setNewHashtags("");
    setIsCreating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pb-8">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 border-b border-border/50">
        <div className="px-5 py-4 safe-top max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Link to="/" className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors ios-bounce">
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </Link>
              <h1 className="text-xl font-bold text-foreground tracking-tight">Hashtag Groups</h1>
            </div>
            <button 
              onClick={() => setIsCreating(true)}
              className="p-2.5 rounded-xl bg-primary hover:bg-primary/90 transition-colors ios-bounce"
            >
              <Plus className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hashtags..."
              className="w-full h-11 pl-11 pr-4 bg-card rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
            />
          </div>
        </div>
      </div>

      <div className="px-5 py-4 max-w-lg mx-auto space-y-4">
        {/* Create New Group */}
        {isCreating && (
          <div className="bg-card rounded-2xl card-elevated p-4 space-y-3 animate-slide-up">
            <input
              type="text"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              placeholder="Group name"
              className="w-full h-11 px-4 bg-muted rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
              autoFocus
            />
            <textarea
              value={newHashtags}
              onChange={(e) => setNewHashtags(e.target.value)}
              placeholder="Enter hashtags separated by spaces or commas"
              className="w-full h-20 px-4 py-3 bg-muted rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm resize-none"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setIsCreating(false)}
                className="flex-1 h-10 bg-secondary text-secondary-foreground font-medium rounded-xl ios-bounce"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className="flex-1 h-10 bg-primary text-primary-foreground font-medium rounded-xl ios-bounce"
              >
                Create
              </button>
            </div>
          </div>
        )}

        {/* Favorites Section */}
        {filteredGroups.some((g) => g.isFavorite) && (
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
              Favorites
            </h3>
            <div className="space-y-3">
              {filteredGroups.filter((g) => g.isFavorite).map((group) => (
                <GroupCard 
                  key={group.id} 
                  group={group} 
                  onToggleFavorite={toggleFavorite}
                  onCopy={copyHashtags}
                />
              ))}
            </div>
          </div>
        )}

        {/* All Groups */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            All Groups
          </h3>
          <div className="space-y-3">
            {filteredGroups.filter((g) => !g.isFavorite).map((group) => (
              <GroupCard 
                key={group.id} 
                group={group} 
                onToggleFavorite={toggleFavorite}
                onCopy={copyHashtags}
              />
            ))}
          </div>
        </div>

        {filteredGroups.length === 0 && (
          <div className="text-center py-12">
            <Hash className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No hashtag groups found</p>
          </div>
        )}
      </div>
    </div>
  );
}

interface GroupCardProps {
  group: HashtagGroup;
  onToggleFavorite: (id: string) => void;
  onCopy: (hashtags: string[]) => void;
}

function GroupCard({ group, onToggleFavorite, onCopy }: GroupCardProps) {
  return (
    <div className="bg-card rounded-2xl card-elevated overflow-hidden ios-bounce">
      <div className="p-4">
        <div className="flex items-start gap-3 mb-3">
          <div className={cn(
            "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
            group.color
          )}>
            <Hash className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">{group.name}</h3>
              <button 
                onClick={() => onToggleFavorite(group.id)}
                className="p-1 -m-1"
              >
                {group.isFavorite ? (
                  <Star className="w-5 h-5 text-warning fill-warning" />
                ) : (
                  <StarOff className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              {group.hashtags.length} hashtags • Used {group.usageCount} times
            </p>
          </div>
        </div>

        {/* Hashtags Preview */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {group.hashtags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted rounded-lg text-xs font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
          {group.hashtags.length > 5 && (
            <span className="px-2 py-1 bg-muted rounded-lg text-xs font-medium text-muted-foreground">
              +{group.hashtags.length - 5} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button 
            onClick={() => onCopy(group.hashtags)}
            className="flex-1 flex items-center justify-center gap-2 h-10 bg-primary/10 text-primary rounded-xl text-sm font-medium hover:bg-primary/20 transition-colors"
          >
            <Copy className="w-4 h-4" />
            Copy All
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-secondary rounded-xl hover:bg-muted transition-colors">
            <Edit2 className="w-4 h-4 text-secondary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}
