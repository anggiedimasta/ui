import type { Meta, StoryObj } from '@storybook/vue3';
import UseClassesDemo from './useClasses-demo.vue';

const meta: Meta<typeof UseClassesDemo> = {
  title: 'Composables/useClasses Demo',
  component: UseClassesDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomClasses: Story = {
  render: () => ({
    components: { UseClassesDemo },
    template: `
      <div class="space-y-4">
        <UseClassesDemo />
        <div class="p-4 bg-gray-100 rounded">
          <p>This demonstrates how useClasses composable works in components</p>
        </div>
      </div>
    `,
  }),
};