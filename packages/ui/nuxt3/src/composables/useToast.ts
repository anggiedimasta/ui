import { ref } from 'vue';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  variant?: 'default' | 'destructive' | 'success' | 'info' | 'warning';
  duration?: number;
}

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 5000;

const toasts = ref<Toast[]>([]);

export function useToast() {
  const add = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36);
    const newToast: Toast = {
      id,
      variant: 'info',
      ...toast,
    };

    if (newToast.duration === undefined) {
      newToast.duration = TOAST_REMOVE_DELAY;
    }

    if (toasts.value.length >= TOAST_LIMIT) {
      toasts.value.pop();
    }

    toasts.value.unshift(newToast);

    if (newToast.duration > 0) {
      setTimeout(() => {
        remove(id);
      }, newToast.duration);
    }
  };

  const remove = (id: string) => {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  };

  return {
    toasts,
    add,
    remove,
  };
}
