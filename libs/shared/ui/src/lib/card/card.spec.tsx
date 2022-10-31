import { render } from '@testing-library/react';

import Card from './card';

const CardData = {
  img_url: 'https://i.ibb.co/kqdnYh2/image-8.png',
  name: 'Pokemon',
  price: 24.9,
  card_type: 'rarity',
  Card_count: '3',
};

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card cardData={CardData} />);
    expect(baseElement).toBeTruthy();
  });
});
