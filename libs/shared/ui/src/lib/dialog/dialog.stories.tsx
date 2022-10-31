import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { DialogBox } from './dialog';

const Story: ComponentMeta<typeof DialogBox> = {
  component: DialogBox,
  title: 'Dialog',
};
export default Story;

const Template: ComponentStory<typeof DialogBox> = (args) => {
  return <DialogBox {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  onClose: () => {
    console.log('close');
  },
  title: 'title',
};
