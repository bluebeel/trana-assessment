import { render } from '@testing-library/react';

import Accordion from './accordion';
import { ITEMS } from "./data";

describe('Accordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Accordion items={ITEMS} />);
    expect(baseElement).toBeTruthy();
  });
});
