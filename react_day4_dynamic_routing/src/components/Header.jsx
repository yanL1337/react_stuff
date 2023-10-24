import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
      </nav>
    </header>
  );
};

export default Header;
