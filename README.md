# @anggiedimasta/ui

A modern, accessible Vue 3 UI component library with comprehensive documentation, testing, and design system built with Tailwind CSS.

## 🚀 Quick Start

### 1. Install the UI library

```bash
pnpm add @anggiedimasta/ui
```

### 2. Install Tailwind CSS (if not already installed)

```bash
pnpm add -D tailwindcss
pnpm exec tailwindcss init
```

### 3. Import CSS

Add the following to your main CSS file (e.g., `assets/css/main.css` or `style.css`):

```css
@import "tailwindcss";
@import "@anggiedimasta/ui/styles.css";

/* Optional: Add dark theme class to your root element */
.dark {
  /* Dark theme will be automatically applied */
}
```

### 4. Import and use components

```vue
<script setup>
import { Button } from '@anggiedimasta/ui'
</script>

<template>
  <Button variant="primary">Click me!</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Delete</Button>
</template>
```

## 🎨 Theme Support

The library includes both light and dark themes. To enable dark mode, add the `dark` class to your root element:

```vue
<template>
  <div class="dark">
    <!-- Your app content -->
  </div>
</template>
```

## 📦 Packages

- **@anggiedimasta/ui** - Main UI component library
- **@anggiedimasta/config** - Shared configuration and styles
- **@anggiedimasta/ui-web** - Demo web application

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Run tests
pnpm test

# Build packages
pnpm build

# Start Storybook
pnpm storybook
```

## 📚 Documentation

- [Demo App](https://anggiedimasta-ui.vercel.app) - Live demo application

## 🚀 Deployment & Publishing

### Automatic Workflow

This project uses GitHub Actions for automated deployment:

1. **Git Push** → Triggers build and test
2. **Git Tag** → Publishes packages to npm
3. **Deploy** → Deploys web app to Vercel

### Manual Publishing

```bash
# Publish config package
cd packages/config
pnpm publish

# Publish UI package
cd packages/ui
pnpm publish

# Deploy web app to Vercel
cd apps/web
vercel --prod
```

## 📄 License

MIT © [anggiedimasta](https://github.com/anggiedimasta)
