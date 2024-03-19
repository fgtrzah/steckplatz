import type { Meta, StoryObj } from '@storybook/react';

import H3, { type H3Props } from './H3';

const meta = {
  title: 'Components/H3',
  component: H3,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof H3>;


type Story = StoryObj<typeof meta>;

const defaultProps: H3Props = {};

export const DefaultH3: Story = {
  args: {
    ...defaultProps,
    children: 'heading 3',
  },
};

export default meta;
