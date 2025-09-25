# Template of Cross-Platform app build with Web tech

English | [简体中文](README.zh-CN.md)

This is a cross-platform application template based on Next.js, Electron, and Capacitor, designed to help developers quickly build applications that support web, desktop, and mobile platforms simultaneously.

## 🔗 Live Demo

Click [here](https://template-next-cross.vercel.app/boards) to experience the web version of the application.

## ✨ Features

- **Unified Codebase**: Maximize code reuse across web, desktop, and mobile platforms to reduce development costs.
  - **Web App**: Built with Next.js (with `output: 'export'` enabled)
  - **Desktop App**: Uses Electron to package the web app as a desktop application.
  - **Mobile App**: Uses Capacitor to convert the web app into native mobile applications, supporting iOS and Android.
- **Modern Frontend**: Adopts popular technology stacks such as React, TypeScript, Tailwind CSS, and Shadcn/ui.
- **Code Quality**: Integrates Biome for code linting and formatting (Prettier is mainly used for Tailwind class sorting).
- **Default Configuration**: Comes with next-themes, solving the safe-area problem (low version Android is also in Edge-to-Edge mode).

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) (React + TypeScript), with a thriving ecosystem.
- **Styling Components**: [Tailwind CSS](https://tailwindcss.com/), [Shadcn/ui](https://ui.shadcn.com/)
- **Cross-Platform Frameworks**: [Electron](https://www.electronjs.org/), [Capacitor](https://capacitorjs.com/)
- **Code Tools**: [Biome](https://biomejs.dev/) It's fast
- **Package Management**: pnpm (root project), yarn (desktop and mobile directories)

## 🚀 Getting Started

### Prerequisites

Please ensure that you have the following tools installed in your development environment:

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [pnpm](https://pnpm.io/installation) and [yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone the repository:

```bash
git clone git@github.com:makeonteam/template-next-cross.git
cd template-next-cross
```

2. Install dependencies:

```bash
pnpm install
cd desktop
yarn install
cd ../mobile
yarn install
```

## 🔧 Running to develop

### 1. Web App

Run the web app in development mode:

```bash
pnpm dev
```

The application will start at `http://localhost:4001`.

### 2. Desktop App (Electron)

After starting the web app, you can run the Electron app in development mode.

```bash
cd desktop
pnpm dev
```

Alternatively, you can build the web app first and then run the Electron app.

```bash
pnpm build
cd desktop
yarn sync # This will copy the build to the desktop/app directory
yarn start
```

### 3. Mobile App (Capacitor)

For mobile apps, you need to build the web app first, then integrate and run it via Capacitor.

```bash
pnpm build # Build the web app
cd mobile
npx cap sync         # Sync web assets to the native project
npx cap open android # Open the Android project in Android Studio
npx cap open ios     # Open the iOS project in Xcode
```

You can also run directly on a device or simulator:

```bash
npx cap run android
npx cap run ios
```

## 📦 Building

### 1. Web App

```bash
pnpm build
```

This will build the web app into the `out` directory.

### 2. Desktop App (Electron)

Ensure the web app has been built and synced:

```bash
pnpm build # Build first
cd desktop
yarn sync  # Then copy
yarn package
```

This will package the desktop application using `electron-builder`.

### Building Mobile Apps

Ensure the web app has been built and synced:

```bash
pnpm build
cd mobile
npx cap sync
npx cap build android # Build the Android app
npx cap build ios     # Build the iOS app
```

## 🧹 Code Style and Formatting

This project uses Biome and Prettier to maintain code style.

### Check Code

```bash
pnpm lint
```

### Format Code

```bash
pnpm format          # Format with Biome
pnpm format-prettier # Format Tailwind class names with Prettier
```
