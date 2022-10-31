import styles from './card.module.css';

/* eslint-disable-next-line */

interface cardDataProps {
  img_url: string;
  name: string;
  price: number;
  card_type: string;
  Card_count: string;
}
export interface CardProps {
  selected?: boolean;
  cardData: cardDataProps;
}

export function Card(props: CardProps) {
  return (
    <div className="relative w-full h-full mx-auto max-w-[299px]" {...props}>
      <img
        className="rounded-md mx-auto mb-[-20px]"
        src={props.cardData.img_url}
        alt="pokemon"
      />
      <div
        style={{
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.03)',
        }}
        className="bg-white rounded-lg shadow-lg pt-7 pb-5 text-center"
      >
        <p className="text-lg font-bold mb-1">{props.cardData.price}</p>
        <p className="text-xs font-bold text-[#0F6DB0] mb-1">
          {props.cardData.card_type}
        </p>
        <div className="flex gap-10 justify-center mb-1">
          <p>$ {props.cardData.price}</p>
          <p>{props.cardData.card_type} Left</p>
        </div>
      </div>
      <div className="text-center mt-[-18px]">
        {props.selected ? (
          <button className="inline-flex items-center rounded-full border border-transparent bg-gray-900 px-8 py-2 text-xs font-medium text-white shadow-sm hover:bg-[#FDCE29">
            Selected
          </button>
        ) : (
          <button className="inline-flex items-center rounded-full border border-transparent bg-[#FDCE29] px-8 py-2 text-xs font-medium text-white shadow-sm hover:bg-gray-900">
            Select Card
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
