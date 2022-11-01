import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckoutDialog } from './checkout-dialog';

const Story: ComponentMeta<typeof CheckoutDialog> = {
  component: CheckoutDialog,
  title: 'Component/CheckoutDialog',
};
export default Story;

const cardArray = [
  {
    img_url: 'https://i.ibb.co/kqdnYh2/image-8.png',
    name: 'Pokemon',
    price: 24.9,
    card_type: 'rarity',
    card_count: '3',
    card_Left: '3',
  },
  {
    img_url: 'https://i.ibb.co/kqdnYh2/image-8.png',
    name: 'Pokemon',
    price: 24.9,
    card_type: 'rarity',
    card_count: '3',
    card_Left: '3',
  },
  {
    img_url: 'https://i.ibb.co/kqdnYh2/image-8.png',
    name: 'Pokemon',
    price: 24.9,
    card_type: 'rarity',
    card_count: '3',
    card_Left: '3',
  },
];

const Template: ComponentStory<typeof CheckoutDialog> = (args) => (
  <CheckoutDialog {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  onClose: () => {
    console.log('close');
  },
  pokemonContext: {
    emptyList: () => console.log('clear'),
    checkoutList: cardArray,
    setCheckoutDialog: () => {
      console.log('close Dialog');
    },
    setSuccessDialog: () => {
      console.log('open Success Dialog');
    },
  },
};
