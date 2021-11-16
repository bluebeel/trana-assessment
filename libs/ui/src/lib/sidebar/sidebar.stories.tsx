import { Story, Meta } from '@storybook/react';
import { COURSES } from '../course-tree/data';
import { Sidebar, SidebarProps } from './sidebar';

export default {
  component: Sidebar,
  title: 'Sidebar',
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  courses: COURSES,
  menus: [{title: "Welcome", slug: "/", type: null}]
};

Default.parameters = {
  nextRouter: {
    pathname: '/',
    asPath: '/',
  },
};

