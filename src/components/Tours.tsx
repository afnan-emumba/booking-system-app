import TourCard from "./TourCard";
import tourDetails from "../tourDetails";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import TourNotFound from "./TourNotFound";

const Tours = () => {
  const { city } = useParams();

  const filteredTours = city
    ? tourDetails.filter(
        (tour) => tour.city.toLowerCase() === city.toLowerCase()
      )
    : tourDetails;

  return (
    <div className='tours-page'>
      <h2>Top Destinations{city ? ` at "${city}"` : ""}</h2>

      {filteredTours.length > 0 ? (
        <div className='tour-cards'>
          {filteredTours.map((tour) => (
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
      ) : (
        <TourNotFound city={city} />
      )}
    </div>
  );
};

export default Tours;
