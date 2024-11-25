import { Box } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Link } from "react-router-dom";

interface TourCardProps {
  image: string;
  name: string;
  description: string;
  priceRange: number[];
  numOfDays: number;
}

const TourCard = ({
  image,
  name,
  description,
  priceRange,
  numOfDays,
}: TourCardProps) => {
  return (
    <Link className='navbar-link' to={"/"} target='_blank'>
      <Box
        sx={{
          width: "auto",
          height: "380px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          overflow: "hidden",
        }}
        className='tour-card'
      >
        <div
          className='tour-card-img'
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className='tour-card-details'>
          <h3>{name}</h3>
          <p>{description}</p>
          <div className='tour-card-icons'>
            <div className='tour-card-icon'>
              <PaidIcon /> ${priceRange[0]} - ${priceRange[1]}
            </div>
            <div className='tour-card-icon'>
              <AccessTimeFilledIcon /> {numOfDays} days
            </div>
          </div>
        </div>
      </Box>
    </Link>
  );
};

export default TourCard;
