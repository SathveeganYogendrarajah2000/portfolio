import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navContainer">
      <div className="navContainer_logo">
        <NavLink to="/">
          <img src="#" alt="Logo" />
        </NavLink>
      </div>
      <div className="navContainer_links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
