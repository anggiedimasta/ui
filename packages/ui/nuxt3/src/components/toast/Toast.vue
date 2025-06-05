<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority';
import { computed } from 'vue';
import type { Toast } from '../../composables/useToast';
import { defaultVariant, destructiveVariant } from './variants';

const toastCva = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all',
  {
    variants: {
      variant: {
        default: defaultVariant,
        destructive: destructiveVariant,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type ToastCvaProps = VariantProps<typeof toastCva>;
const props = withDefaults(
  defineProps<{
    toast: Omit<Toast, 'variant'> & { variant: ToastCvaProps['variant'] };
  }>(),
  {
    toast: () => ({
      action: null,
      description: '',
      duration: 5000,
      id: 'toast',
      title: '',
      variant: 'default',
    }),
  },
);

const toastClass = computed(() => toastCva({ variant: props.toast.variant }));
</script>

<template>
  <div
    :class="toastClass"
  >
    <div class="flex flex-1 items-start gap-2">
      <div class="grid gap-1">
        <div v-if="toast.title" class="text-sm font-semibold">
          {{ toast.title }}
        </div>
        <div v-if="toast.description" class="text-sm opacity-90">
          {{ toast.description }}
        </div>
      </div>
    </div>
    <button
      v-if="toast.action"
      class="inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive"
      @click="toast.action.onClick"
    >
      {{ toast.action.label }}
    </button>
    <button
      class="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50"
      @click="$emit('close', toast.id)"
    >
      <span class="sr-only">Close</span>
      ✕
    </button>
  </div>
</template>
