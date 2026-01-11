import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Image, 
  Video, 
  FolderOpen, 
  Upload, 
  Search,
  MoreHorizontal,
  CheckCircle2,
  Grid3X3,
  LayoutList
} from "lucide-react";
import { cn } from "@/lib/utils";

type ViewMode = "grid" | "list";
type MediaType = "all" | "image" | "video";

interface MediaItem {
  id: string;
  type: "image" | "video";
  thumbnail: string;
  name: string;
  size: string;
  date: string;
}

const mockMedia: MediaItem[] = [
  { id: "1", type: "image", thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop", name: "Product_launch.jpg", size: "2.4 MB", date: "Jan 10" },
  { id: "2", type: "image", thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=200&fit=crop", name: "Team_photo.jpg", size: "3.1 MB", date: "Jan 9" },
  { id: "3", type: "video", thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=200&h=200&fit=crop", name: "Behind_scenes.mp4", size: "45.2 MB", date: "Jan 8" },
  { id: "4", type: "image", thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop", name: "Office_vibes.jpg", size: "1.8 MB", date: "Jan 7" },
  { id: "5", type: "image", thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop", name: "Collaboration.jpg", size: "2.9 MB", date: "Jan 6" },
  { id: "6", type: "video", thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=200&fit=crop", name: "Tutorial.mp4", size: "128 MB", date: "Jan 5" },
  { id: "7", type: "image", thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop", name: "Workspace.jpg", size: "2.1 MB", date: "Jan 4" },
  { id: "8", type: "image", thumbnail: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=200&h=200&fit=crop", name: "Minimal_desk.jpg", size: "1.5 MB", date: "Jan 3" },
];

export default function MediaLibrary() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [filter, setFilter] = useState<MediaType>("all");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMedia = mockMedia.filter((item) => {
    if (filter !== "all" && item.type !== filter) return false;
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const toggleSelect = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pb-8">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 border-b border-border/50">
        <div className="px-5 py-4 safe-top max-w-lg mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/" className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors ios-bounce">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Media Library</h1>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search files..."
              className="w-full h-11 pl-11 pr-4 bg-card rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
            />
          </div>

          {/* Filters & View Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {(["all", "image", "video"] as MediaType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-semibold transition-all ios-bounce capitalize",
                    filter === type
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {type === "all" ? "All" : type === "image" ? "Images" : "Videos"}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1 bg-secondary rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  viewMode === "grid" ? "bg-card shadow-sm" : "text-muted-foreground"
                )}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  viewMode === "list" ? "bg-card shadow-sm" : "text-muted-foreground"
                )}
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 max-w-lg mx-auto">
        {/* Selected Count */}
        {selectedItems.length > 0 && (
          <div className="mb-4 p-3 bg-primary/10 rounded-xl flex items-center justify-between">
            <span className="text-sm font-medium text-primary">
              {selectedItems.length} selected
            </span>
            <div className="flex gap-2">
              <button className="text-xs font-semibold text-destructive">Delete</button>
              <button className="text-xs font-semibold text-primary">Use in Post</button>
            </div>
          </div>
        )}

        {/* Upload Button */}
        <button className="w-full mb-4 p-4 border-2 border-dashed border-border rounded-2xl flex items-center justify-center gap-3 hover:border-primary hover:bg-primary/5 transition-all ios-bounce">
          <Upload className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Upload Media</span>
        </button>

        {/* Media Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-3 gap-2">
            {filteredMedia.map((item) => {
              const isSelected = selectedItems.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleSelect(item.id)}
                  className={cn(
                    "relative aspect-square rounded-xl overflow-hidden group ios-bounce",
                    isSelected && "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  )}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                  )}
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="space-y-2">
            {filteredMedia.map((item) => {
              const isSelected = selectedItems.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleSelect(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 bg-card rounded-xl transition-all ios-bounce text-left",
                    isSelected && "ring-2 ring-primary"
                  )}
                >
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Video className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.size} • {item.date}</p>
                  </div>
                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="bg-card rounded-xl p-3 text-center card-elevated">
            <FolderOpen className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-lg font-bold text-foreground">{mockMedia.length}</p>
            <p className="text-xs text-muted-foreground">Total Files</p>
          </div>
          <div className="bg-card rounded-xl p-3 text-center card-elevated">
            <Image className="w-5 h-5 text-status-published mx-auto mb-1" />
            <p className="text-lg font-bold text-foreground">
              {mockMedia.filter((i) => i.type === "image").length}
            </p>
            <p className="text-xs text-muted-foreground">Images</p>
          </div>
          <div className="bg-card rounded-xl p-3 text-center card-elevated">
            <Video className="w-5 h-5 text-accent mx-auto mb-1" />
            <p className="text-lg font-bold text-foreground">
              {mockMedia.filter((i) => i.type === "video").length}
            </p>
            <p className="text-xs text-muted-foreground">Videos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
