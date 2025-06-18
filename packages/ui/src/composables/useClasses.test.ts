import { describe, it, expect } from 'vitest';
import { useClasses } from './useClasses';

describe('useClasses', () => {
  const { merge } = useClasses();

  describe('merge function', () => {
    it('merges base classes with additional classes', () => {
      const result = merge('bg-blue-500 text-white', 'px-4 py-2');
      expect(result).toBe('bg-blue-500 text-white px-4 py-2');
    });

    it('handles empty additional classes', () => {
      const result = merge('bg-blue-500 text-white', '');
      expect(result).toBe('bg-blue-500 text-white');
    });

    it('handles null additional classes', () => {
      const result = merge('bg-blue-500 text-white', null);
      expect(result).toBe('bg-blue-500 text-white');
    });

    it('handles undefined additional classes', () => {
      const result = merge('bg-blue-500 text-white', undefined);
      expect(result).toBe('bg-blue-500 text-white');
    });

    it('handles array of classes', () => {
      const result = merge('bg-blue-500', ['text-white', 'px-4', 'py-2']);
      expect(result).toBe('bg-blue-500 text-white px-4 py-2');
    });

    it('handles object notation for conditional classes', () => {
      const result = merge('bg-blue-500', {
        'text-white': true,
        'text-black': false,
        'px-4': true,
        'py-2': false,
      });
      expect(result).toBe('bg-blue-500 text-white px-4');
    });

    it('handles mixed input types', () => {
      const result = merge('bg-blue-500', [
        'text-white',
        { 'px-4': true, 'py-2': false },
        'rounded',
      ]);
      expect(result).toBe('bg-blue-500 text-white px-4 rounded');
    });

    it('deduplicates conflicting classes using tailwind-merge', () => {
      const result = merge('bg-blue-500 text-white', 'bg-red-500 text-black');
      expect(result).toBe('bg-red-500 text-black');
    });

    it('handles complex tailwind conflicts', () => {
      const result = merge(
        'px-4 py-2 bg-blue-500 text-white rounded-lg',
        'px-6 py-3 bg-red-500 text-black rounded-xl'
      );
      expect(result).toBe('px-6 py-3 bg-red-500 text-black rounded-xl');
    });

    it('preserves non-conflicting classes', () => {
      const result = merge(
        'bg-blue-500 text-white px-4',
        'bg-red-500 py-2 rounded'
      );
      expect(result).toBe('bg-red-500 text-white px-4 py-2 rounded');
    });

    it('handles empty base classes', () => {
      const result = merge('', 'bg-blue-500 text-white');
      expect(result).toBe('bg-blue-500 text-white');
    });

    it('handles whitespace in class strings', () => {
      const result = merge('  bg-blue-500  text-white  ', '  px-4  py-2  ');
      expect(result).toBe('bg-blue-500 text-white px-4 py-2');
    });

    it('handles nested arrays and objects', () => {
      const result = merge('bg-blue-500', [
        'text-white',
        [
          { 'px-4': true },
          { 'py-2': false },
          'rounded',
        ],
        { 'shadow-lg': true },
      ]);
      expect(result).toBe('bg-blue-500 text-white px-4 rounded shadow-lg');
    });

    it('handles falsy values in arrays', () => {
      const result = merge('bg-blue-500', [
        'text-white',
        false,
        null,
        undefined,
        '',
        'px-4',
      ]);
      expect(result).toBe('bg-blue-500 text-white px-4');
    });

    it('handles complex conditional logic', () => {
      const isActive = true;
      const isDisabled = false;
      const isLarge = true;

      const result = merge('base-class', {
        'active-class': isActive,
        'disabled-class': isDisabled,
        'small-class': !isLarge,
        'large-class': isLarge,
        'medium-class': false,
      });

      expect(result).toBe('base-class active-class large-class');
    });
  });

  describe('composable structure', () => {
    it('returns an object with merge function', () => {
      const composable = useClasses();
      expect(typeof composable).toBe('object');
      expect(typeof composable.merge).toBe('function');
    });

    it('merge function accepts correct parameters', () => {
      const { merge } = useClasses();

      // Should accept string and ClassValue
      expect(() => merge('base', 'additional')).not.toThrow();
      expect(() => merge('base', ['additional'])).not.toThrow();
      expect(() => merge('base', { 'additional': true })).not.toThrow();
      expect(() => merge('base', null)).not.toThrow();
      expect(() => merge('base', undefined)).not.toThrow();
    });

    it('merge function returns a string', () => {
      const { merge } = useClasses();
      const result = merge('base', 'additional');
      expect(typeof result).toBe('string');
    });
  });
});