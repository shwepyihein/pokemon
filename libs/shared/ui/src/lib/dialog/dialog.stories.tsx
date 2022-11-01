import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { DialogBox } from './dialog';

const Story: ComponentMeta<typeof DialogBox> = {
  component: DialogBox,
  title: 'Component/Dialog',
};
export default Story;

const Template: ComponentStory<typeof DialogBox> = (args) => {
  return <DialogBox {...args} />;
};

export const Succeess: ComponentStory<typeof DialogBox> = (args) => {
  return (
    <DialogBox
      open={true}
      onClose={() => {
        console.log('close');
      }}
    >
      <div className="mx-auto flex flex-col justify-center items-center py-6">
        <img
          className="mb-3"
          src="https://i.ibb.co/1QvfHdw/Exclude.jpg"
          alt="success"
        />
        <p>Payment Success</p>
      </div>
    </DialogBox>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  onClose: () => {
    console.log('close');
  },
  title: 'title',
};
