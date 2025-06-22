import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../../widgets';
import s from './base-layout.module.css';

export const BaseLayout = () => {
  return (
    <div className={s.app}>
      <Header />
      <main className={s.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
