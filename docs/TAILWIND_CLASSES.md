# Custom Tailwind Classes

These custom utility classes are defined in `src/index.css` and should be used throughout the application.

## Navigation & Layout

| Class | Description | Usage |
|-------|-------------|-------|
| `glass-nav` | Frosted glass effect with blur | Sticky headers, bottom navigation |
| `safe-bottom` | iOS safe area bottom padding | Bottom navigation, bottom sheets |
| `safe-top` | iOS safe area top padding | Sticky headers |

```tsx
// Example: Sticky header
<div className="sticky top-0 glass-nav z-40 border-b border-border/50">
  <div className="px-5 py-4 safe-top">
    {/* Header content */}
  </div>
</div>
```

## Card Shadows

| Class | Description | Usage |
|-------|-------------|-------|
| `card-elevated` | Standard shadow with hover transition | Cards, list items |
| `card-floating` | Elevated shadow for overlay elements | Modals, popovers |
| `stat-card` | Preset for stat cards | Quick stat cards |

```tsx
// Standard card
<div className="bg-card rounded-2xl p-4 card-elevated">

// Modal overlay
<div className="bg-card rounded-2xl p-6 card-floating">
```

## Gradients

| Class | Description | Usage |
|-------|-------------|-------|
| `bg-gradient-primary` | Primary to accent diagonal gradient | CTA buttons, accent cards |
| `bg-gradient-subtle` | Subtle page background gradient | Page containers |
| `text-gradient` | Gradient text effect | Highlighted headings |

```tsx
// Gradient button
<button className="bg-gradient-primary text-white rounded-xl px-6 py-3">

// Page background
<div className="min-h-screen bg-gradient-subtle">

// Gradient text
<h1 className="text-gradient text-3xl font-bold">Welcome</h1>
```

## Platform Colors

Use these for social media platform branding:

| Class | Platform | Color |
|-------|----------|-------|
| `platform-instagram` | Instagram | Pink to orange gradient |
| `platform-twitter` | Twitter/X | Blue |
| `platform-facebook` | Facebook | Dark blue |
| `platform-linkedin` | LinkedIn | LinkedIn blue |
| `platform-tiktok` | TikTok | Pink/red |
| `platform-youtube` | YouTube | Red |

```tsx
<div className="w-10 h-10 rounded-xl platform-instagram flex items-center justify-center">
  <Instagram className="w-5 h-5 text-white" />
</div>
```

## Status Colors

| Class | Status | Color |
|-------|--------|-------|
| `status-scheduled` | Scheduled | Primary blue |
| `status-draft` | Draft | Gray |
| `status-published` | Published | Success green |

## Animations

| Class | Description | Usage |
|-------|-------------|-------|
| `ios-spring` | Spring-like transition (0.5s) | General smooth transitions |
| `ios-bounce` | Scale down on press | Buttons, interactive cards |

```tsx
// Button with tactile feedback
<button className="ios-bounce hover:scale-105 transition-transform">

// Smooth transition element
<div className="ios-spring">
```

## Combined Example

```tsx
<button 
  onClick={handleClick}
  className="w-full flex items-center gap-4 p-4 bg-card rounded-2xl card-elevated ios-bounce"
>
  <div className="w-10 h-10 rounded-xl platform-instagram flex items-center justify-center">
    <Instagram className="w-5 h-5 text-white" />
  </div>
  <div className="flex-1 text-left">
    <p className="font-medium text-foreground">Instagram</p>
    <p className="text-sm text-muted-foreground">Connected</p>
  </div>
  <Badge className="status-published text-white">Active</Badge>
</button>
```
