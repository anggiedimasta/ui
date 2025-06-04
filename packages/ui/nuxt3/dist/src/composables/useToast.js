import { ref } from 'vue';
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 5000;
const toasts = ref([]);
export function useToast() {
    const add = (toast) => {
        const id = Math.random().toString(36);
        const newToast = {
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
            // eslint-disable-next-line no-undef
            setTimeout(() => {
                remove(id);
            }, newToast.duration);
        }
    };
    const remove = (id) => {
        toasts.value = toasts.value.filter((t) => t.id !== id);
    };
    return {
        toasts,
        add,
        remove,
    };
}
//# sourceMappingURL=useToast.js.map