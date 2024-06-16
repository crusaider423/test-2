import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="favorit">Favorit</NavLink>
        </li>
        <li>
          <NavLink to="catalog">Catalog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
