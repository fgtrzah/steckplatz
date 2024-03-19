import type { Meta, StoryObj } from '@storybook/react';

import H1, { type H1Props } from './H1';

const meta = {
  title: 'Components/H1',
  component: H1,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof H1>;

type Story = StoryObj<typeof meta>;

const defaultProps: H1Props = {};

export const DefaultH1: Story = {
  args: {
    ...defaultProps,
    children: 'heading 1',
  },
};

export default meta;
