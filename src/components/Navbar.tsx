import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/Logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className='navbar'>
        <Link to={"/"}>
          <Logo />
        </Link>
        <div className='navbar-toggle'>
          <IconButton onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <ul
          className={`navbar-menu navbar-list ${menuOpen ? "active" : ""}`}
          style={{ listStyle: "none" }}
        >
          <Link className='navbar-link' to={"/add-tour"} onClick={toggleMenu}>
            <li>Add Tour</li>
          </Link>
          <Link className='navbar-link' to={"/book-tour"} onClick={toggleMenu}>
            <li>Book Tour</li>
          </Link>
          <Link className='navbar-link' to={"/my-tours"} onClick={toggleMenu}>
            <li>My Tours</li>
          </Link>
        </ul>
        <Link
          className='navbar-link'
          to={"/explore-tours"}
          onClick={toggleMenu}
        >
          <Button variant='contained'>Explore Now</Button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
