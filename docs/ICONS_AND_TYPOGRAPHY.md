# Icons & Typography

## Icons

### Library
PostFlow uses **lucide-react** for all icons.

```tsx
import { Home, Settings, Plus, ChevronRight } from "lucide-react";
```

### Standard Sizes

| Context | Size | Class |
|---------|------|-------|
| Navigation icons | 24px | `w-6 h-6` |
| Default/card icons | 20px | `w-5 h-5` |
| Small/inline icons | 14px | `w-3.5 h-3.5` |
| Large/hero icons | 28-32px | `w-7 h-7` or `w-8 h-8` |

### Stroke Width

| Context | strokeWidth |
|---------|-------------|
| Active navigation | 2.5 |
| Default | 2 |
| Thin/decorative | 1.5 |

```tsx
// Active nav icon
<Home className="w-6 h-6" strokeWidth={2.5} />

// Default icon
<Settings className="w-5 h-5" strokeWidth={2} />
```

### Icon Containers

Always wrap icons in styled containers for consistent appearance:

```tsx
// Primary themed
<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
  <TrendingUp className="w-5 h-5 text-primary" />
</div>

// Platform colored
<div className="w-10 h-10 rounded-xl platform-instagram flex items-center justify-center">
  <Instagram className="w-5 h-5 text-white" />
</div>

// Muted/neutral
<div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
  <FileText className="w-5 h-5 text-muted-foreground" />
</div>

// Gradient (for CTAs)
<div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
  <Plus className="w-7 h-7 text-white" strokeWidth={2.5} />
</div>
```

## Typography

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', system-ui, sans-serif;
```

### Type Scale

| Element | Classes | Usage |
|---------|---------|-------|
| Page title | `text-2xl font-bold tracking-tight` | Main page headers |
| Section title | `text-lg font-semibold` | Card headers, section titles |
| Card title | `text-base font-medium` | List item titles |
| Body text | `text-sm` | Regular content |
| Small text | `text-xs` | Timestamps, hints |
| Label | `text-sm font-medium` | Form labels |
| Section header | `text-sm font-semibold uppercase tracking-wide` | Section dividers |

### Text Colors

| Purpose | Class |
|---------|-------|
| Primary text | `text-foreground` |
| Secondary text | `text-muted-foreground` |
| Link/action | `text-primary` |
| Success | `text-success` |
| Error | `text-destructive` |
| On dark/gradient | `text-white` |
| Subdued on dark | `text-white/80` |

### Common Typography Patterns

```tsx
// Page header
<h1 className="text-2xl font-bold text-foreground tracking-tight">Dashboard</h1>

// Section header (uppercase label)
<h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
  Recent Activity
</h2>

// Card title + subtitle
<div>
  <p className="font-medium text-foreground">Post Title</p>
  <p className="text-sm text-muted-foreground">Draft • 2 hours ago</p>
</div>

// Large stat value
<p className="text-2xl font-bold text-foreground">1,234</p>

// Form label
<Label className="text-sm font-medium text-foreground">Email Address</Label>

// Helper/hint text
<p className="text-xs text-muted-foreground mt-1">We'll never share your email.</p>
```

### Gradient Text

For emphasis on headings:

```tsx
<h1 className="text-gradient text-3xl font-bold">Welcome Back</h1>
```

## Icon + Text Combinations

```tsx
// Inline icon with text
<div className="flex items-center gap-2 text-muted-foreground">
  <Clock className="w-3.5 h-3.5" />
  <span className="text-sm">2 hours ago</span>
</div>

// Badge with dot indicator
<Badge variant="secondary" className="bg-success/10 text-success border-0">
  <div className="w-1.5 h-1.5 rounded-full bg-success mr-1.5" />
  Published
</Badge>

// Stat with trend
<div className="flex items-center gap-1 text-success text-sm font-medium">
  <ArrowUp className="w-3.5 h-3.5" />
  <span>12%</span>
</div>
```
