# Mobile Patterns

PostFlow is designed mobile-first with iOS as the primary target. Follow these patterns for consistent mobile UX.

## Safe Areas

Always account for iOS safe areas (notch, home indicator):

```tsx
// Bottom navigation
<nav className="fixed bottom-0 left-0 right-0 safe-bottom">

// Sticky header
<div className="sticky top-0 safe-top">
```

The custom utilities handle safe areas:
- `safe-bottom`: `padding-bottom: max(0.5rem, env(safe-area-inset-bottom))`
- `safe-top`: `padding-top: max(1rem, env(safe-area-inset-top))`

## Bottom Navigation

Standard bottom nav pattern:

```tsx
<nav className="fixed bottom-0 left-0 right-0 glass-nav border-t border-border/50 safe-bottom z-50">
  <div className="flex items-center justify-around h-20 max-w-lg mx-auto px-2">
    {/* Nav items */}
    <button className="flex flex-col items-center gap-1 w-16 ios-bounce">
      <Home className="w-6 h-6" />
      <span className="text-[10px] font-medium">Home</span>
    </button>
    
    {/* Center action button (elevated) */}
    <button className="relative -mt-6">
      <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/30 ios-bounce">
        <Plus className="w-7 h-7 text-white" strokeWidth={2.5} />
      </div>
    </button>
  </div>
</nav>
```

**Key points:**
- Height: `h-20` (80px)
- Center button elevated with `-mt-6`
- Icons: `w-6 h-6`
- Labels: `text-[10px] font-medium`
- Always include `safe-bottom`

## Bottom Sheets / Modals

For mobile-friendly overlays:

```tsx
<div className="fixed inset-0 z-50">
  {/* Backdrop */}
  <div 
    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
    onClick={onClose}
  />
  
  {/* Sheet */}
  <div className="absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl max-h-[90vh] overflow-y-auto animate-slide-up">
    {/* Drag handle */}
    <div className="flex justify-center py-3">
      <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
    </div>
    
    {/* Content */}
    <div className="px-5 pb-8 safe-bottom">
      {/* Sheet content */}
    </div>
  </div>
</div>
```

**Key points:**
- Top corners: `rounded-t-3xl`
- Max height: `max-h-[90vh]`
- Drag handle: centered pill
- Include `safe-bottom` for content padding

## Touch Targets

Minimum touch target size is 44x44 pixels:

```tsx
// Button with adequate touch area
<button className="p-3"> {/* 12px padding = ~44px with icon */}
  <Icon className="w-5 h-5" />
</button>

// List item with good touch area
<button className="w-full p-4">
  {/* Content */}
</button>

// Small icon button
<Button variant="ghost" size="icon" className="w-11 h-11 rounded-xl">
  <Settings className="w-5 h-5" />
</Button>
```

## Page Structure with Bottom Nav

Account for bottom nav height in page content:

```tsx
<div className="pb-28 min-h-screen">
  {/* pb-28 = 112px to account for bottom nav + safe area */}
  
  {/* Sticky header */}
  <div className="sticky top-0 glass-nav z-40 border-b border-border/50">
    <div className="px-5 py-4 safe-top max-w-lg mx-auto">
      <h1 className="text-2xl font-bold">Title</h1>
    </div>
  </div>
  
  {/* Content */}
  <div className="px-5 py-5 max-w-lg mx-auto">
    {/* Page content */}
  </div>
</div>
```

## Pull-to-Refresh Pattern

For lists that support refresh:

```tsx
const [isRefreshing, setIsRefreshing] = useState(false);

// Refresh indicator at top of list
{isRefreshing && (
  <div className="flex justify-center py-4">
    <Loader2 className="w-6 h-6 animate-spin text-primary" />
  </div>
)}
```

## Horizontal Scrolling

For carousels and horizontal lists:

```tsx
<div className="overflow-x-auto -mx-5 px-5 scrollbar-hide">
  <div className="flex gap-3 pb-2">
    {items.map(item => (
      <div key={item.id} className="flex-shrink-0 w-64">
        <Card />
      </div>
    ))}
  </div>
</div>
```

**Note:** `-mx-5 px-5` extends scroll to screen edges while maintaining content padding.

## Swipe Gestures

For swipeable cards (using touch events or a library like embla-carousel):

```tsx
// Container for swipeable content
<div className="overflow-hidden">
  <div 
    className="flex transition-transform duration-300 ease-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {cards.map(card => (
      <div key={card.id} className="flex-shrink-0 w-full">
        {/* Card content */}
      </div>
    ))}
  </div>
</div>
```

## Form Inputs on Mobile

Optimize inputs for mobile keyboards:

```tsx
// Email input
<Input 
  type="email"
  inputMode="email"
  autoComplete="email"
  className="h-14 rounded-2xl"
/>

// Phone input
<Input 
  type="tel"
  inputMode="tel"
  autoComplete="tel"
  className="h-14 rounded-2xl"
/>

// Numeric input
<Input 
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"
  className="h-14 rounded-2xl"
/>
```

## Fixed/Sticky Elements Checklist

When adding fixed or sticky elements, ensure:

1. ✅ Proper z-index (header: `z-40`, bottom nav: `z-50`, modals: `z-50+`)
2. ✅ Safe area handling (`safe-top`, `safe-bottom`)
3. ✅ Content doesn't get hidden behind fixed elements (`pb-28` for bottom nav)
4. ✅ Glass effect for headers (`glass-nav`)
5. ✅ Subtle border for visual separation (`border-b border-border/50`)
