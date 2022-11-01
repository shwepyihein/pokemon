import DialogBox from '../dialog/dialog';
import PriceCard from '../price-card/price-card';
import styles from './checkout-dialog.module.css';

/* eslint-disable-next-line */
export interface CheckoutDialogProps {
  open: boolean;
  onClose: (v: boolean) => void;
  pokemonContext?: any;
}

export function CheckoutDialog({
  open = false,
  onClose,
  pokemonContext,
}: CheckoutDialogProps) {
  const getTotalPrice = (v: any[]) => {
    let data = 0;
    for (let i = 0; i < v.length; i++) {
      data = data + v[i].card_count * v[i].price;
    }
    return data;
  };
  const getCardCount = (v: any[]) => {
    let data = 0;
    for (let i = 0; i < v.length; i++) {
      data = data + v[i].card_count;
    }
    return data;
  };
  return (
    <div>
      <DialogBox open={open} onClose={onClose}>
        {pokemonContext?.checkoutList?.map((item: any, i: number) => {
          return (
            <PriceCard
              cardData={item}
              key={i}
              updateCount={pokemonContext.updateCount}
            />
          );
        })}
        <div className={styles['container']}></div>
        <div>
          <div className="py-5 text-center">
            <p
              className="text-xs cursor-pointer text-gray-200 underline"
              onClick={pokemonContext.emptyList}
            >
              clear all
            </p>
            <div className="grid grid-cols-2 gap-3 mx-auto py-2 max-w-[230px]">
              <p className="text-md font-medium">Total cards</p>
              <p>{getCardCount(pokemonContext?.checkoutList)}</p>
              <p className="text-lg font-bold">Total Price</p>
              <p>{getTotalPrice(pokemonContext?.checkoutList).toFixed(2)}</p>
            </div>
            <div>
              <button
                onClick={() => {
                  pokemonContext.setCheckoutDialog(false);
                  pokemonContext.setSuccessDialog(true);
                }}
                className=" cursor-pointer inline-flex relative  items-center rounded-full  bg-[#298BFD] px-10 py-3 text-xs font-medium text-white  hover:bg-[#298BFD]"
              >
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
