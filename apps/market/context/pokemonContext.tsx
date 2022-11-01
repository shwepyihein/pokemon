import { useRouter } from 'next/router';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  fetchRarilylist,
  fetchSubTypeList,
  fetchTypeList,
} from '../api/server';

export const PokemonContext = createContext<any>({});

interface pokemonProviderProps {
  children: ReactNode;
}
export const PokemonProvider = ({ children }: pokemonProviderProps) => {
  const router = useRouter();
  const [checkoutList, setCheckoutList] = useState<any[]>([]);
  const [successDialog, setSuccessDialog] = useState(false);
  const [checkoutDialog, setCheckoutDialog] = useState(false);
  const [listData, setListData] = useState<any>({
    rarityList: [],
    TypeList: [],
    subTypeList: [],
  });

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const p1 = await fetchRarilylist();
    const p2 = await fetchTypeList();
    const p3 = await fetchSubTypeList();

    const [rarity, t, Subtype]: any = await Promise.all([p1, p2, p3]);
    setListData({
      rarityList: ['', ...rarity],
      typeList: ['', ...t],
      subTypeList: ['', ...Subtype],
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectedCard = (v: any) => {
    const newFilter = checkoutList.find((item) => item.id === v.id);
    if (newFilter) {
      return;
    }
    setCheckoutList([...checkoutList, v]);
  };
  const emptyList = () => {
    setCheckoutList([]);
    setCheckoutDialog(false);
  };

  const updateCount = (v: any) => {
    const newFilter = checkoutList.map((item) => (item.id == v.id ? v : item));
    setCheckoutList([...newFilter]);
  };
  const value = useMemo(
    () => ({
      checkoutList,
      checkoutDialog,
      setCheckoutDialog,
      successDialog,
      setSuccessDialog,
      listData,
    }),
    [
      checkoutList,
      setCheckoutDialog,
      setSuccessDialog,
      successDialog,
      listData,
      checkoutDialog,
    ]
  );

  return (
    <PokemonContext.Provider
      value={{ ...value, selectedCard: selectedCard, emptyList, updateCount }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
