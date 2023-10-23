import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <NavLink to="/">Speisekarte</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
        <NavLink to="/oeffnungszeiten"></NavLink>
        <NavLink to="/galerie"></NavLink>
      </nav>
    </header>
  );
};

export default Nav;
