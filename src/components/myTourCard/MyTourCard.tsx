import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import dayjs from "dayjs";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DeleteIcon from "@mui/icons-material/Delete";

import { removeTour } from "../../redux/slices/bookedToursSlice";
import "./MyTourCard.css";

interface MyTourCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  priceRange: string;
  numOfDays: number;
  startDate: string;
}

const MyTourCard = ({
  id,
  image,
  name,
  description,
  priceRange,
  numOfDays,
  startDate,
}: MyTourCardProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    dispatch(removeTour(id));
    setOpen(false);
  };

  const isWithinThreeDays = dayjs(startDate).diff(dayjs(), "day") <= 3;

  return (
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
        position: "relative",
      }}
      className='my-tour-card'
    >
      <div
        className='tour-card-img'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='tour-card-details'>
        <h3>{name}</h3>
        <p className='tour-description-short'>{description}</p>
        <div className='tour-card-icons'>
          <div className='tour-card-icon'>
            <PaidIcon /> ${priceRange}
          </div>
          <div className='tour-card-icon'>
            <AccessTimeFilledIcon /> {numOfDays} days
          </div>
        </div>
      </div>
      <div className='my-tour-card-buttons'>
        <IconButton color='error' onClick={() => setOpen(true)}>
          <DeleteIcon />
        </IconButton>
        <Button variant='contained' fullWidth>
          <Link to={`/tour/${id}`} className='navbar-link'>
            Details
          </Link>
        </Button>
        <Button variant='contained' fullWidth>
          <Link to={`/update-tour/${id}`} className='navbar-link'>
            Update
          </Link>
        </Button>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle
          sx={{
            color: "red",
          }}
        >
          Delete Tour
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isWithinThreeDays
              ? "You can’t delete this tour because there are only 3 days remaining until the beginning of this tour. "
              : "Are you sure you want to delete this tour?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            color='secondary'
            variant='outlined'
            sx={{
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
              },
            }}
          >
            Cancel
          </Button>
          {!isWithinThreeDays && (
            <Button onClick={handleDelete} color='error' variant='contained'>
              Delete
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MyTourCard;
