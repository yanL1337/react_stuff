import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <header>
      <h1>MyLife</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
    </header>
  );
};

export default Nav;
