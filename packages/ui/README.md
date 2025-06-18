# @anggiedimasta/ui

A modern Vue 3 component library with a cyberpunk design system, built with TypeScript, Tailwind CSS, and Vite.

## ✨ Features

- **Vue 3 Components**: Built with Vue 3 Composition API and TypeScript
- **Cyberpunk Design**: High-contrast neon color palette with dark/light themes
- **Tailwind CSS**: Fully integrated with Tailwind CSS for styling
- **TypeScript**: Complete TypeScript support with type definitions
- **Storybook**: Interactive component documentation and testing
- **Vitest**: Comprehensive unit testing
- **Accessible**: WCAG compliant components with proper ARIA attributes

## 📦 Installation

```bash
npm install @anggiedimasta/ui
```

## 🚀 Quick Start

### 1. Install the package

```bash
npm install @anggiedimasta/ui
```

### 2. Import the styles

```typescript
// In your main.ts or main.js
import '@anggiedimasta/ui/styles.css';
```

### 3. Use components

```vue
<template>
  <div>
    <Button variant="primary">Click me</Button>
    <Button variant="secondary">Secondary</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@anggiedimasta/ui';
</script>
```

## 🎨 Available Components

### Button
A versatile button component with multiple variants and sizes.

```vue
<Button variant="primary" size="lg">
  Primary Button
</Button>

<Button variant="secondary" size="sm">
  Secondary Button
</Button>

<Button variant="destructive">
  Delete
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline'`
- `size`: `'sm' | 'md' | 'lg'`
- `disabled`: `boolean`

## 🎯 Design System

### Color Palette
- **Primary**: Cyan neon (`hsl(180 100% 50%)`)
- **Secondary**: Magenta neon (`hsl(280 100% 50%)`)
- **Accent**: Green neon (`hsl(120 100% 50%)`)
- **Destructive**: Red (`hsl(0 85% 60%)`)

### Theme Support
The library supports both light and dark themes with automatic switching:

```html
<html class="dark">
  <!-- Dark theme -->
</html>

<html>
  <!-- Light theme -->
</html>
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- pnpm 8+

### Setup
```bash
# Clone the repository
git clone https://github.com/anggiedimasta/ui.git
cd ui

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts
- `pnpm dev`: Start development server
- `pnpm build`: Build all packages
- `pnpm test`: Run tests
- `pnpm storybook`: Start Storybook locally
- `pnpm lint`: Run linting

## 📚 Storybook

View interactive component documentation locally:

```bash
pnpm storybook
```

Visit: `http://localhost:6006`

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

## 📦 Package Structure

```
packages/ui/
├── src/
│   ├── components/     # Vue components
│   ├── composables/    # Vue composables
│   ├── styles.css      # Main styles
│   └── index.ts        # Package exports
├── stories/            # Storybook stories
├── tests/              # Unit tests
└── README.md           # This file
```

## 🎨 Customization

### CSS Custom Properties
All design tokens are exposed as CSS custom properties:

```css
:root {
  --primary: hsl(180 100% 50%);
  --secondary: hsl(280 100% 50%);
  --accent: hsl(120 100% 50%);
  /* ... more tokens */
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/anggiedimasta/ui/blob/main/CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Update documentation
6. Submit a pull request

## 📄 License

MIT License - see the [LICENSE](https://github.com/anggiedimasta/ui/blob/main/LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/anggiedimasta/ui)
- [NPM Package](https://www.npmjs.com/package/@anggiedimasta/ui)
- [Demo App](https://anggiedimasta-ui.vercel.app/)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [GitHub repository](https://github.com/anggiedimasta/ui)
2. Search [existing issues](https://github.com/anggiedimasta/ui/issues)
3. Create a [new issue](https://github.com/anggiedimasta/ui/issues/new)