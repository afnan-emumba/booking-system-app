import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import TourCard from "../tourCard/TourCard";
import TourNotFound from "../tourNotFound/TourNotFound";
import { tourDetails } from "../../utils/constants";
import "./Tours.css";

interface Tour {
  id: number;
  name: string;
  description: string;
  city: string;
  priceRange: string;
  numOfDays: number;
  coverImage: string;
  images: string[];
  included: {
    deptLocation: string;
    return: string;
    features: string[];
  };
  itinerary: {
    day: number;
    weather: number;
    schedule: string[];
  }[];
}

const Tours = () => {
  const location = useLocation();
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  const city = location.state?.city;

  useEffect(() => {
    if (location.state?.filteredTours) {
      setFilteredTours(location.state.filteredTours);
    } else {
      setFilteredTours(tourDetails);
    }
  }, [location.state]);

  return (
    <div className='tours-page'>
      {filteredTours.length > 0 ? (
        <>
          <h2>
            Top Destinations
            {filteredTours[0].city ? ` at "${filteredTours[0].city}"` : ""}
          </h2>
          <div className='tour-cards'>
            {filteredTours.map((tour) => (
              <Link
                key={tour.id}
                className='navbar-link'
                to={`/tour/${tour.id}`}
              >
                <TourCard
                  image={tour.coverImage}
                  name={tour.name}
                  description={tour.description}
                  priceRange={tour.priceRange}
                  numOfDays={tour.numOfDays}
                />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <TourNotFound city={city} />
      )}
    </div>
  );
};

export default Tours;
