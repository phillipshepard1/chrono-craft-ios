import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  CheckCircle2,
  Plus,
  RefreshCw,
  Trash2,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ConnectedAccount {
  id: string;
  platform: "instagram" | "twitter" | "linkedin" | "facebook" | "youtube";
  handle: string;
  name: string;
  avatar?: string;
  connected: boolean;
  lastSync?: string;
  followers?: number;
}

const platformIcons: Record<string, React.ElementType> = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
  youtube: Youtube,
};

const platformNames: Record<string, string> = {
  instagram: "Instagram",
  twitter: "Twitter",
  linkedin: "LinkedIn",
  facebook: "Facebook",
  youtube: "YouTube",
};

const mockAccounts: ConnectedAccount[] = [
  {
    id: "1",
    platform: "instagram",
    handle: "@yourhandle",
    name: "Your Business",
    connected: true,
    lastSync: "2 min ago",
    followers: 12500,
  },
  {
    id: "2",
    platform: "twitter",
    handle: "@yourhandle",
    name: "Your Business",
    connected: true,
    lastSync: "5 min ago",
    followers: 8200,
  },
  {
    id: "3",
    platform: "linkedin",
    handle: "Your Name",
    name: "Professional Profile",
    connected: true,
    lastSync: "1 hour ago",
    followers: 3400,
  },
  {
    id: "4",
    platform: "facebook",
    handle: "Your Page",
    name: "Business Page",
    connected: false,
  },
  {
    id: "5",
    platform: "youtube",
    handle: "Your Channel",
    name: "Content Channel",
    connected: false,
  },
];

export default function ConnectedAccounts() {
  const [accounts, setAccounts] = useState(mockAccounts);
  const [syncingId, setSyncingId] = useState<string | null>(null);

  const handleSync = (id: string) => {
    setSyncingId(id);
    setTimeout(() => {
      setAccounts((prev) =>
        prev.map((a) =>
          a.id === id ? { ...a, lastSync: "Just now" } : a
        )
      );
      setSyncingId(null);
    }, 2000);
  };

  const handleDisconnect = (id: string) => {
    setAccounts((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, connected: false, lastSync: undefined } : a
      )
    );
  };

  const handleConnect = (id: string) => {
    // Would open OAuth flow
    setAccounts((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, connected: true, lastSync: "Just now", followers: Math.floor(Math.random() * 10000) } : a
      )
    );
  };

  const connectedAccounts = accounts.filter((a) => a.connected);
  const availableAccounts = accounts.filter((a) => !a.connected);

  return (
    <div className="min-h-screen bg-gradient-subtle pb-8">
      {/* Header */}
      <div className="sticky top-0 glass-nav z-40 border-b border-border/50">
        <div className="px-5 py-4 safe-top max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors ios-bounce">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Connected Accounts</h1>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 max-w-lg mx-auto space-y-6">
        {/* Connected Section */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
            Connected ({connectedAccounts.length})
          </h3>
          <div className="space-y-3">
            {connectedAccounts.map((account) => {
              const Icon = platformIcons[account.platform];
              const isSyncing = syncingId === account.id;
              
              return (
                <div
                  key={account.id}
                  className="bg-card rounded-2xl card-elevated p-4"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      `platform-${account.platform}`
                    )}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold text-foreground">{platformNames[account.platform]}</h3>
                        <CheckCircle2 className="w-4 h-4 text-status-published" />
                      </div>
                      <p className="text-sm text-muted-foreground">{account.handle}</p>
                    </div>
                    {account.followers && (
                      <div className="text-right">
                        <p className="text-sm font-bold text-foreground">
                          {account.followers.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground">followers</p>
                      </div>
                    )}
                  </div>

                  {/* Sync Status */}
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-status-published animate-pulse" />
                      <span className="text-xs text-muted-foreground">
                        Last synced: {account.lastSync}
                      </span>
                    </div>
                    <button
                      onClick={() => handleSync(account.id)}
                      disabled={isSyncing}
                      className="text-xs font-semibold text-primary flex items-center gap-1"
                    >
                      <RefreshCw className={cn(
                        "w-3 h-3",
                        isSyncing && "animate-spin"
                      )} />
                      {isSyncing ? "Syncing..." : "Sync Now"}
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 h-10 bg-secondary text-secondary-foreground rounded-xl text-sm font-medium hover:bg-muted transition-colors ios-bounce">
                      <ExternalLink className="w-4 h-4" />
                      View Profile
                    </button>
                    <button
                      onClick={() => handleDisconnect(account.id)}
                      className="w-10 h-10 flex items-center justify-center bg-destructive/10 text-destructive rounded-xl hover:bg-destructive/20 transition-colors ios-bounce"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Available to Connect */}
        {availableAccounts.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
              Add Account
            </h3>
            <div className="bg-card rounded-2xl card-elevated overflow-hidden divide-y divide-border/50">
              {availableAccounts.map((account) => {
                const Icon = platformIcons[account.platform];
                
                return (
                  <button
                    key={account.id}
                    onClick={() => handleConnect(account.id)}
                    className="w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors ios-bounce text-left"
                  >
                    <div className={cn(
                      "w-11 h-11 rounded-xl flex items-center justify-center",
                      `platform-${account.platform}`
                    )}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{platformNames[account.platform]}</p>
                      <p className="text-xs text-muted-foreground">Tap to connect</p>
                    </div>
                    <Plus className="w-5 h-5 text-primary" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Info Card */}
        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/20">
          <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">OAuth Connection</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We use secure OAuth to connect your accounts. We never store your passwords and you can revoke access at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
