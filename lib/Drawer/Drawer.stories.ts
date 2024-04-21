import type { Meta, StoryObj } from '@storybook/react';

import Drawer, { DrawerDirection, type DrawerProps } from './Drawer';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    isOpen: true,
    direction: 'left',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: DrawerProps = {
  isOpen: true,
  direction: DrawerDirection.Left,
  children: 'Hello',
  onClose: () => console.log('closed'),
};

export const DefaultDrawer: Story = {
  args: {
    ...defaultProps,
    isOpen: true,
    direction: DrawerDirection.Left,
    children: 'drawer',
  },
};

export const DisabledDrawer: Story = {
  args: {
    ...defaultProps,
    isOpen: false,
    children: 'drawer',
  },
};
