// import styles from './cart-footer.module.css';

/* eslint-disable-next-line */
export interface CartFooterProps {
  count: string;
  handledialog: () => void;
}

export function CartFooter(props: CartFooterProps) {
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, rgba(248, 248, 248, 0) 0%, #fff 100%)',
      }}
      className="fixed bottom-0 w-full"
    >
      <div className="flex justify-center items-center pb-6 ">
        <button
          onClick={props.handledialog}
          className="inline-flex relative  items-center rounded-full border border-transparent bg-[#298BFD] px-8 py-2 text-xs font-medium text-white shadow-sm hover:bg-[#298BFD]"
        >
          <div className="absolute top-[-5px] left-[5px]  bg-red-900 w-4 h-4 rounded-full">
            {props.count}
          </div>
          <div className="-ml-0.5 mr-2 h-5 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.5902 5.36287L16.3875 14.0333L4.49032 14.0332L3 6.03382L17.018 6.0439L17.5373 4H21V5.36287H18.5902ZM15.3346 12.6704L16.6719 7.40653L4.63336 7.39787L5.61566 12.6704H15.3346ZM16.6997 16.8205C16.6997 18.0223 15.7271 19 14.5317 19C13.3363 19 12.3637 18.0223 12.3637 16.8205C12.3637 16.5319 12.42 16.2563 12.5218 16.004H8.37358C8.47538 16.2563 8.53163 16.5319 8.53163 16.8205C8.53163 18.0223 7.5591 19 6.36365 19C5.16822 19 4.19566 18.0223 4.19566 16.8205C4.19566 15.6188 5.16823 14.6411 6.36365 14.6411H14.5317C15.7271 14.6411 16.6997 15.6188 16.6997 16.8205ZM6.36365 17.6371C6.81155 17.6371 7.17593 17.2708 7.17593 16.8205C7.17593 16.3703 6.81155 16.004 6.36365 16.004C5.91574 16.004 5.55135 16.3703 5.55135 16.8205C5.55135 17.2708 5.91575 17.6371 6.36365 17.6371ZM14.5317 17.6371C14.9796 17.6371 15.344 17.2708 15.344 16.8205C15.344 16.3703 14.9796 16.004 14.5317 16.004C14.0838 16.004 13.7195 16.3703 13.7195 16.8205C13.7195 17.2708 14.0838 17.6371 14.5317 17.6371Z"
                fill="white"
              />
            </svg>
          </div>
          View cart
        </button>
      </div>
    </div>
  );
}

export default CartFooter;
