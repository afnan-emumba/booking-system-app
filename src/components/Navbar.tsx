import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Navbar here</h1>
      <Outlet />
    </nav>
  );
};

export default Navbar;
