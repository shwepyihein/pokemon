import { render } from '@testing-library/react';

import Dialog from './dialog';

describe('Dialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Dialog
        open={true}
        onClose={() => {
          console.log('close');
        }}
        title="title"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
