import { Story, Meta } from '@storybook/react';
import { CourseTree } from './course-tree';
import { COURSES } from "./data";
import { CourseTreeProps } from './types';

export default {
  component: CourseTree,
  title: 'Course Tree',
} as Meta;

const Template: Story<CourseTreeProps> = (args) => <CourseTree {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  courses: COURSES,
};
