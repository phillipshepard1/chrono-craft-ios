import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Clock,
  Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-subtle pb-8">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 border-b border-border/50">
        <div className="px-5 py-4 safe-top max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors ios-bounce">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Analytics</h1>
          </div>
        </div>
      </div>

      <div className="px-5 py-8 max-w-lg mx-auto">
        {/* Coming Soon Hero */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 rounded-3xl bg-gradient-primary mx-auto mb-6 flex items-center justify-center shadow-lg shadow-primary/30 animate-pulse">
            <BarChart3 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Analytics Coming Soon</h2>
          <p className="text-muted-foreground max-w-sm mx-auto">
            We're building powerful analytics to help you understand your audience and grow your presence.
          </p>
        </div>

        {/* Preview Stats */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            What You'll Get
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <FeatureCard 
              icon={Eye}
              title="Impressions"
              description="Track post reach"
              gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Engagement"
              description="Likes, comments, shares"
              gradient="bg-gradient-to-br from-purple-500 to-pink-500"
            />
            <FeatureCard 
              icon={Users}
              title="Followers"
              description="Growth over time"
              gradient="bg-gradient-to-br from-orange-500 to-red-500"
            />
            <FeatureCard 
              icon={Clock}
              title="Best Times"
              description="Optimal posting"
              gradient="bg-gradient-primary"
            />
          </div>
        </div>

        {/* Feature List */}
        <div className="bg-card rounded-2xl card-elevated overflow-hidden mb-8">
          <div className="p-4 border-b border-border/50">
            <h3 className="text-base font-semibold text-foreground">Features in Development</h3>
          </div>
          <div className="divide-y divide-border/50">
            <FeatureItem 
              icon={Heart}
              title="Engagement Analytics"
              description="Deep dive into likes, comments, and shares across platforms"
            />
            <FeatureItem 
              icon={MessageCircle}
              title="Audience Insights"
              description="Understand your followers' demographics and behavior"
            />
            <FeatureItem 
              icon={Share2}
              title="Performance Reports"
              description="Weekly and monthly reports delivered to your inbox"
            />
            <FeatureItem 
              icon={Rocket}
              title="Growth Predictions"
              description="AI-powered forecasting to plan your strategy"
            />
          </div>
        </div>

        {/* Notify Me */}
        <div className="bg-gradient-primary rounded-2xl p-6 text-center shadow-lg shadow-primary/30">
          <h3 className="text-lg font-bold text-white mb-2">Get Early Access</h3>
          <p className="text-white/80 text-sm mb-4">
            Be the first to know when Analytics launches
          </p>
          <button className="w-full h-12 bg-white text-primary font-semibold rounded-xl ios-bounce hover:bg-white/90 transition-colors">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

function FeatureCard({ icon: Icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="bg-card rounded-2xl p-4 card-elevated">
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center mb-3",
        gradient
      )}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

interface FeatureItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function FeatureItem({ icon: Icon, title, description }: FeatureItemProps) {
  return (
    <div className="p-4 flex items-start gap-3">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
