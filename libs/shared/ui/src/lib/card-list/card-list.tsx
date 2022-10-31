import Card from '../card/card';
import styles from './card-list.module.css';

const cardArray = [
  {
    img_url: 'https://i.ibb.co/kqdnYh2/image-8.png',
    name: 'Pokemon',
    price: 24.9,
    card_type: 'rarity',
    Card_count: '3',
  },
  {
    img_url: 'https://i.ibb.co/kqdnYh2/image-8.png',
    name: 'Pokemon',
    price: 24.9,
    card_type: 'rarity',
    Card_count: '3',
  },
  {
    img_url: 'https://i.ibb.co/kqdnYh2/image-8.png',
    name: 'Pokemon',
    price: 24.9,
    card_type: 'rarity',
    Card_count: '3',
  },
  {
    img_url: 'https://i.ibb.co/kqdnYh2/image-8.png',
    name: 'Pokemon',
    price: 24.9,
    card_type: 'rarity',
    Card_count: '3',
  },
];

/* eslint-disable-next-line */
export interface CardListProps {}

export function CardList(props: CardListProps) {
  return (
    <div
      role="list"
      className="max-7xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {cardArray.map((item, i) => {
        return <Card cardData={item} key={i} />;
      })}
    </div>
  );
}

export default CardList;
