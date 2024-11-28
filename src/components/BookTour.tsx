import {
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  Box,
} from "@mui/material";
import BookTourImage from "../assets/images/book-tour.jpg";

const BookTour = () => {
  return (
    <div className='book-tour-page'>
      <div className='book-tour-form'>
        <h2>Confirm Your Booking</h2>
        <Box>
          <FormLabel>Name</FormLabel>
          <TextField variant='outlined' fullWidth />
        </Box>
        <Box>
          <FormLabel>Email</FormLabel>
          <TextField variant='outlined' fullWidth />
        </Box>
        <Box>
          <FormLabel>Phone</FormLabel>
          <TextField variant='outlined' fullWidth />
        </Box>
        <Box style={{ display: "flex", gap: "1rem" }}>
          <Box style={{ flex: 1 }}>
            <FormLabel>Number of adults</FormLabel>
            <TextField variant='outlined' fullWidth />
          </Box>
          <Box style={{ flex: 1 }}>
            <FormLabel>Number of children</FormLabel>
            <TextField variant='outlined' fullWidth />
          </Box>
        </Box>
        <Box>
          <FormLabel>Payment method</FormLabel>
          <FormControl fullWidth>
            <Select variant='outlined'>
              <MenuItem value='card'>Card</MenuItem>
              <MenuItem value='cash'>Cash</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant='contained' color='primary'>
          Confirm
        </Button>
      </div>
      <img src={BookTourImage} alt='Book Tour' className='book-tour-image' />
    </div>
  );
};

export default BookTour;
