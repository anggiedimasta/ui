import { defineNuxtPlugin } from 'nuxt/app';
import { useToast } from '../composables/useToast.ts';

export default defineNuxtPlugin(() => {
  const { add } = useToast();

  return {
    provide: {
      toast: {
        destructive: (options: { title?: string; description: string; duration?: number }) => {
          add({ ...options, variant: 'destructive' });
        },
        info: (options: { title?: string; description: string; duration?: number }) => {
          add({ ...options, variant: 'info' });
        },
        success: (options: { title?: string; description: string; duration?: number }) => {
          add({ ...options, variant: 'success' });
        },
        warning: (options: { title?: string; description: string; duration?: number }) => {
          add({ ...options, variant: 'warning' });
        },
      },
    },
  };
});
