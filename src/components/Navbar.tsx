import { Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";
import Logo from "../assets/Logo";

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <Link to={"/"}>
          <Logo />
        </Link>
        <ul className='navbar-list'>
          <Link className='navbar-link' to={"/add-tour"}>
            <li>Add Tour</li>
          </Link>
          <Link className='navbar-link' to={"/book-tour"}>
            <li>Book Tour</li>
          </Link>
          <Link className='navbar-link' to={"/my-tours"}>
            <li>My Tours</li>
          </Link>
        </ul>
        <Link className='navbar-link' to={"/explore-tours"}>
          <Button>Explore Now</Button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
