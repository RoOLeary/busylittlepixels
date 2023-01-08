import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({
  children,
}) => {
  return (
    <>
        <Head>
          <title>BUSY LITTLE PIXELS</title>
        </Head>
        <main className="content text-slate-800">
        {children}
        </main>
        <Footer />
    </>
  );
};
