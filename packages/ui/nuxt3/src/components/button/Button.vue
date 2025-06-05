<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority';
import { computed } from 'vue';
import {
  defaultSize,
  defaultVariant,
  destructiveVariant,
  ghostVariant,
  iconSize,
  lgSize,
  linkVariant,
  outlineVariant,
  secondaryVariant,
  smSize,
} from './variants';

const buttonCva = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: defaultVariant,
        destructive: destructiveVariant,
        outline: outlineVariant,
        secondary: secondaryVariant,
        ghost: ghostVariant,
        link: linkVariant,
      },
      size: {
        default: defaultSize,
        sm: smSize,
        lg: lgSize,
        icon: iconSize,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonCvaProps = VariantProps<typeof buttonCva>;
const props = withDefaults(
  defineProps<{
    variant: ButtonCvaProps['variant'];
    size: ButtonCvaProps['size'];
  }>(),
  {
    variant: 'default',
    size: 'default',
  },
);

const buttonClass = computed(() => buttonCva({ variant: props.variant, size: props.size }));
</script>

<template>
  <button
    :class="buttonClass"
    v-bind="$attrs"
    type="button"
  >
    <slot />
  </button>
</template>
