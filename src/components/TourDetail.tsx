// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import tourDetails from "../tourDetails";
import ErrorPage from "./ErrorPage";

const TourDetail = () => {
  const { id } = useParams();

  const tour = tourDetails.find((tour) => tour.id === parseInt(id || "0"));

  if (!tour) {
    return <ErrorPage />;
  }

  return (
    <div className='tour-details-page'>
      <h2>{tour.name}</h2>
      <img src={tour.image} alt={tour.name} />
      <p>{tour.description}</p>
      <p>
        Price Range: ${tour.priceRange[0]} - ${tour.priceRange[1]}
      </p>
      <p>Number of Days: {tour.numOfDays}</p>
    </div>
  );
};

export default TourDetail;
