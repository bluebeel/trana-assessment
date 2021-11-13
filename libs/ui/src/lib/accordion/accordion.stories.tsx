import { Story, Meta } from '@storybook/react';
import { Accordion, AccordionProps } from './accordion';
import { ITEMS } from "./data";

export default {
  component: Accordion,
  title: 'Accordion',
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: ITEMS,
  defaultValue: '1'
};
