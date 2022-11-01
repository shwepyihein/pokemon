import Card from '../card/card';

/* eslint-disable-next-line */
export interface CardListProps {
  cardListData: any;
  selectedCard: (v: any) => void;
  pokemonContext?: any;
}

export function CardList({
  cardListData,
  pokemonContext,
  selectedCard,
}: CardListProps) {
  return (
    <div
      role="list"
      className="max-7xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {cardListData?.map((item: any, i: number) => {
        return (
          <Card
            cardData={item}
            key={i}
            pokemonContext={pokemonContext}
            selectedCard={selectedCard}
          />
        );
      })}
    </div>
  );
}

export default CardList;
