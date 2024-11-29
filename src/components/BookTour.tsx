import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
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

import tourDetails from "../tourDetails";
import ErrorPage from "./ErrorPage";
import BookTourImage from "../assets/images/book-tour.jpg";

import { addTour } from "../features/bookedTours/bookedToursSlice";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z\s-]+$/,
      "Only alphabets, spaces, and hyphens are allowed"
    )
    .max(50, "Maximum 50 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),
  adults: yup
    .number()
    .min(1, "At least 1 adult is required")
    .max(9, "Maximum 9 adults")
    .required("Number of adults is required"),
  children: yup.number().min(0).max(9).notRequired(),
  paymentMethod: yup
    .string()
    .oneOf(["Visa", "MasterCard"])
    .required("Payment method is required"),
});

const BookTour = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const tour = tourDetails.find((tour) => tour.id === parseInt(id || "0"));

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
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
    <div className='book-tour-page' style={{ display: "flex", gap: "2rem" }}>
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
