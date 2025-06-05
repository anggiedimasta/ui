import type { Meta, StoryObj } from '@storybook/vue3';
import Toast from './Toast.vue';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    toast: {
      control: 'object',
      description: 'Toast object (id, variant, title, description, action, etc.)',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Toast must be used within a ToastProvider wrapper, which should be placed at the root of your app or layout to enable toast functionality.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Playground: Story = {
  args: {
    toast: {
      id: '1',
      variant: 'default',
      title: 'Toast Title',
      description: 'Toast description goes here.',
      action: {
        label: 'Undo',
        onClick: () => alert('Undo clicked!'),
      },
      duration: 5000,
    },
  },
  render: (args) => ({
    components: { Toast },
    setup() {
      return { args };
    },
    template: '<Toast v-bind="args" />',
  }),
};
