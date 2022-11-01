import {
  CardList,
  CheckoutDialog,
  DialogBox,
  FilterBox,
} from '@market/shared/ui';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchCardList, fetchQueryList } from '../api/server';
import { usePokemon } from '../context/pokemonContext';
import styles from './index.module.css';

export const HomePage = ({ cardsList, data }) => {
  const pokemonContext = usePokemon();
  const [cardListData, setCardListData] = useState([]);

  const handleChange = async ({ q, rarity, type, subtype }) => {
    let data = '';

    if (q) {
      data = `name:"${q.toLowerCase()}"`;
    }
    if (rarity) {
      data = data
        ? data + `rarity:"${rarity.toLowerCase()}"`
        : `rarity:"${rarity.toLowerCase()}"`;
    }
    if (type) {
      data = data
        ? data + ` types:"${type.toLowerCase()}" `
        : ` types:"${type.toLowerCase()}" `;
    }
    if (subtype) {
      data = data
        ? data + `subtypes:"${subtype.toLowerCase()}" `
        : `subtypes:"${subtype.toLowerCase()}" `;
    }
    console.log(data);

    try {
      const d = await fetchQueryList(data);
      console.log(d);
      setCardListData(d.data);
    } catch (e) {
      console.log('da');
    }
  };
  /*  console.log(cardsList, data);
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  useEffect(() => {
    setCardListData(cardsList);
  }, [cardsList]);

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
        <FilterBox
          FetchFitler={handleChange}
          listData={pokemonContext.listData}
        />
      </div>
      <CardList
        cardListData={cardListData}
        pokemonContext={pokemonContext}
        selectedCard={pokemonContext.selectedCard}
      />
    </div>
  );
};

export const getServerSideProps = async ({
  query: { q, rarity, type, subtype },
}: any) => {
  console.log(q, rarity, type, subtype);
  let data = '';

  if (q) {
    data = `name:"${q.toLowerCase()}"`;
  }
  if (rarity) {
    data = data
      ? data + `rarity:"${rarity.toLowerCase()}"`
      : `rarity:"${rarity.toLowerCase()}"`;
  }
  if (type) {
    data = data
      ? data + ` types:"${type.toLowerCase()}" `
      : ` types:"${type.toLowerCase()}" `;
  }
  if (subtype) {
    data = data
      ? data + `subtypes:"${subtype.toLowerCase()}" `
      : `subtypes:"${subtype.toLowerCase()}" `;
  }
  console.log(data);
  try {
    const d = data ? await fetchQueryList(data) : await fetchCardList();

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
