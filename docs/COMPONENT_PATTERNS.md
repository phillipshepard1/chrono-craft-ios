# Component Patterns

## Stat Card

Used for displaying metrics with icon, value, label, and optional trend.

```tsx
<div className="bg-card rounded-2xl p-4 card-elevated">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
      <TrendingUp className="w-5 h-5 text-primary" />
    </div>
    <div className="flex-1">
      <p className="text-2xl font-bold text-foreground">1,234</p>
      <p className="text-sm text-muted-foreground">Total Posts</p>
    </div>
    <div className="flex items-center gap-1 text-success text-sm font-medium">
      <ArrowUp className="w-3.5 h-3.5" />
      <span>12%</span>
    </div>
  </div>
</div>
```

## List Item with Icon

Standard pattern for settings, menu items, or any list.

```tsx
<button className="w-full flex items-center gap-4 p-4 bg-card rounded-2xl card-elevated ios-bounce">
  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
    <Bell className="w-5 h-5 text-primary" />
  </div>
  <div className="flex-1 text-left">
    <p className="font-medium text-foreground">Notifications</p>
    <p className="text-sm text-muted-foreground">Manage your alerts</p>
  </div>
  <ChevronRight className="w-5 h-5 text-muted-foreground" />
</button>
```

## Section Header

Used to group related content.

```tsx
<div className="flex items-center justify-between">
  <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
    Recent Activity
  </h2>
  <Button variant="ghost" size="sm" className="text-primary text-sm font-medium">
    See All
  </Button>
</div>
```

## Platform Badge

Shows social media platform with appropriate color.

```tsx
<div className="w-8 h-8 rounded-lg platform-instagram flex items-center justify-center">
  <Instagram className="w-4 h-4 text-white" />
</div>
```

## Status Badge

Indicates post status (draft, scheduled, published).

```tsx
<Badge variant="secondary" className="bg-success/10 text-success border-0">
  <div className="w-1.5 h-1.5 rounded-full bg-success mr-1.5" />
  Published
</Badge>
```

## Empty State

When no content is available.

```tsx
<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
    <Inbox className="w-8 h-8 text-muted-foreground" />
  </div>
  <h3 className="text-lg font-semibold text-foreground mb-2">No posts yet</h3>
  <p className="text-muted-foreground text-sm max-w-xs">
    Create your first post to get started with scheduling.
  </p>
  <Button className="mt-4 rounded-xl">
    <Plus className="w-4 h-4 mr-2" />
    Create Post
  </Button>
</div>
```

## Action Card (Full Width)

Card with gradient background for primary actions.

```tsx
<button className="w-full bg-gradient-primary p-5 rounded-2xl text-white text-left ios-bounce">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-lg font-semibold">Create New Post</h3>
      <p className="text-white/80 text-sm mt-1">Share something with your audience</p>
    </div>
    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
      <Plus className="w-6 h-6" />
    </div>
  </div>
</button>
```

## Form Input with Icon

Standard input field with left icon.

```tsx
<div className="relative">
  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
  <Input 
    placeholder="Search posts..." 
    className="pl-12 h-14 rounded-2xl bg-card border-border"
  />
</div>
```

## Toggle Setting

Switch with label and description.

```tsx
<div className="flex items-center justify-between p-4 bg-card rounded-2xl">
  <div className="flex-1">
    <p className="font-medium text-foreground">Push Notifications</p>
    <p className="text-sm text-muted-foreground">Receive alerts for new activity</p>
  </div>
  <Switch checked={enabled} onCheckedChange={setEnabled} />
</div>
```

## Grid Layout (2 columns)

Used for stat cards and action items.

```tsx
<div className="grid grid-cols-2 gap-3">
  <StatCard />
  <StatCard />
</div>
```

## Horizontal Scroll Section

For carousels and horizontal lists.

```tsx
<div className="overflow-x-auto -mx-5 px-5 scrollbar-hide">
  <div className="flex gap-3">
    {items.map(item => (
      <div key={item.id} className="flex-shrink-0 w-64">
        <Card />
      </div>
    ))}
  </div>
</div>
```
