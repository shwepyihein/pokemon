import pokemon from 'pokemontcgsdk';

pokemon.configure({ apiKey: 'c9785bdf-6a56-404f-a79b-1da0f927de2a' });

export const fetchRarilylist = () => {
  return pokemon.rarity.all();
};

export const fetchSubTypeList = () => {
  return pokemon.subtype.all();
};

export const fetchTypeList = () => {
  return pokemon.type.all();
};

export const fetchCardList = () => {
  return pokemon.card.where({ pageSize: 25, page: 1 });

  // Filter cards via query parameters
};
