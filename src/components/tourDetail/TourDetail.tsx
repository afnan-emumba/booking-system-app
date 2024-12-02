import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PlaceIcon from "@mui/icons-material/Place";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { tourDetails } from "../../utils/constants";
import ErrorPage from "../errorPage/ErrorPage";
import "./TourDetail.css";

const TourDetail = () => {
  const { id } = useParams();

  const tour = tourDetails.find((tour) => tour.id === parseInt(id || "0"));

  if (!tour) {
    return <ErrorPage />;
  }

  return (
    <div className='tour-details-page'>
      <h2>{tour.name}</h2>
      <div className='tour-details-icons'>
        <div className='tour-card-icon'>
          <PlaceIcon /> {tour.city}
        </div>
        <div className='tour-card-icon'>
          <PaidIcon /> ${tour.priceRange}
        </div>
        <div className='tour-card-icon'>
          <AccessTimeFilledIcon /> {tour.numOfDays} Days
        </div>
      </div>
      <div className='tour-details-images'>
        <div className='tour-details-img-lg'>
          <img src={tour.coverImage} alt={tour.name} />
        </div>
        <div className='tour-details-img-grid'>
          <img
            src={tour.coverImage}
            alt={tour.name}
            className='tour-details-img-sm'
          />
          <img
            src={tour.coverImage}
            alt={tour.name}
            className='tour-details-img-sm'
          />
          <img
            src={tour.coverImage}
            alt={tour.name}
            className='tour-details-img-sm'
          />
          <img
            src={tour.coverImage}
            alt={tour.name}
            className='tour-details-img-sm'
          />
        </div>
      </div>
      <p className='tour-details-desc'>{tour.description}</p>
      <h2>What's Included</h2>
      <div className='tour-details-included'>
        <table>
          <tbody>
            <tr>
              <th>Destination</th>
              <td>{tour.city}</td>
            </tr>
            <tr>
              <th>Departure Location</th>
              <td>{tour.included.deptLocation}</td>
            </tr>
            <tr>
              <th>Return</th>
              <td>
                {tour.included.return} on Day {tour.numOfDays}
              </td>
            </tr>
            <tr>
              <th>Features</th>
              <td>
                <ul>
                  {tour.included.features.map((feature, index) => (
                    <li key={index}>
                      <CheckCircleIcon className='check-icon' /> {feature}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Itinerary Schedule</h2>
      <div className='tour-details-itinerary'>
        {tour.itinerary.map((day, index) => (
          <div key={index} className='itinerary-card'>
            <div className='itinerary-card-header'>
              <h3>Day {day.day}</h3>
              <span>{day.weather}°C</span>
            </div>
            <ul>
              {day.schedule.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* <div className='book-tour-btn-container'> */}
      <Link to={`/book-tour/${id}`} className='book-tour-link'>
        <Button variant='contained' className='book-tour-btn'>
          Book Now
        </Button>
      </Link>
      {/* </div> */}
    </div>
  );
};

export default TourDetail;
