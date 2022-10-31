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

export const CardArray = Template.bind({});
CardArray.args = {};
