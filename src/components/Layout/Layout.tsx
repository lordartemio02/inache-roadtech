import { FC } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import { ILayout } from './Layout.interface';

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 mt-[72px] py-6'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
