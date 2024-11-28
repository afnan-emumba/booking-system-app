import TourCard from "./TourCard";
import tourDetails from "../tourDetails";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import TourNotFound from "./TourNotFound";
import { useEffect, useState } from "react";

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
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);

  useEffect(() => {
    const tours = city
      ? tourDetails.filter(
          (tour) => tour.city.toLowerCase() === city.toLowerCase()
        )
      : tourDetails;
    setFilteredTours(tours);
  }, [city]);

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
