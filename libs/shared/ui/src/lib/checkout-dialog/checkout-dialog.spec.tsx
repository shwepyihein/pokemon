import { render } from '@testing-library/react';

import CheckoutDialog from './checkout-dialog';

describe('CheckoutDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckoutDialog />);
    expect(baseElement).toBeTruthy();
  });
});
