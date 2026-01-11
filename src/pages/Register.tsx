import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const passwordRequirements = [
  { id: "length", label: "At least 8 characters", check: (p: string) => p.length >= 8 },
  { id: "upper", label: "One uppercase letter", check: (p: string) => /[A-Z]/.test(p) },
  { id: "number", label: "One number", check: (p: string) => /\d/.test(p) },
];

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/";
    }, 1500);
  };

  const allRequirementsMet = passwordRequirements.every((req) => req.check(password));

  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      {/* Header */}
      <div className="px-6 pt-16 pb-6 safe-top text-center">
        <div className="w-16 h-16 rounded-3xl bg-gradient-primary mx-auto mb-6 flex items-center justify-center shadow-lg shadow-primary/30">
          <span className="text-2xl font-bold text-white">P</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Create account</h1>
        <p className="text-muted-foreground">Start your free 14-day trial</p>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 max-w-lg mx-auto w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground pl-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full h-14 pl-12 pr-4 bg-card rounded-2xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground pl-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full h-14 pl-12 pr-4 bg-card rounded-2xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground pl-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-14 pl-12 pr-12 bg-card rounded-2xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Password Requirements */}
          {password.length > 0 && (
            <div className="space-y-2 p-3 bg-muted/50 rounded-xl">
              {passwordRequirements.map((req) => {
                const met = req.check(password);
                return (
                  <div key={req.id} className="flex items-center gap-2">
                    <div className={cn(
                      "w-4 h-4 rounded-full flex items-center justify-center transition-colors",
                      met ? "bg-status-published" : "bg-muted-foreground/30"
                    )}>
                      {met && <Check className="w-2.5 h-2.5 text-white" />}
                    </div>
                    <span className={cn(
                      "text-xs transition-colors",
                      met ? "text-foreground" : "text-muted-foreground"
                    )}>{req.label}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading || !allRequirementsMet}
            className={cn(
              "w-full h-14 bg-gradient-primary text-white font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/30 ios-bounce transition-all",
              (isLoading || !allRequirementsMet) ? "opacity-70" : "hover:opacity-90"
            )}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Create Account
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          {/* Terms */}
          <p className="text-xs text-center text-muted-foreground leading-relaxed">
            By creating an account, you agree to our{" "}
            <button className="text-primary hover:underline">Terms of Service</button>
            {" "}and{" "}
            <button className="text-primary hover:underline">Privacy Policy</button>
          </p>
        </form>
      </div>

      {/* Footer */}
      <div className="px-6 py-8 text-center safe-bottom">
        <p className="text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
