import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex flex-col items-center justify-center px-6">
        <div className="w-20 h-20 rounded-full bg-status-published/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-status-published" />
        </div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight mb-2 text-center">Check your email</h1>
        <p className="text-muted-foreground text-center max-w-sm mb-8">
          We've sent a password reset link to <span className="font-semibold text-foreground">{email}</span>
        </p>
        <Link
          to="/login"
          className="flex items-center gap-2 text-primary font-semibold hover:underline ios-bounce"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      {/* Back Button */}
      <div className="px-6 pt-6 safe-top">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors ios-bounce"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      {/* Header */}
      <div className="px-6 pt-8 pb-8 text-center">
        <div className="w-16 h-16 rounded-3xl bg-muted mx-auto mb-6 flex items-center justify-center">
          <Mail className="w-8 h-8 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Forgot password?</h1>
        <p className="text-muted-foreground max-w-sm mx-auto">
          No worries, we'll send you reset instructions.
        </p>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 max-w-lg mx-auto w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "w-full h-14 bg-gradient-primary text-white font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/30 ios-bounce transition-all",
              isLoading ? "opacity-70" : "hover:opacity-90"
            )}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Reset Password
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="px-6 py-8 text-center safe-bottom">
        <p className="text-muted-foreground">
          Remember your password?{" "}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
