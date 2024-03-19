import type { Meta, StoryObj } from '@storybook/react';

import A, { type AProps } from './A';

const meta = {
  title: 'Components/A',
  component: A,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'success', 'info', 'warning', 'error'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof A>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: AProps = {
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
