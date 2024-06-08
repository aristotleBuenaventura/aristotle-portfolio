// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';



const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    children: true,
    text: "Click",
    onClick: () => console.log("the button was clicked"),
  },
};