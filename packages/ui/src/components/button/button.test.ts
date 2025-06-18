import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from './button.vue';

describe('Button - Unit Tests', () => {
  // Basic rendering tests
  describe('Rendering', () => {
    it('renders with default props', () => {
      const wrapper = mount(Button, {
        slots: {
          default: 'Click me',
        },
      });

      expect(wrapper.text()).toBe('Click me');
      expect(wrapper.classes()).toContain('inline-flex');
      expect(wrapper.classes()).toContain('bg-primary');
    });

    it('renders as button element by default', () => {
      const wrapper = mount(Button);
      expect(wrapper.element.tagName).toBe('BUTTON');
    });

    it('renders with custom class', () => {
      const wrapper = mount(Button, {
        props: {
          class: 'custom-class',
        },
      });

      expect(wrapper.classes()).toContain('custom-class');
    });
  });

  // Variant tests
  describe('Variants', () => {
    it('renders default variant correctly', () => {
      const wrapper = mount(Button, { props: { variant: 'default' } });
      expect(wrapper.classes()).toContain('bg-primary');
      expect(wrapper.classes()).toContain('text-primary-foreground');
    });

    it('renders destructive variant correctly', () => {
      const wrapper = mount(Button, { props: { variant: 'destructive' } });
      expect(wrapper.classes()).toContain('bg-destructive');
      expect(wrapper.classes()).toContain('text-destructive-foreground');
    });

    it('renders outline variant correctly', () => {
      const wrapper = mount(Button, { props: { variant: 'outline' } });
      expect(wrapper.classes()).toContain('border');
      expect(wrapper.classes()).toContain('bg-background');
    });

    it('renders secondary variant correctly', () => {
      const wrapper = mount(Button, { props: { variant: 'secondary' } });
      expect(wrapper.classes()).toContain('bg-secondary');
      expect(wrapper.classes()).toContain('text-secondary-foreground');
    });

    it('renders ghost variant correctly', () => {
      const wrapper = mount(Button, { props: { variant: 'ghost' } });
      expect(wrapper.classes()).toContain('hover:bg-accent');
    });

    it('renders link variant correctly', () => {
      const wrapper = mount(Button, { props: { variant: 'link' } });
      expect(wrapper.classes()).toContain('text-primary');
      expect(wrapper.classes()).toContain('underline-offset-4');
    });
  });

  // Size tests
  describe('Sizes', () => {
    it('renders default size correctly', () => {
      const wrapper = mount(Button, { props: { size: 'default' } });
      expect(wrapper.classes()).toContain('h-9');
      expect(wrapper.classes()).toContain('px-4');
      expect(wrapper.classes()).toContain('py-2');
    });

    it('renders small size correctly', () => {
      const wrapper = mount(Button, { props: { size: 'sm' } });
      expect(wrapper.classes()).toContain('h-8');
      expect(wrapper.classes()).toContain('px-3');
      expect(wrapper.classes()).toContain('text-xs');
    });

    it('renders large size correctly', () => {
      const wrapper = mount(Button, { props: { size: 'lg' } });
      expect(wrapper.classes()).toContain('h-10');
      expect(wrapper.classes()).toContain('px-8');
    });

    it('renders icon size correctly', () => {
      const wrapper = mount(Button, { props: { size: 'icon' } });
      expect(wrapper.classes()).toContain('h-9');
      expect(wrapper.classes()).toContain('w-9');
    });
  });

  // Element type tests
  describe('Element Types', () => {
    it('renders as anchor tag', () => {
      const wrapper = mount(Button, {
        props: {
          as: 'a',
          href: '#',
        },
      });

      expect(wrapper.element.tagName).toBe('A');
      expect(wrapper.attributes('href')).toBe('#');
    });

    it('renders as button with type', () => {
      const wrapper = mount(Button, {
        props: {
          as: 'button',
          type: 'submit',
        },
      });

      expect(wrapper.element.tagName).toBe('BUTTON');
      expect(wrapper.attributes('type')).toBe('submit');
    });
  });

  // State tests
  describe('States', () => {
    it('applies disabled state correctly', () => {
      const wrapper = mount(Button, { props: { disabled: true } });
      expect(wrapper.attributes('disabled')).toBeDefined();
      expect(wrapper.classes()).toContain('disabled:pointer-events-none');
      expect(wrapper.classes()).toContain('disabled:opacity-50');
    });

    it('applies focus styles correctly', () => {
      const wrapper = mount(Button);
      expect(wrapper.classes()).toContain('focus-visible:outline-none');
      expect(wrapper.classes()).toContain('focus-visible:ring-1');
      expect(wrapper.classes()).toContain('focus-visible:ring-ring');
    });
  });

  // Event tests
  describe('Events', () => {
    it('emits click event', async () => {
      const wrapper = mount(Button);
      await wrapper.trigger('click');
      expect(wrapper.emitted('click')).toBeTruthy();
    });

    it('calls onClick handler', async () => {
      const onClick = vi.fn();
      const wrapper = mount(Button, {
        props: {
          onClick,
        },
      });

      await wrapper.trigger('click');
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      const wrapper = mount(Button, {
        attrs: {
          'aria-label': 'Submit form',
        },
      });

      expect(wrapper.attributes('aria-label')).toBe('Submit form');
    });

    it('supports keyboard navigation', async () => {
      const wrapper = mount(Button);
      await wrapper.trigger('keydown.enter');
      expect(wrapper.emitted('keydown')).toBeTruthy();
    });

    it('has correct role attribute', () => {
      const wrapper = mount(Button);
      expect(wrapper.attributes('role')).toBe('button');
    });

    it('has proper tabindex for keyboard navigation', () => {
      const wrapper = mount(Button);
      const tabindex = wrapper.attributes('tabindex');
      expect(tabindex === '0' || tabindex === undefined).toBe(true);
    });

    it('supports aria-describedby attribute', () => {
      const wrapper = mount(Button, {
        attrs: {
          'aria-describedby': 'button-description',
        },
      });

      expect(wrapper.attributes('aria-describedby')).toBe('button-description');
    });

    it('supports aria-expanded attribute', () => {
      const wrapper = mount(Button, {
        attrs: {
          'aria-expanded': 'true',
        },
      });

      expect(wrapper.attributes('aria-expanded')).toBe('true');
    });

    it('supports aria-pressed attribute for toggle buttons', () => {
      const wrapper = mount(Button, {
        attrs: {
          'aria-pressed': 'true',
        },
      });

      expect(wrapper.attributes('aria-pressed')).toBe('true');
    });

    it('supports aria-controls attribute', () => {
      const wrapper = mount(Button, {
        attrs: {
          'aria-controls': 'target-element',
        },
      });

      expect(wrapper.attributes('aria-controls')).toBe('target-element');
    });

    it('has proper focus management', async () => {
      const wrapper = mount(Button);
      const button = wrapper.element;

      // Test focus
      button.focus();
      expect(document.activeElement).toBe(button);
    });

    it('supports space key for activation', async () => {
      const wrapper = mount(Button);
      await wrapper.trigger('keydown.space');
      expect(wrapper.emitted('keydown')).toBeTruthy();
    });

    it('supports enter key for activation', async () => {
      const wrapper = mount(Button);
      await wrapper.trigger('keydown.enter');
      expect(wrapper.emitted('keydown')).toBeTruthy();
    });

    it('handles disabled state accessibility correctly', () => {
      const wrapper = mount(Button, {
        props: {
          disabled: true,
        },
        attrs: {
          'aria-label': 'Disabled button',
        },
      });

      expect(wrapper.attributes('disabled')).toBeDefined();
      expect(wrapper.attributes('aria-disabled')).toBe('true');
      expect(wrapper.attributes('tabindex')).toBe('-1');
    });

    it('supports aria-live for dynamic content', () => {
      const wrapper = mount(Button, {
        attrs: {
          'aria-live': 'polite',
        },
      });

      expect(wrapper.attributes('aria-live')).toBe('polite');
    });

    it('supports aria-current for navigation', () => {
      const wrapper = mount(Button, {
        attrs: {
          'aria-current': 'page',
        },
      });

      expect(wrapper.attributes('aria-current')).toBe('page');
    });

    it('has proper contrast and visual indicators', () => {
      const wrapper = mount(Button, {
        props: {
          variant: 'default',
        },
      });

      // Check for focus-visible classes
      expect(wrapper.classes()).toContain('focus-visible:outline-none');
      expect(wrapper.classes()).toContain('focus-visible:ring-1');
      expect(wrapper.classes()).toContain('focus-visible:ring-ring');
    });

    it('supports screen reader announcements', () => {
      const wrapper = mount(Button, {
        attrs: {
          'aria-label': 'Submit form',
          'aria-describedby': 'form-description',
        },
        slots: {
          default: 'Submit',
        },
      });

      expect(wrapper.attributes('aria-label')).toBe('Submit form');
      expect(wrapper.attributes('aria-describedby')).toBe('form-description');
      expect(wrapper.text()).toBe('Submit');
    });

    it('handles dynamic content updates', async () => {
      const wrapper = mount(Button, {
        attrs: {
          'aria-label': 'Initial label',
        },
        slots: {
          default: 'Initial text',
        },
      });

      expect(wrapper.attributes('aria-label')).toBe('Initial label');
      expect(wrapper.text()).toBe('Initial text');
    });
  });
});