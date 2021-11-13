import { render } from '@testing-library/react';

import CourseTree from './course-tree';

describe('CourseTree', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseTree />);
    expect(baseElement).toBeTruthy();
  });
});
