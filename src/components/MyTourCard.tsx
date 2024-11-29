import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

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

import { removeTour } from "../features/bookedTours/bookedToursSlice";

interface MyTourCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  priceRange: string;
  numOfDays: number;
}

const MyTourCard = ({
  id,
  image,
  name,
  description,
  priceRange,
  numOfDays,
}: MyTourCardProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    dispatch(removeTour(id));
    setOpen(false);
  };

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
        <Button variant='contained' fullWidth>
          <Link to={`/tour/${id}`} className='navbar-link'>
            Details
          </Link>
        </Button>
        <IconButton color='error' onClick={() => setOpen(true)}>
          <DeleteIcon />
        </IconButton>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this tour?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            color='secondary'
            variant='contained'
          >
            Cancel
          </Button>
          <Button onClick={handleDelete} color='error' variant='contained'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MyTourCard;
