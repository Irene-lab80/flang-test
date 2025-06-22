import { Link } from 'react-router-dom';

import s from './header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.content}>
        <nav>
          <Link to="/">Rick and Morty</Link>
        </nav>
      </div>
    </header>
  );
};
