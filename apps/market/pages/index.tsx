import {
  CardList,
  CheckoutDialog,
  DialogBox,
  FilterBox,
} from '@market/shared/ui';
import Image from 'next/image';
import { fetchCardList } from '../api/server';
import { usePokemon } from '../context/pokemonContext';
import styles from './index.module.css';

export const HomePage = ({ cardsList, data }) => {
  const pokemonContext = usePokemon();
  console.log(pokemonContext, data);
  /*  console.log(cardsList, data);
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="mx-auto max-w-7xl py-12 ">
      <DialogBox
        open={pokemonContext.successDialog}
        onClose={pokemonContext.setSuccessDialog}
      >
        <div className="mx-auto flex flex-col justify-center items-center py-6">
          <Image
            width={150}
            height={150}
            className="mb-3"
            src="/Exclude.jpg"
            alt="success"
          />
          <p>Payment Success</p>
        </div>
      </DialogBox>
      <CheckoutDialog
        pokemonContext={pokemonContext}
        open={pokemonContext.checkoutDialog}
        onClose={pokemonContext.setCheckoutDialog}
      />
      <div className="mx-auto max-w-lg mb-8">
        <FilterBox listData={pokemonContext.listData} />
      </div>
      <CardList
        cardListData={cardsList}
        pokemonContext={pokemonContext}
        selectedCard={pokemonContext.selectedCard}
      />
    </div>
  );
};

export const getServerSideProps = async ({
  query: { rarity = 0, type, subtype },
}: any) => {
  console.log(rarity, type, subtype);
  const filterQuery: any = [];

  try {
    const d = filterQuery.length === 0 ? await fetchCardList() : '';
    return {
      props: {
        cardsList: d.data,
        page: d?.page,
        data: d,
        count: d.count,
      },
    };
  } catch (e) {
    console.log('ERRR', e);
    return {
      notFound: true,
    };
  }
};
export default HomePage;
