import { Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";
import Logo from "../assets/Logo";

const Navbar = () => {
  return (
    <>
      <nav className='nav'>
        <Link to={"/"}>
          <Logo />
        </Link>
        <ul className='nav-list'>
          <Link className='link' to={"/add-tour"}>
            <li>Add Tour</li>
          </Link>
          <Link className='link' to={"/book-tour"}>
            <li>Book Tour</li>
          </Link>
          <Link className='link' to={"/my-tours"}>
            <li>My Tours</li>
          </Link>
        </ul>
        <Link className='link' to={"/explore-tours"}>
          <Button>Explore Now</Button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
