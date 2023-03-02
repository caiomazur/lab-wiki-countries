import { NavLink } from 'react-router-dom'; // <== IMPORT

function Header() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink to="/"> Home </NavLink> {/* <== ADD */}
      </ul>
    </nav>
  );
}

export default Header;
