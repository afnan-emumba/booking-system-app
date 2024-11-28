import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import NoData from "../assets/images/no-data.png";

interface TourNotFoundProps {
  city?: string;
}

const TourNotFound = (props: TourNotFoundProps) => {
  return (
    <div className='tour-not-found'>
      <img src={NoData} alt='No Data' />
      <p>Sorry, we couldn't find any tour at "{props.city}" right now</p>
      <Link to={"/explore-tours"}>
        <Button variant='contained'>Back to Explore</Button>
      </Link>
    </div>
  );
};

export default TourNotFound;
