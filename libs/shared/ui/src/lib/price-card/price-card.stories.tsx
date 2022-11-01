import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PriceCard } from './price-card';

const Story: ComponentMeta<typeof PriceCard> = {
  component: PriceCard,
  title: 'Component/PriceCard',
};
export default Story;

const CardData = {
  img_url: 'https://i.ibb.co/kqdnYh2/image-8.png',
  name: 'Pokemon',
  price: 24.9,
  card_type: 'rarity',
  card_count: 3,
  card_Left: 3,
};

const Template: ComponentStory<typeof PriceCard> = (args) => (
  <PriceCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  cardData: CardData,
  updateCount: () => {
    console.log(1);
  },
};
