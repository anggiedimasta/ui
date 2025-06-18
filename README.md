# @anggiedimasta/ui

A modern, accessible Vue 3 UI component library with comprehensive documentation, testing, and design system built with Tailwind CSS.

## 🚀 Quick Start

```bash
# Install the UI library
npm install @anggiedimasta/ui

# Import components
import { Button } from '@anggiedimasta/ui'
import '@anggiedimasta/ui/styles.css'
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

- [Storybook](https://ui.anggiedimasta.com) - Interactive component documentation
- [Demo App](https://ui.anggiedimasta.com) - Live demo application

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

### Required Secrets

Set these GitHub repository secrets:

- `NPM_TOKEN` - NPM authentication token
- `VERCEL_TOKEN` - Vercel authentication token
- `VERCEL_ORG_ID` - Vercel organization ID
- `VERCEL_PROJECT_ID` - Vercel project ID

## 📄 License

MIT © [anggiedimasta](https://github.com/anggiedimasta)
