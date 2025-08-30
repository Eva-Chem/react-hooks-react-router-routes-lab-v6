import { NavLink } from "react-router-dom";
import "./NavBar.css"; // use the existing CSS

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  );
}

export default Navbar;
