# @anggiedimasta/ui-web

Demo web application showcasing the @anggiedimasta/ui component library with Nuxt 3.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation & Setup

```bash
# Clone the repository (if not already done)
git clone https://github.com/anggiedimasta/ui.git
cd ui

# Install all dependencies (including workspace packages)
pnpm install

# Navigate to web app
cd apps/web

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`

### Alternative: Standalone Setup

If you want to run just the web app without the full monorepo:

```bash
# Navigate to web app directory
cd apps/web

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production

```bash
# Build the application
pnpm build

# Preview the build
pnpm preview

# Generate static site
pnpm generate
```

## 📁 Project Structure

```
apps/web/
├── assets/          # Static assets (CSS, images)
├── pages/           # Nuxt pages (routes)
├── plugins/         # Nuxt plugins
├── app.vue          # Root app component
├── nuxt.config.ts   # Nuxt configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## 🎨 Features

- **Component Showcase**: Interactive examples of all UI components
- **Dark Theme**: Cyberpunk-inspired dark theme with neon accents
- **Responsive Design**: Mobile-first responsive layout
- **TypeScript**: Full TypeScript support
- **Tailwind CSS**: Utility-first CSS framework

## 🛠️ Development

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm generate     # Generate static site
```

### Key Technologies

- **Nuxt 3**: Vue.js framework
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
- **@anggiedimasta/ui**: UI component library

## 🚀 Deployment

This app is automatically deployed to Vercel on every push to the main branch.

### Manual Deployment

```bash
# Deploy to Vercel
vercel --prod
```

## 📚 Documentation

- [Live Demo](https://anggiedimasta-ui.vercel.app)
- [UI Library Documentation](../packages/ui/README.md)
- [Component Library](https://github.com/anggiedimasta/ui)

## 📄 License

MIT © [anggiedimasta](https://github.com/anggiedimasta)