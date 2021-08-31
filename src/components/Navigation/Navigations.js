import { NavLink } from 'react-router-dom';
// import { ImHome } from 'react-icons/im';
// import { IoSearchCircleSharp } from 'react-icons/io5';
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

        {/*   <ImHome /> */}
      </NavLink>
      <NavLink
        className={css.link}
        activeClassName={css.activeLink}
        to="/movies"
      >
        {/* <IoSearchCircleSharp size="25" /> */}
        <span className={css.search}>SearchMovie</span>
      </NavLink>
    </nav>
  );
}
