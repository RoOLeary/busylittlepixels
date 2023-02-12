import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({
  children,
}) => {
  return (
    <>
        <Head>
          <title>Busy Little Pixels | Development, Media and Technology</title>
          <meta property="og:title" content="Busy Little Pixels | Development, Media and Technology" />
          <meta property="og:description" content="Experts in headless web and app development, devops, project management, digital strategy, media and events." />
        </Head>
        <main className="content text-slate-800">
          {children}
        </main>
        <Footer />
    </>
  );
};
