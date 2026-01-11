# Social Media Planner

A React Native mobile application built with Expo for planning and managing social media content across multiple platforms.

## Overview

This is a cross-platform mobile app that helps content creators plan, schedule, and manage their social media posts. Built with React Native and Expo, it runs natively on iOS and Android devices.

## Tech Stack

- **Framework**: React Native with Expo SDK 51
- **Navigation**: React Navigation (Native Stack & Bottom Tabs)
- **State Management**: React Query (TanStack Query)
- **Language**: TypeScript
- **Date Management**: date-fns

## Prerequisites

Before you start, make sure you have the following installed:

- Node.js (v18 or later) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or yarn
- Expo Go app on your mobile device:
  - [iOS - App Store](https://apps.apple.com/app/apple-store/id982107779)
  - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

For native development builds:
- iOS: Xcode (Mac only)
- Android: Android Studio

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd social-media-planner
```

### 2. Install Dependencies

```bash
npm install
```

If you encounter dependency issues:
```bash
npm install --legacy-peer-deps
```

### 3. Start the Development Server

```bash
npm start
```

This will start the Expo development server. You have several options to run the app:

#### Option A: Expo Go (Recommended for Quick Testing)

1. Install Expo Go on your phone
2. Scan the QR code displayed in your terminal with:
   - iOS: Camera app
   - Android: Expo Go app
3. The app will load on your device

#### Option B: Tunnel Mode (For Remote/Network Access)

If the QR code doesn't work or your phone can't reach your computer:

```bash
npx expo start --tunnel
```

Then visit `http://localhost:8081/qr.html` in your browser to see a larger QR code.

#### Option C: Platform-Specific Commands

```bash
# For iOS simulator (Mac only, requires Xcode)
npm run ios

# For Android emulator (requires Android Studio)
npm run android

# For web preview (limited native features)
npm run web
```

### 4. Build for Production

To create production builds:

```bash
# Check for TypeScript errors
npm run build

# Create native builds (requires EAS account)
npx eas build --platform ios
npx eas build --platform android
```

## Project Structure

```
social-media-planner/
├── App.tsx                 # Root component with navigation setup
├── index.js               # Expo entry point
├── app.json               # Expo configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── babel.config.js        # Babel configuration
├── assets/                # Images and static assets
│   ├── icon.png
│   ├── splash.png
│   └── adaptive-icon.png
├── public/                # Static files
│   └── qr.html           # QR code display for development
└── src/
    └── screens/           # App screens
        ├── HomeScreen.tsx
        ├── LoginScreen.tsx
        ├── RegisterScreen.tsx
        └── ForgotPasswordScreen.tsx
```

## Working with Claude Code

This project is optimized for development with Claude Code. Here are some tips:

### Adding New Screens

1. Create a new file in `src/screens/` (e.g., `ProfileScreen.tsx`)
2. Register it in `App.tsx` within the Stack Navigator
3. Claude Code can help scaffold the screen with proper TypeScript types

Example request:
> "Add a new Profile screen where users can view and edit their profile information"

### Styling

This project uses React Native's built-in `StyleSheet.create()` for styling. Example:

```typescript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
```

### Navigation

The app uses React Navigation with a Stack Navigator. To navigate between screens:

```typescript
navigation.navigate('ScreenName');
```

### Adding Dependencies

When asking Claude Code to add features that require new packages:

1. Claude will install the package via npm
2. For native dependencies, you may need to:
   ```bash
   npx expo install package-name
   ```

### Database Integration

This project is configured to work with Supabase for backend services. Claude Code can help you:
- Set up authentication
- Create database tables
- Implement real-time features
- Add file storage

Example request:
> "Add Supabase authentication with email/password login"

## Common Commands

```bash
# Start development server
npm start

# Start with tunnel (for remote access)
npx expo start --tunnel

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Type check
npm run build

# Clear cache
npx expo start -c
```

## Features

- Dashboard with stats and insights
- Weekly content challenges
- Task management
- Quick actions
- Navigation between tabs
- Authentication screens (Login, Register, Forgot Password)

## Troubleshooting

### Can't Connect to Server

1. Make sure your phone and computer are on the same WiFi network
2. Try tunnel mode: `npx expo start --tunnel`
3. Check if firewall is blocking port 8081
4. Use the QR code page: Open `http://localhost:8081/qr.html` in your browser

### App Won't Load

1. Clear Expo cache: `npx expo start -c`
2. Delete node_modules and reinstall: `rm -rf node_modules && npm install`
3. Make sure Expo Go app is up to date

### TypeScript Errors

1. Run `npm run build` to see all type errors
2. Check that all imports are correct
3. Ensure `@types/react` is installed

### Dependency Issues

If you encounter peer dependency warnings during installation:
```bash
npm install --legacy-peer-deps
```

## Platform-Specific Features

Some React Native APIs only work on native platforms (iOS/Android), not on web:

- Haptics
- Local Authentication (biometrics)
- Some sensors

Always check platform compatibility when adding new features:

```typescript
import { Platform } from 'react-native';

if (Platform.OS !== 'web') {
  // Native-only code
}
```

## Environment Variables

To add environment variables:

1. Create a `.env` file in the root directory
2. Prefix variables with `EXPO_PUBLIC_` for client-side access:
   ```
   EXPO_PUBLIC_API_URL=https://api.example.com
   ```
3. Access in code:
   ```typescript
   const apiUrl = process.env.EXPO_PUBLIC_API_URL;
   ```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test on both iOS and Android
4. Run `npm run build` to check for TypeScript errors
5. Submit a pull request

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Query](https://tanstack.com/query/latest)

## License

MIT
