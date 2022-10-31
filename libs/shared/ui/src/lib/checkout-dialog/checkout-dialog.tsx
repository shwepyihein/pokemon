import DialogBox from '../dialog/dialog';
import PriceCard from '../price-card/price-card';
import styles from './checkout-dialog.module.css';

/* eslint-disable-next-line */
export interface CheckoutDialogProps {
  open: boolean;
  onClose: (v: boolean) => void;
}

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

export function CheckoutDialog({ open = false, onClose }: CheckoutDialogProps) {
  return (
    <div>
      <DialogBox open={open} onClose={onClose}>
        {cardArray.map((item, i) => {
          return <PriceCard cardData={item} key={i} />;
        })}
        <div className={styles['container']}></div>
        <div>
          <div className="py-5 text-center">
            <p className="text-xs text-gray-200 underline">clear all</p>
            <div className="grid grid-cols-2 gap-3 mx-auto py-2 max-w-[230px]">
              <p className="text-md font-medium">Total cards</p>
              <p>2</p>
              <p className="text-lg font-bold">Total Price</p>
              <p>2</p>
            </div>
            <div>
              <button className="inline-flex relative  items-center rounded-full  bg-[#298BFD] px-10 py-3 text-xs font-medium text-white  hover:bg-[#298BFD]">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </DialogBox>
    </div>
  );
}

export default CheckoutDialog;
