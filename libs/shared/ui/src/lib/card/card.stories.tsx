import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './card';

const Story: ComponentMeta<typeof Card> = {
  component: Card,
  title: 'Component/Card',
};
export default Story;

const CardData = {
  images: { small: 'https://i.ibb.co/kqdnYh2/image-8.png' },
  name: 'Pokemon',
  cardmarket: {
    prices: {
      averageSellPrice: 2.49,
    },
  },
  rarity: 'rarity',
};

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  cardData: CardData,
  selected: true,
};

export const unSelected = Template.bind({});
unSelected.args = {
  cardData: CardData,
  selected: false,
};
