import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  Box,
} from "@mui/material";

import { tourDetails } from "../../utils/constants";
import ErrorPage from "../errorPage/ErrorPage";
import BookTourImage from "../../assets/images/book-tour.jpg";

import { addTour } from "../../redux/slices/bookedToursSlice";
import { bookingSchema } from "../../utils/validation";

const BookTour = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const tour = tourDetails.find((tour) => tour.id === parseInt(id || "0"));

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(bookingSchema),
    mode: "onChange",
  });

  const dispatch = useDispatch();

  if (!tour) {
    return <ErrorPage />;
  }

  const onSubmit = (data: any) => {
    if (tour) {
      const bookingData = {
        ...tour,
      };
      dispatch(addTour(bookingData));
      navigate("/my-tours");
    }
    console.log(data);
  };

  return (
    <div className='book-tour-page' style={{ display: "flex", gap: "4rem" }}>
      <form
        className='book-tour-form'
        style={{ flex: 1 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='book-tour-header'>
          <h2>Confirm Your Booking</h2>
          <p>for {tour.name}</p>
        </div>
        <Box>
          <FormLabel>Name</FormLabel>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant='outlined'
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        </Box>
        <Box>
          <FormLabel>Email</FormLabel>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant='outlined'
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </Box>
        <Box>
          <FormLabel>Phone</FormLabel>
          <Controller
            name='phone'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant='outlined'
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            )}
          />
        </Box>
        <Box style={{ display: "flex", gap: "1rem" }}>
          <Box style={{ flex: 1 }}>
            <FormLabel>Number of adults</FormLabel>
            <Controller
              name='adults'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type='number'
                  variant='outlined'
                  fullWidth
                  error={!!errors.adults}
                  helperText={errors.adults?.message}
                />
              )}
            />
          </Box>
          <Box style={{ flex: 1 }}>
            <FormLabel>Number of children</FormLabel>
            <Controller
              name='children'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type='number'
                  variant='outlined'
                  fullWidth
                  error={!!errors.children}
                  helperText={errors.children?.message}
                />
              )}
            />
          </Box>
        </Box>
        <Box>
          <FormLabel>Payment method</FormLabel>
          <FormControl fullWidth>
            <Controller
              name='paymentMethod'
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  variant='outlined'
                  error={!!errors.paymentMethod}
                >
                  <MenuItem value='Visa'>Visa</MenuItem>
                  <MenuItem value='MasterCard'>MasterCard</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </Box>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          disabled={!isValid}
        >
          Confirm
        </Button>
      </form>
      <div className='book-tour-img'>
        <img src={BookTourImage} alt='Book Tour' />
      </div>
    </div>
  );
};

export default BookTour;
