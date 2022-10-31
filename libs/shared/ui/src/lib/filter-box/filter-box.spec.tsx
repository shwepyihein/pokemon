import { render } from '@testing-library/react';

import FilterBox from './filter-box';

describe('FilterBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilterBox />);
    expect(baseElement).toBeTruthy();
  });
});
