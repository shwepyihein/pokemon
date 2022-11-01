import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilterBox } from './filter-box';

const Story: ComponentMeta<typeof FilterBox> = {
  component: FilterBox,
  title: 'Component/FilterBox',
};
export default Story;

const listData = {
  rarityList: [
    '',
    '',
    'Amazing Rare',
    'Common',
    'LEGEND',
    'Promo',
    'Rare',
    'Rare ACE',
    'Rare BREAK',
    'Rare Holo',
    'Rare Holo EX',
    'Rare Holo GX',
    'Rare Holo LV.X',
    'Rare Holo Star',
    'Rare Holo V',
    'Rare Holo VMAX',
    'Rare Prime',
    'Rare Prism Star',
    'Rare Rainbow',
    'Rare Secret',
    'Rare Shining',
    'Rare Shiny',
    'Rare Shiny GX',
    'Rare Ultra',
    'Uncommon',
  ],
  typeList: [
    '',
    'Colorless',
    'Darkness',
    'Dragon',
    'Fairy',
    'Fighting',
    'Fire',
    'Grass',
    'Lightning',
    'Metal',
    'Psychic',
    'Water',
  ],
  subTypeList: [
    '',
    'BREAK',
    'Baby',
    'Basic',
    'EX',
    'GX',
    'Goldenrod Game Corner',
    'Item',
    'LEGEND',
    'Level-Up',
    'MEGA',
    'Pokémon Tool',
    'Pokémon Tool F',
    'Rapid Strike',
    'Restored',
    "Rocket's Secret Machine",
    'Single Strike',
    'Special',
    'Stadium',
    'Stage 1',
    'Stage 2',
    'Supporter',
    'TAG TEAM',
    'Technical Machine',
    'V',
    'VMAX',
  ],
};

const Template: ComponentStory<typeof FilterBox> = (args) => (
  <FilterBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  listData: listData,
  FetchFitler: () => {
    console.log('fitler');
  },
};
