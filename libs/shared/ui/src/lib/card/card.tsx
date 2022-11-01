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
  cardData: any;
  selectedCard: (v: any) => void;
  pokemonContext?: any;
}

export function Card(props: CardProps) {
  const handleCheck = (v: any) => {
    if (props.pokemonContext) {
      const newFilter = props.pokemonContext.checkoutList.find(
        (item: any) => item.id === v.id
      );
      return newFilter ? true : false;
    }
  };

  return (
    <div className="relative w-full h-full mx-auto max-w-[299px]" {...props}>
      <img
        className="rounded-md mx-auto mb-[-20px]"
        src={props.cardData?.images?.small}
        alt="pokemon"
      />
      <div
        style={{
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.03)',
        }}
        className="bg-white rounded-lg shadow-lg pt-7 pb-5 text-center"
      >
        <p className="text-lg font-bold mb-1">{props.cardData.name}</p>
        <p className="text-xs font-bold text-[#0F6DB0] mb-1">
          {props.cardData.rarity}
        </p>
        <div className="flex gap-10 justify-center mb-1">
          <p>$ {props.cardData.cardmarket.prices.averageSellPrice}</p>
          <p>5 Left</p>
        </div>
      </div>
      <div className="text-center mt-[-18px]">
        {handleCheck(props.cardData) ? (
          <button className="inline-flex items-center rounded-full border border-transparent bg-gray-900 px-8 py-2 text-xs font-medium text-white shadow-sm hover:bg-[#FDCE29">
            Selected
          </button>
        ) : (
          <button
            onClick={() => {
              props.selectedCard({
                img_url: props.cardData?.images?.small,
                name: props.cardData.name,
                price: props.cardData.cardmarket.prices.averageSellPrice,
                card_type: props.cardData.rarity,
                card_count: 1,
                card_Left: 5,
                ...props.cardData,
              });
            }}
            className="inline-flex items-center rounded-full border border-transparent bg-[#FDCE29] px-8 py-2 text-xs font-medium text-white shadow-sm hover:bg-gray-900"
          >
            Select Card
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
