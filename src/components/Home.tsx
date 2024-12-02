import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import HomeImage1 from "../assets/images/home-pic-1.jpg";
import HomeImage2 from "../assets/images/home-pic-2.jpg";
import HomeImage3 from "../assets/images/home-pic-3.jpg";
import LineBelowText from "../assets/images/line-below-text.svg";

const Home = () => {
  return (
    <div className='homepage'>
      <div className='homepage-text'>
        <h1>
          <span className='underline'>
            Explore
            <img src={LineBelowText} alt='underline' />
          </span>{" "}
          The New World
          <br />
          With Tourbay
        </h1>
        <p>
          No matter where in the world you want to go, we
          <br />
          can help get you there and make your tour a<br />
          stupendous memory.
        </p>
        <div>
          <Link className='navbar-link' to={"/explore-tours"}>
            <Button variant='contained'>Explore Now</Button>
          </Link>
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
