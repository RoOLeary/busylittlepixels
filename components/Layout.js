import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({
  children,
}) => {
  return (
    <>
        <Header />
        <main className="content text-slate-800">
        {children}
        </main>
        <Footer />
    </>
  );
};
