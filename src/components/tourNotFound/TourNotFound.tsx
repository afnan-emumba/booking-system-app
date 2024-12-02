import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import NoData from "../../assets/images/no-data.png";

interface TourNotFoundProps {
  city?: string;
}

const TourNotFound = (props: TourNotFoundProps) => {
  return (
    <div className='tour-not-found'>
      <img src={NoData} alt='No Data' />
      <p>
        {props.city
          ? `Sorry, we couldn't find any tour at "${props.city}" right now`
          : "Sorry, we couldn't find any tour"}
      </p>
      <Link to={"/explore-tours"}>
        <Button variant='contained'>Explore Tours</Button>
      </Link>
    </div>
  );
};

export default TourNotFound;
