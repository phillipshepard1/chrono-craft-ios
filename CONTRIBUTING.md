# Contributing to Social Media Planner

Thank you for your interest in contributing! This guide will help you get started with development using Claude Code.

## Development with Claude Code

This project is optimized for AI-assisted development with Claude Code. Here's how to make the most of it:

### Getting Started

1. Clone the repository
2. Open the project in your preferred editor
3. Use Claude Code to help with development tasks

### Working with Screens

When you want to add or modify screens, you can simply describe what you need:

**Example prompts:**

- "Add a new Calendar screen that shows a monthly view of scheduled posts"
- "Update the HomeScreen to show recent activity"
- "Create a Settings screen with user preferences"

Claude Code will:
- Create the screen file in `src/screens/`
- Add proper TypeScript types
- Register it in the navigation
- Apply consistent styling

### Adding Features

Describe features in natural language:

**Example prompts:**

- "Add image upload functionality to the create post screen"
- "Implement push notifications for scheduled posts"
- "Add dark mode support throughout the app"

### Database Integration

This project is designed to work with Supabase. When you need database features:

**Example prompts:**

- "Set up Supabase authentication with email and password"
- "Create a posts table with user relationships"
- "Add real-time sync for content updates"

Claude Code will:
- Install necessary packages
- Set up environment variables
- Create migration files
- Implement Row Level Security policies
- Add client-side integration code

### Styling Guidelines

This project uses React Native's StyleSheet API. When requesting UI changes:

**Example prompts:**

- "Make the buttons larger and add rounded corners"
- "Update the color scheme to use blue instead of purple"
- "Add animations when tabs switch"

### Best Practices

1. **Be Specific**: The more detailed your request, the better the result
2. **Test on Multiple Platforms**: Always test on both iOS and Android
3. **Run Type Checks**: Use `npm run build` to check for TypeScript errors
4. **Clear Cache When Needed**: If things seem broken, try `npx expo start -c`

### Common Tasks

#### Adding a New Screen

```
Prompt: "Create a Profile screen where users can:
- View their profile picture and name
- Edit their bio
- See their post statistics
- Sign out"
```

#### Adding Navigation

```
Prompt: "Add a tab bar with these sections:
- Home
- Create
- Calendar
- Profile"
```

#### Connecting to API

```
Prompt: "Connect to the Instagram API to:
- Fetch user posts
- Display engagement metrics
- Allow posting to Instagram"
```

#### Adding Authentication

```
Prompt: "Implement authentication using Supabase:
- Email/password sign up
- Login screen
- Password reset
- Protected routes"
```

### Testing

When you make changes:

1. Run on a physical device or simulator
2. Test all navigation flows
3. Verify on both iOS and Android
4. Check TypeScript errors: `npm run build`

### Code Organization

- Keep screens focused on a single responsibility
- Extract reusable components
- Use TypeScript for type safety
- Follow React Native best practices

### Getting Help

If Claude Code generates code that doesn't work:

1. Share the error message
2. Describe what you expected vs what happened
3. Ask for clarification on specific parts

**Example:**
```
"The navigation isn't working. When I tap the Profile button, I get this error: [error message]. Can you help fix it?"
```

### Pull Request Guidelines

When submitting a PR:

1. Ensure `npm run build` passes
2. Test on both platforms
3. Update README if adding new features
4. Provide clear description of changes

### Questions?

If you have questions about the project structure or how to implement something, just ask Claude Code:

- "How is authentication handled in this app?"
- "Where should I add a new utility function?"
- "What's the best way to handle form validation?"

## Thank You

Your contributions make this project better for everyone!
