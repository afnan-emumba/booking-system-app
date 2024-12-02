import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import TourCard from "../tourCard/TourCard";
import { tourDetails } from "../../utils/constants";
import TourNotFound from "../tourNotFound/TourNotFound";
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
  const { city } = useParams();
  const location = useLocation();
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);

  useEffect(() => {
    if (location.state?.filteredTours) {
      setFilteredTours(location.state.filteredTours);
    } else {
      const tours = city
        ? tourDetails.filter(
            (tour) => tour.city.toLowerCase() === city.toLowerCase()
          )
        : tourDetails;
      setFilteredTours(tours);
    }
  }, [city, location.state]);

  return (
    <div className='tours-page'>
      <h2>Top Destinations{city ? ` at "${city}"` : ""}</h2>

      {filteredTours.length > 0 ? (
        <div className='tour-cards'>
          {filteredTours.map((tour) => (
            <Link key={tour.id} className='navbar-link' to={`/tour/${tour.id}`}>
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
      ) : (
        <TourNotFound city={city} />
      )}
    </div>
  );
};

export default Tours;
