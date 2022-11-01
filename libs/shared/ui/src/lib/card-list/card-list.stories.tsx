import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardList } from './card-list';

const Story: ComponentMeta<typeof CardList> = {
  component: CardList,
  title: 'Component/CardList',
};
export default Story;

const Template: ComponentStory<typeof CardList> = (args) => (
  <CardList {...args} />
);

const cardArray = [
  {
    images: { small: 'https://i.ibb.co/kqdnYh2/image-8.png' },
    name: 'Pokemon',
    cardmarket: {
      prices: {
        averageSellPrice: 2.49,
      },
    },
    rarity: 'rarity',
  },
  {
    images: { small: 'https://i.ibb.co/kqdnYh2/image-8.png' },
    name: 'Pokemon',
    cardmarket: {
      prices: {
        averageSellPrice: 2.49,
      },
    },
    rarity: 'rarity',
  },
  {
    images: { small: 'https://i.ibb.co/kqdnYh2/image-8.png' },
    name: 'Pokemon',
    cardmarket: {
      prices: {
        averageSellPrice: 2.49,
      },
    },
    rarity: 'rarity',
  },
];

export const CardArray = Template.bind({});
CardArray.args = {
  cardListData: cardArray,
  selectedCard: () => {
    console.log('selected');
  },
};
