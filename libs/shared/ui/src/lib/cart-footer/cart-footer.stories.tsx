import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CartFooter } from './cart-footer';

const Story: ComponentMeta<typeof CartFooter> = {
  component: CartFooter,
  title: 'Component/CartFooter',
};
export default Story;

const Template: ComponentStory<typeof CartFooter> = (args) => (
  <CartFooter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  count: '2',
};
