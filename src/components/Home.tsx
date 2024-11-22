import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeImage1 from "../assets/images/home-pic-1.jpg";
import HomeImage2 from "../assets/images/home-pic-2.jpg";
import HomeImage3 from "../assets/images/home-pic-3.jpg";

const Home = () => {
  return (
    <div className='homepage'>
      <div className='homepage-text'>
        <h1>
          <span className='underline'>Explore</span> The New World With Tourbay
        </h1>
        <p>
          No matter where in the world you want to go, we can help get you there
          and make your tour a stupendous memory.
        </p>
        <div>
          <Button variant='contained'>
            <Link className='navbar-link' to={"/explore-tours"}>
              Explore Now
            </Link>
          </Button>
        </div>
      </div>
      <div className='homepage-images'>
        <div className='background' />
        <div className='image-grid'>
          <img src={HomeImage1} alt='Destination 1' />
          <img src={HomeImage2} alt='Destination 2' />
          <img src={HomeImage3} alt='Destination 3' />
        </div>
      </div>
    </div>
  );
};

export default Home;
