import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from './navbar';

const Story: ComponentMeta<typeof Navbar> = {
  component: Navbar,
  title: 'Component/Navbar',
};
export default Story;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarComponent = Template.bind({});
NavbarComponent.args = {};
