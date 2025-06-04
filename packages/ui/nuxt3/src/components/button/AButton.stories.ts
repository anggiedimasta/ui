import { userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './AButton.vue';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
    default: 'Primary Button',
  },
  render: (args: (typeof Button)['$props']) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" @click="args.onClick">{{ args.default }}</Button>',
  }),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    default: 'Destructive Button',
  },
  render: (args: (typeof Button)['$props']) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" @click="args.onClick">{{ args.default }}</Button>',
  }),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
