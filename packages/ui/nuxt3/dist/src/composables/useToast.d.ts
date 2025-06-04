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
export declare function useToast(): {
    toasts: import("vue").Ref<{
        id: string;
        title?: string | undefined;
        description?: string | undefined;
        action?: {
            label: string;
            onClick: () => void;
        } | undefined;
        variant?: "default" | "destructive" | "success" | "info" | "warning" | undefined;
        duration?: number | undefined;
    }[], Toast[] | {
        id: string;
        title?: string | undefined;
        description?: string | undefined;
        action?: {
            label: string;
            onClick: () => void;
        } | undefined;
        variant?: "default" | "destructive" | "success" | "info" | "warning" | undefined;
        duration?: number | undefined;
    }[]>;
    add: (toast: Omit<Toast, "id">) => void;
    remove: (id: string) => void;
};
//# sourceMappingURL=useToast.d.ts.map