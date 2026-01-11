# Color Tokens

All colors use HSL CSS variables for automatic light/dark mode support. **Never hardcode colors** - always use semantic tokens.

## Core Semantic Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--background` | Near white | Black | Page backgrounds |
| `--foreground` | Near black | Near white | Primary text |
| `--card` | White | Dark gray | Card backgrounds |
| `--card-foreground` | Near black | Near white | Card text |
| `--muted` | Light gray | Dark gray | Muted backgrounds |
| `--muted-foreground` | Medium gray | Light gray | Secondary text |

## Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | Blue (211, 100%, 50%) | Primary actions, links, active states |
| `--primary-foreground` | White | Text on primary backgrounds |
| `--accent` | Purple (266, 100%, 64%) | Secondary emphasis, gradients |
| `--accent-foreground` | White | Text on accent backgrounds |

## Status Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--success` | Green (142, 71%, 45%) | Success states, published |
| `--warning` | Orange (38, 92%, 50%) | Warnings, pending |
| `--destructive` | Red (0, 84%, 60%) | Errors, delete actions |

## Platform Colors

| Token | Value | Platform |
|-------|-------|----------|
| `--instagram` | Pink (328, 70%, 55%) | Instagram |
| `--twitter` | Blue (203, 89%, 53%) | Twitter/X |
| `--facebook` | Blue (220, 46%, 48%) | Facebook |
| `--linkedin` | Blue (201, 100%, 35%) | LinkedIn |
| `--tiktok` | Pink (340, 82%, 52%) | TikTok |
| `--youtube` | Red (0, 100%, 50%) | YouTube |

## Usage Patterns

### Backgrounds

```tsx
// Page background
<div className="bg-background">

// Card background
<div className="bg-card">

// Muted section
<div className="bg-muted">

// Primary tinted background (10% opacity)
<div className="bg-primary/10">

// Success indicator background
<div className="bg-success/10">
```

### Text

```tsx
// Primary text
<p className="text-foreground">

// Secondary/muted text
<p className="text-muted-foreground">

// Primary colored text
<p className="text-primary">

// Success text
<p className="text-success">

// Error text
<p className="text-destructive">
```

### Borders

```tsx
// Standard border
<div className="border border-border">

// Subtle border (50% opacity)
<div className="border-b border-border/50">

// Input border
<input className="border border-input">
```

### Icon Containers

```tsx
// Primary icon container
<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
  <Icon className="w-5 h-5 text-primary" />
</div>

// Success icon container
<div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
  <Check className="w-5 h-5 text-success" />
</div>

// Muted icon container
<div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
  <Icon className="w-5 h-5 text-muted-foreground" />
</div>
```

### Gradients

```tsx
// Primary to accent gradient
<div className="bg-gradient-to-r from-primary to-accent">

// Use custom gradient class
<div className="bg-gradient-primary">
```

## Dark Mode Considerations

The color system automatically adapts to dark mode via the `.dark` class on the root element. Key differences:

- Backgrounds become dark/black
- Foregrounds become light/white
- Shadows become more prominent
- Some opacity values may need adjustment

**Always test both modes** when implementing new features.
