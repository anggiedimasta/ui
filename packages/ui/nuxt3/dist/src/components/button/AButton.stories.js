import { userEvent, within } from '@storybook/test';
import Button from './AButton.vue';
const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
};
export default meta;
export const Primary = {
    args: {
        variant: 'default',
        size: 'default',
        default: 'Primary Button',
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" @click="args.onClick">{{ args.default }}</Button>',
    }),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button'));
    },
};
export const Destructive = {
    args: {
        variant: 'destructive',
        size: 'default',
        default: 'Destructive Button',
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args" @click="args.onClick">{{ args.default }}</Button>',
    }),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button'));
    },
};
//# sourceMappingURL=AButton.stories.js.map