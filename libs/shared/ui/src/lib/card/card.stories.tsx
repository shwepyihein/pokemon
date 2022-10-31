import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './card';

const Story: ComponentMeta<typeof Card> = {
  component: Card,
  title: 'Component/Card',
};
export default Story;

const CardData = {
  img_url: 'https://i.ibb.co/kqdnYh2/image-8.png',
  name: 'Pokemon',
  price: 24.9,
  card_type: 'rarity',
  Card_count: '3',
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
