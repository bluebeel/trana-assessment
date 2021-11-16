import { Story, Meta } from '@storybook/react';
import { CourseTree } from './course-tree';
import { COURSES } from './data';
import { CourseTreeProps } from './types';

export default {
  component: CourseTree,
  title: 'Course Tree/Overview',
} as Meta;

const Template: Story<CourseTreeProps> = (args) => <CourseTree {...args} />;

export const Default = Template.bind({});
Default.args = {
  courses: COURSES,
};

Default.parameters = {
  nextRouter: {
    pathname: '/wie-kreditkarten-funktionieren',
    asPath: '/wie-kreditkarten-funktionieren',
  },
};
