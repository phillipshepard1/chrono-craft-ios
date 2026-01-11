# Social Media Planner - React Native App

A mobile-first social media content planner built with React Native and Expo.

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Expo Go app on your phone:
  - [iOS - App Store](https://apps.apple.com/app/apple-store/id982107779)
  - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm install --legacy-peer-deps

# Step 4: Start the Expo development server
npm start
```

### Viewing the QR Code

After running `npm start`, you'll see a QR code in your terminal.

**To run the app on your phone:**

1. Open the Expo Go app on your device
2. Scan the QR code displayed in your terminal
3. The app will load on your phone

**Alternative methods:**
- Press `i` to open iOS simulator (requires macOS with Xcode)
- Press `a` to open Android emulator (requires Android Studio setup)
- Press `w` to open in web browser

## Technologies Used

- React Native
- Expo
- TypeScript
- React Navigation
- TanStack Query (React Query)

## Project Structure

```
├── App.tsx                    # Main entry point
├── app.json                   # Expo configuration
├── src/
│   └── screens/              # App screens
│       ├── HomeScreen.tsx
│       ├── LoginScreen.tsx
│       ├── RegisterScreen.tsx
│       └── ForgotPasswordScreen.tsx
```

## Features

- Dashboard with stats and insights
- Weekly content challenges
- Task management
- Quick actions
- Navigation between tabs
- Authentication screens

## Troubleshooting

If you encounter dependency issues during installation, use:
```sh
npm install --legacy-peer-deps
```

If the QR code doesn't appear, make sure:
1. Your phone and computer are on the same WiFi network
2. Your firewall isn't blocking the connection
3. You have the latest version of Expo Go installed
