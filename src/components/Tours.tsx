import TourCard from "./TourCard";
import tourDetails from "../tourDetails";
import { Link } from "react-router-dom";

const Tours = () => {
  return (
    <div className='tours-page'>
      <h2>Top Destinations at “Miami”</h2>
      <div className='tour-cards'>
        {tourDetails.map((tour) => (
          <>
            <Link
              className='navbar-link'
              to={`/tour/${tour.id}`}
              target='_blank'
            >
              <TourCard
                key={tour.id}
                image={tour.coverImage}
                name={tour.name}
                description={tour.description}
                priceRange={tour.priceRange}
                numOfDays={tour.numOfDays}
              />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Tours;
