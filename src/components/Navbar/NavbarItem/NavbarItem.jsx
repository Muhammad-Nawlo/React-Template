import "./NavbarItem.css";
const NavbarItem = ({ href, content }) => {
  return (
    <li className="tmp__navbar_navbar-links-link">
      <a href={href}>{content}</a>
    </li>
  );
};

export default NavbarItem;
