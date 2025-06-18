# @anggiedimasta/config

A shared configuration package for the `@anggiedimasta/ui` component library.

## 📦 What's included

- **Theme Configuration**: CSS custom properties and Tailwind CSS theme configuration
- **Design Tokens**: Consistent color palette, spacing, typography, and other design tokens
- **Shared Styles**: Base styles and utilities used across the UI library

## 🎨 Theme Features

### Cyberpunk Design System
- **Light & Dark Themes**: Complete theme support with automatic switching
- **Neon Color Palette**: High-contrast colors with cyan, magenta, and green neon accents
- **CSS Custom Properties**: Fully customizable design tokens
- **Tailwind Integration**: Seamless integration with Tailwind CSS

### Color Palette
- **Primary**: Cyan neon (`hsl(180 100% 50%)`)
- **Secondary**: Magenta neon (`hsl(280 100% 50%)`)
- **Accent**: Green neon (`hsl(120 100% 50%)`)
- **Destructive**: Red (`hsl(0 85% 60%)`)

## 📥 Installation

```bash
npm install @anggiedimasta/config
```

## 🚀 Usage

### Import in your CSS

```css
@import "@anggiedimasta/config/theme.css";
```

### Import in your JavaScript/TypeScript

```typescript
import '@anggiedimasta/config/theme.css';
```

## 🎯 Design Tokens

### Colors
- `--background`: Main background color
- `--foreground`: Main text color
- `--card`: Card background color
- `--card-foreground`: Card text color
- `--primary`: Primary brand color
- `--secondary`: Secondary brand color
- `--accent`: Accent color
- `--destructive`: Error/danger color
- `--border`: Border color
- `--input`: Input field color
- `--ring`: Focus ring color

### Spacing & Sizing
- `--radius`: Default border radius

## 🌙 Dark Mode

The theme automatically supports dark mode with the `.dark` class:

```html
<html class="dark">
  <!-- Dark theme will be applied -->
</html>
```

## 📄 License

MIT License - see the [main repository](https://github.com/anggiedimasta/ui) for details.

## 🤝 Contributing

Contributions are welcome! Please see the [main repository](https://github.com/anggiedimasta/ui) for contribution guidelines.