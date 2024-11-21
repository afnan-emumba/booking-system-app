import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='homepage'>
      <div className='homepage-text'>
        <h1>Explore The New World With Tourbay</h1>
        <p>
          No matter where in the world you want to go, we can help get you there
          and make your tour a stupendous memory.
        </p>
        <div>
          <Button>
            <Link className='navbar-link' to={"/explore-tours"}>
              Explore Now
            </Link>
          </Button>
        </div>
      </div>
      <div className='homepage-img-container'></div>
    </div>
  );
};

export default Home;
