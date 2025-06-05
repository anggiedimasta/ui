import type { Meta, StoryObj } from '@storybook/vue3';
import ToastProvider from './ToastProvider.vue';

const meta: Meta<typeof ToastProvider> = {
  title: 'Components/ToastProvider',
  component: ToastProvider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ToastProvider is a wrapper element that manages and displays toast notifications. Place it at the root of your app or layout to enable toast functionality throughout your application.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ToastProvider>;

export const Playground: Story = {
  args: {},
  render: (args) => ({
    components: { ToastProvider },
    setup() {
      return { args };
    },
    template: '<ToastProvider v-bind="args" />',
  }),
};
