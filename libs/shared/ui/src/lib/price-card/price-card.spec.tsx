import { render } from '@testing-library/react';

import PriceCard from './price-card';

describe('PriceCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PriceCard />);
    expect(baseElement).toBeTruthy();
  });
});
