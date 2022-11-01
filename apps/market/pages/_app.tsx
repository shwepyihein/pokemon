import { AppProps } from 'next/app';
import Head from 'next/head';
import { PokemonProvider } from '../context/pokemonContext';
import Layout from '../layout';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to market!</title>
      </Head>
      <main className="app">
        <PokemonProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PokemonProvider>
      </main>
    </>
  );
}

export default CustomApp;
