import NavbarItem from "./NavbarItem/NavbarItem";
import Container from "../../Layout/Container";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="tmp__navbar">
      <div className="container">
        <div>
          <a href="/" className="tmp__navbar_logo">
            Template
          </a>
        </div>
        <nav className="tmp__navbar_navbar-links">
          <ul>
            <NavbarItem href="#articles" content="Articles" />
            <NavbarItem href="#gallery" content="Gallery" />
            <NavbarItem href="#features" content="Features" />
            <NavbarItem href="#other-link" content="Other links" />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
