import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyButton } from '../components/MyButton';

export default {
//   title: 'My Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Very important text',
  variant: 'contained'
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Not so important',
  variant: 'outlined'
};