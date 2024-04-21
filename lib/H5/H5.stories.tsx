import type { Meta, StoryObj } from '@storybook/react';

import { H5, type H5Props } from './H5';

const meta = {
  title: 'Components/H5',
  component: H5,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof H5>;
type Story = StoryObj<typeof meta>;

const defaultProps: H5Props = {
  display: 'inline-block',
  bg: 'transparent',
};

export const DefaultA: Story = {
  args: {
    ...defaultProps,
    children: 'Click Me!',
  },
};

export const DisabledA: Story = {
  args: {
    ...defaultProps,
    children: 'Click Me!',
    disabled: true,
  },
};
export default meta;
