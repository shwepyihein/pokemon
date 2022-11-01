import styles from './price-card.module.css';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';

/* eslint-disable-next-line */
export interface PriceCardProps {
  cardData: cardDataProps;
  updateCount: (v: any) => void;
}

interface cardDataProps {
  img_url: string;
  name: string;
  price: number;
  card_type: string;
  card_count: number;
  card_Left: number;
}

export function PriceCard(props: PriceCardProps) {
  return (
    <div {...props} className="relative py-5 flex items-center space-x-3">
      <div className="flex-shrink-0">
        <img
          className="h-20 w-20 rounded-md"
          src={props.cardData.img_url}
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-900">
          {props.cardData.name}
        </p>
        <p className="truncate text-sm text-gray-500">
          {props.cardData.price} per card
        </p>
        <p className="truncate text-sm mt-5 text-red-900">
          {props.cardData.card_Left}{' '}
          <span className="text-gray-500"> cards left </span>
        </p>
      </div>
      <div className="min-w-0 flex-2 text-end">
        <div className="flex items-center gap-1 justify-end">
          <p className="text-sm font-medium text-[#298BFD]">
            {props.cardData.card_count}
          </p>
          <div>
            <p
              onClick={() => {
                if (props.cardData.card_Left <= props.cardData.card_count) {
                  return;
                }
                props.updateCount({
                  ...props.cardData,
                  card_count: props.cardData.card_count + 1,
                });
              }}
              className="cursor-pointer"
            >
              <ChevronUpIcon className="w-3 h-3" />
            </p>
            <p
              onClick={() => {
                if (props.cardData.card_count === 1) {
                  return;
                }
                props.updateCount({
                  ...props.cardData,
                  card_count: props.cardData.card_count - 1,
                });
              }}
              className="cursor-pointer"
            >
              <ChevronDownIcon className="w-3 h-3" />
            </p>
          </div>
        </div>
        <p className="truncate text-xs text-gray-900 mt-5">price</p>
        <p className="text-sm text-[#298BFD] mt-1 font-bold">
          $ {(props.cardData.card_count * props.cardData.price).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default PriceCard;
