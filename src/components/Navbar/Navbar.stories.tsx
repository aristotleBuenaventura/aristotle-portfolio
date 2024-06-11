// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { NavItem, NavItemProps } from './NavItem';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
};
export default meta;

type Story = StoryObj<typeof Navbar>;

const links : NavItemProps[] = [
    {
        "text": "Home",
        "url" : "/home"
    },
    {
        "text": "About me",
        "url" : "/about-me"
    },
    {
        "text": "Works",
        "url" : "/works"
    },
    {
        "text": "Tools",
        "url" : "/tools"
    },
    {
        "text": "Contact",
        "url" : "/contact"
    },

]

const children = () => { 
  return links.map((link,i)=>  <NavItem key={i} url = {link.url} text={link.text}/>)
}

export const Primary: Story = {
  args: {
    children: (
      <div className='space-x-10 me-20'>
        {children()}
      </div>

    )
  },
};