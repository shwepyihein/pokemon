import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckoutDialog } from './checkout-dialog';

const Story: ComponentMeta<typeof CheckoutDialog> = {
  component: CheckoutDialog,
  title: 'CheckoutDialog',
};
export default Story;

const Template: ComponentStory<typeof CheckoutDialog> = (args) => (
  <CheckoutDialog {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  onClose: () => {
    console.log('close');
  },
};
