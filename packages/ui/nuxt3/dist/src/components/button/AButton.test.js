import { fireEvent, render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import Button from './AButton.vue';
describe('Button.vue', () => {
    it('renders slot content', () => {
        const { getByText } = render(Button, {
            slots: { default: 'Hello Button' },
        });
        expect(getByText('Hello Button')).toBeTruthy();
    });
    it('applies variant and size classes', () => {
        const { getByRole } = render(Button, {
            props: { variant: 'destructive', size: 'lg' },
            slots: { default: 'Test' },
        });
        const btn = getByRole('button');
        expect(btn.className).toMatch(/bg-destructive/);
        expect(btn.className).toMatch(/h-11/);
    });
    it('emits click event', async () => {
        const { getByRole, emitted } = render(Button, {
            slots: { default: 'Click me' },
        });
        const btn = getByRole('button');
        await fireEvent.click(btn);
        expect(emitted()).toHaveProperty('click');
    });
});
//# sourceMappingURL=AButton.test.js.map