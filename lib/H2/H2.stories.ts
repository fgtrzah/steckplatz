import type { Meta, StoryObj } from '@storybook/react';

import H2, { type H2Props } from './H2';

const meta = {
  title: 'Components/H2',
  component: H2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof H2>;

type Story = StoryObj<typeof meta>;

const defaultProps: H2Props = {};

export const DefaultH2: Story = {
  args: {
    ...defaultProps,
    children: 'heading 2',
  },
};

export default meta;
