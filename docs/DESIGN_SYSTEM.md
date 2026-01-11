# PostFlow Design System

## Core Design Philosophy

PostFlow follows an **iOS/Apple-inspired aesthetic** with a mobile-first approach. The design emphasizes:

- Clean, minimal interfaces with generous whitespace
- Rounded corners and subtle shadows for depth
- Smooth, spring-like animations for tactile feedback
- Full light/dark mode support using HSL CSS variables

## Visual Rules

### Border Radius
| Element | Class | Value |
|---------|-------|-------|
| Cards, modals | `rounded-2xl` | 16px |
| Buttons, icon containers | `rounded-xl` | 12px |
| Badges, pills | `rounded-full` | 9999px |
| Large modals (top corners) | `rounded-t-3xl` | 24px |

### Shadows
Never use raw shadow classes. Always use semantic utilities:
- `card-elevated` - Standard card with hover transition
- `card-floating` - Elevated for modals/overlays
- `shadow-lg shadow-primary/30` - Gradient button glow effect

### Spacing Patterns
| Context | Classes |
|---------|---------|
| Page content padding | `px-5 py-5` |
| Section spacing | `space-y-6` |
| Card internal padding | `p-4` or `p-5` |
| Grid gaps | `gap-3` or `gap-4` |
| List item gaps | `space-y-3` |

### Container Width
All main content uses: `max-w-lg mx-auto`

This creates a mobile-optimized centered layout.

## Page Structure Template

```tsx
<div className="pb-28 bg-gradient-subtle min-h-screen">
  {/* Sticky Glass Header */}
  <div className="sticky top-0 glass-nav z-40 border-b border-border/50">
    <div className="px-5 py-4 safe-top max-w-lg mx-auto flex items-center justify-between">
      <h1 className="text-2xl font-bold text-foreground tracking-tight">Page Title</h1>
      {/* Optional: Action button */}
      <Button variant="ghost" size="icon" className="rounded-xl">
        <Settings className="w-5 h-5" />
      </Button>
    </div>
  </div>
  
  {/* Main Content */}
  <div className="px-5 py-5 max-w-lg mx-auto space-y-6">
    {/* Content sections */}
  </div>
</div>
```

## Key Principles

1. **Mobile-first**: Design for touch, use safe areas, ensure 44px minimum touch targets
2. **Consistency**: Use semantic tokens, never hardcode colors
3. **Feedback**: Every interactive element should have visual feedback (hover, active states)
4. **Hierarchy**: Use size, weight, and color to establish clear visual hierarchy
5. **Performance**: Prefer CSS animations over JavaScript when possible
