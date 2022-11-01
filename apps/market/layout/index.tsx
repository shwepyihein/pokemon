import { CartFooter, Navbar } from '@market/shared/ui';
import React from 'react';
import { usePokemon } from '../context/pokemonContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pokemonContext = usePokemon();
  return (
    <div>
      <Navbar />
      {children}
      <CartFooter
        count={pokemonContext.checkoutList?.length ?? ''}
        handledialog={() => {
          pokemonContext.setCheckoutDialog(true);
        }}
      />
    </div>
  );
};

export default Layout;
