// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonVariant } from './Button';


const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: ButtonVariant.Secondary,
    text: "Click",
  },
};

export const Primary: Story = {
  args: {
    children: "Button",
    variant: ButtonVariant.Primary,
    text: "Click",
  },
};