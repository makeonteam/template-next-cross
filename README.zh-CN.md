# Template of Cross-Platform app build with Web tech

[English](README.md) | 简体中文

这是一个基于 Next.js、Electron、Capacitor 的跨平台应用模板，旨在帮助开发者快速构建同时支持网页、桌面和移动平台的应用。

## 🔗 在线体验

点击 [这里](https://template-next-cross.vercel.app/boards) 体验 web 版

## ✨ 特性

- **统一代码库**: 尽可能复用 Web 代码，减少多平台开发成本。
  - **Web 应用**: 基于 Next.js 构建（启用了 export 参数）
  - **桌面应用**: 使用 Electron 将 Web 应用打包为桌面应用
  - **移动应用**: 利用 Capacitor 将 Web 应用转换为原生移动应用，支持 iOS 和 Android。
- **现代化前端**: 采用 React, Typescript, Tailwind CSS, Shacn/ui 等流行技术栈。
- **代码质量**: 集成 Biome 进行代码检查和格式化（Prettier 主要用于 Tailwind 类名的格式化）
- **默认配置**：自带 next-themes，解决了 safe-area 问题（低版本 Android 也是 Edge-to-Edge 模式）

## 🛠️ 技术栈

- **前端框架**: [Next.js](https://nextjs.org/) (React + Typescript)，生态繁荣
- **样式组件**: [Tailwind CSS](https://tailwindcss.com/), [Shadcn/ui](https://ui.shadcn.com/)
- **跨平台框架**: [Electron](https://www.electronjs.org/)，[Capacitor](https://capacitorjs.com/)
- **代码工具**: [Biome](https://biomejs.dev/)速度很快
- **包管理**: pnpm (根项目)、yarn（desktop 和 mobile 目录）

## 🚀 准备

### 前置条件

请确保你的开发环境中安装了以下工具：

- [Node.js](https://nodejs.org/en/) (推荐 LTS 版本)
- [pnpm](https://pnpm.io/installation) 和 [yarn](https://yarnpkg.com/getting-started/install)

### 安装

1. 克隆仓库：

```bash
git clone git@github.com:makeonteam/template-next-cross.git
cd makeon-app-next
```

2. 安装依赖：

```bash
pnpm install
cd desktop
yarn install
cd ../mobile
yarn install
```

## 运行项目

### 1. Web 应用

在开发模式下运行 Web 应用：

```bash
pnpm dev
```

应用将在 `http://localhost:4001` 启动。

### 2. 桌面应用 (Electron)

启动 Web 应用后，可以在开发模式下运行 Electron 应用。

```bash
cd desktop
pnpm dev
```

你也可以先构建 Web 应用，然后运行 Electron 应用。

```bash
cd desktop
yarn sync # 这会将构建复制到 desktop/app 目录
yarn start
```

### 3. 移动应用 (Capacitor)

移动应用需要先构建 Web 应用，然后通过 Capacitor 进行平台集成和运行。

```bash
pnpm build           # 构建 Web 应用
cd mobile
npx cap sync         # 同步 Web 资产到原生项目
npx cap open android # 在 Android Studio 中打开 Android 项目
npx cap open ios     # 在 Xcode 中打开 iOS 项目
```

你也可以直接在设备或模拟器上运行：

```bash
npx cap run android
npx cap run ios
```

## 📦 构建

### 1. Web 应用

```bash
pnpm build
```

这会将 Web 应用构建到 `out` 目录。

### 2. 桌面应用 (Electron)

需要确保 Web 应用已构建并同步：

```bash
pnpm build # 先构建
cd desktop
yarn sync  # 再复制
yarn package
```

这会使用 `electron-builder` 打包桌面应用。

### 构建移动应用

需要确保 Web 应用已构建并同步：

```bash
pnpm build
cd mobile
npx cap sync
npx cap build android # 构建 Android 应用
npx cap build ios     # 构建 iOS 应用
```

## 🧹 代码风格和格式化

本项目使用 Biome 和 Prettier 维护代码风格。

### 检查代码

```bash
pnpm lint
```

### 格式化代码

```bash
pnpm format          # 使用 Biome 格式化
pnpm format-prettier # 使用 Prettier 格式化 Tailwind 类名
```
