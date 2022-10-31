import { render } from '@testing-library/react';

import CartFooter from './cart-footer';

describe('CartFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartFooter count="3" />);
    expect(baseElement).toBeTruthy();
  });
});
