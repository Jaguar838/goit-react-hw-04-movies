import { NavLink } from 'react-router-dom';
import css from './Navigations.module.css';

export default function Navigations() {
  return (
    <nav className={css.nav}>
      <NavLink
        className={css.link}
        activeClassName={css.activeLink}
        to="/"
        exact
      >
        <span className={css.search}>Home</span>

      </NavLink>
      <NavLink
        className={css.link}
        activeClassName={css.activeLink}
        to="/movies"
      >
        <span className={css.search}>SearchMovie</span>
      </NavLink>
    </nav>
  );
}
