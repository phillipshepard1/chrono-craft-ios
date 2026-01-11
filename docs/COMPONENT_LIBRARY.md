# Component Library

PostFlow uses **shadcn/ui** components as the foundation. All components are pre-installed and available in `src/components/ui/`.

## Available Components

### Layout & Container
- `Card` - Container with rounded corners and optional shadow
- `Separator` - Horizontal or vertical divider
- `AspectRatio` - Maintain aspect ratio for media
- `ScrollArea` - Custom scrollbar container
- `Resizable` - Resizable panels

### Navigation
- `NavigationMenu` - Top navigation with dropdowns
- `Menubar` - Application menu bar
- `Breadcrumb` - Breadcrumb navigation
- `Tabs` - Tab navigation
- `Pagination` - Page navigation

### Forms
- `Button` - Primary action element
- `Input` - Text input field
- `Textarea` - Multi-line text input
- `Select` - Dropdown select
- `Checkbox` - Checkbox input
- `RadioGroup` - Radio button group
- `Switch` - Toggle switch
- `Slider` - Range slider
- `Label` - Form label
- `Form` - Form with validation (react-hook-form)
- `InputOTP` - One-time password input

### Feedback
- `Toast` / `Toaster` - Toast notifications
- `Alert` - Inline alerts
- `Progress` - Progress bar
- `Skeleton` - Loading placeholder
- `Badge` - Status badges

### Overlay
- `Dialog` - Modal dialog
- `Sheet` - Slide-out panel
- `Drawer` - Bottom drawer (mobile-friendly)
- `Popover` - Floating content
- `Tooltip` - Hover tooltips
- `AlertDialog` - Confirmation dialog
- `ContextMenu` - Right-click menu
- `DropdownMenu` - Dropdown menu
- `HoverCard` - Hover preview card
- `Command` - Command palette (cmdk)

### Data Display
- `Table` - Data table
- `Avatar` - User avatar
- `Calendar` - Date picker calendar
- `Carousel` - Image/content carousel
- `Chart` - Data visualization (recharts)
- `Accordion` - Expandable sections
- `Collapsible` - Single collapsible section

### Interactive
- `Toggle` - Toggle button
- `ToggleGroup` - Toggle button group

## Import Pattern

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
```

## Commonly Used Combinations

### Card with Header

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

<Card className="card-elevated">
  <CardHeader className="pb-3">
    <CardTitle className="text-lg font-semibold">Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### Button Variants

```tsx
import { Button } from "@/components/ui/button";

// Primary (default)
<Button>Save Changes</Button>

// Secondary
<Button variant="secondary">Cancel</Button>

// Ghost (for icons, subtle actions)
<Button variant="ghost" size="icon" className="rounded-xl">
  <Settings className="w-5 h-5" />
</Button>

// Destructive
<Button variant="destructive">Delete</Button>

// Custom gradient
<Button className="bg-gradient-primary text-white border-0">
  Create Post
</Button>
```

### Form with Validation

```tsx
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const form = useForm();

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="you@example.com" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

### Sheet (Side Panel)

```tsx
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost">Open Panel</Button>
  </SheetTrigger>
  <SheetContent side="right" className="w-full sm:max-w-md">
    <SheetHeader>
      <SheetTitle>Panel Title</SheetTitle>
    </SheetHeader>
    {/* Content */}
  </SheetContent>
</Sheet>
```

### Drawer (Bottom Sheet)

```tsx
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent className="rounded-t-3xl">
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
    </DrawerHeader>
    <div className="px-4 pb-8">
      {/* Content */}
    </div>
  </DrawerContent>
</Drawer>
```

### Toast Notifications

```tsx
import { useToast } from "@/hooks/use-toast";

const { toast } = useToast();

// Success
toast({
  title: "Post scheduled!",
  description: "Your post will be published at 9:00 AM.",
});

// Error
toast({
  variant: "destructive",
  title: "Error",
  description: "Something went wrong. Please try again.",
});
```

## Styling Overrides

When customizing shadcn components, add classes directly:

```tsx
// Rounded button
<Button className="rounded-xl">

// Full-width input with custom height
<Input className="h-14 rounded-2xl">

// Card with custom shadow
<Card className="card-elevated rounded-2xl">

// Badge with status color
<Badge className="bg-success/10 text-success border-0">
```
