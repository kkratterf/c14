import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '@c14/design-system/components/ui/skeleton';

/**
 * Use to show a placeholder while content is loading.
 */
const meta = {
  title: 'ui/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

/**
 * The default form of the skeleton.
 */
export const Default: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <Skeleton {...args} className="rounded-full w-12 h-12" />
      <div className="space-y-2">
        <Skeleton {...args} className="w-[250px] h-4" />
        <Skeleton {...args} className="w-[200px] h-4" />
      </div>
    </div>
  ),
};
