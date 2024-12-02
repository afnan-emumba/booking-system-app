import { useSelector } from "react-redux";
import MyTourCard from "../myTourCard/MyTourCard";
import TourNotFound from "../tourNotFound/TourNotFound";
import { RootState } from "../../redux/store";
import "./MyTours.css";

const MyTours = () => {
  const bookedTours = useSelector(
    (state: RootState) => state.bookedTours.tours
  );

  if (bookedTours.length === 0) {
    return <TourNotFound />;
  }

  return (
    <div className='my-tours-page'>
      <h2>My Tours</h2>
      <div className='tour-cards'>
        {bookedTours.map((tour) => (
          <MyTourCard
            key={tour.id}
            id={tour.id}
            image={tour.coverImage}
            name={tour.name}
            description={tour.description}
            priceRange={tour.priceRange}
            numOfDays={tour.numOfDays}
          />
        ))}
      </div>
    </div>
  );
};

export default MyTours;
