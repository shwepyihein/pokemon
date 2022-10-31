import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilterBox } from './filter-box';

const Story: ComponentMeta<typeof FilterBox> = {
  component: FilterBox,
  title: 'FilterBox',
};
export default Story;

const Template: ComponentStory<typeof FilterBox> = (args) => (
  <FilterBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
