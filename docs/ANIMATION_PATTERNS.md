# Animation Patterns

PostFlow uses subtle, iOS-inspired animations for a premium feel. Animations should enhance UX without being distracting.

## CSS Animation Classes

### Defined in tailwind.config.ts

| Animation | Class | Description |
|-----------|-------|-------------|
| Accordion expand | `animate-accordion-down` | Content expanding down |
| Accordion collapse | `animate-accordion-up` | Content collapsing up |
| Slide up | `animate-slide-up` | Modal entry from bottom |
| Fade in | `animate-fade-in` | Simple opacity fade |
| Scale in | `animate-scale-in` | Zoom in effect |
| Pulse dot | `animate-pulse-dot` | Notification indicator |

### Custom Utility Classes (index.css)

| Class | CSS | Usage |
|-------|-----|-------|
| `ios-spring` | `transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)` | Smooth spring transitions |
| `ios-bounce` | Scale to 0.95 on active | Tactile press feedback |

## Usage Examples

### Modal Entry Animation

```tsx
<div className="fixed inset-0 z-50 flex items-end justify-center">
  {/* Backdrop */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />
  
  {/* Modal */}
  <div className="relative w-full max-w-lg bg-card rounded-t-3xl animate-slide-up">
    {/* Content */}
  </div>
</div>
```

### Button Press Feedback

```tsx
<button className="ios-bounce hover:scale-105 transition-transform">
  Click Me
</button>
```

### Smooth State Transitions

```tsx
<div className={cn(
  "ios-spring",
  isActive ? "bg-primary text-white" : "bg-muted text-muted-foreground"
)}>
  {/* Content changes smoothly */}
</div>
```

### Notification Dot

```tsx
<div className="relative">
  <Bell className="w-6 h-6" />
  <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full animate-pulse-dot" />
</div>
```

### Card Hover Effect

The `card-elevated` class includes built-in hover transitions:

```tsx
<div className="bg-card rounded-2xl p-4 card-elevated">
  {/* Shadow intensifies on hover */}
</div>
```

## Tailwind Transition Utilities

For custom animations, use Tailwind's transition utilities:

```tsx
// Smooth all transitions
<div className="transition-all duration-300">

// Only specific properties
<div className="transition-transform duration-200">
<div className="transition-opacity duration-150">
<div className="transition-colors duration-200">

// Custom timing
<div className="transition-all duration-500 ease-out">
```

## Animation Timing Reference

| Duration | Use Case |
|----------|----------|
| 150ms | Micro-interactions (hover, focus) |
| 200ms | Button presses, toggles |
| 300ms | Panel transitions, dropdowns |
| 500ms | Modal entry/exit, page transitions |

## Keyframe Definitions

If you need to add custom animations, define them in `tailwind.config.ts`:

```ts
keyframes: {
  "custom-animation": {
    "0%": { opacity: "0", transform: "translateY(20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
},
animation: {
  "custom-animation": "custom-animation 0.3s ease-out",
},
```

## Performance Tips

1. **Prefer CSS over JS** - Use CSS animations when possible
2. **Animate transforms and opacity** - These are GPU-accelerated
3. **Avoid layout thrashing** - Don't animate width/height directly
4. **Use will-change sparingly** - Only for known performance issues
5. **Test on mobile** - Animations should be smooth on lower-end devices
