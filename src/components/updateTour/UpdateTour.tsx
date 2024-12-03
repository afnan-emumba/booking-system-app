import { useDispatch, useSelector } from "react-redux";
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

import ErrorPage from "../errorPage/ErrorPage";
import BookTourImage from "../../assets/images/book-tour.jpg";

import { updateTour } from "../../redux/slices/bookedToursSlice";
import { bookingSchema } from "../../utils/validation";
import "./UpdateTour.css";
import { RootState } from "../../redux/store";

const UpdateTour = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const bookedTours = useSelector(
    (state: RootState) => state.bookedTours.tours
  );
  const tour = bookedTours.find((tour) => tour.id === parseInt(id || "0"));

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(bookingSchema),
    mode: "onChange",
    defaultValues: {
      name: tour?.user.name || "",
      email: tour?.user.email || "",
      phone: tour?.user.phone || "",
      adults: tour?.user.adults || 0,
      children: tour?.user.children || 0,
      paymentMethod:
        tour?.user.paymentMethod === "Visa" ||
        tour?.user.paymentMethod === "MasterCard"
          ? tour.user.paymentMethod
          : "Visa",
    },
  });

  if (!tour) {
    return <ErrorPage />;
  }

  const onSubmit = (data: any) => {
    const updatedData = {
      ...tour,
      user: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        adults: data.adults,
        children: data.children,
        paymentMethod: data.paymentMethod,
      },
    };
    dispatch(updateTour(updatedData));
    navigate("/my-tours");
  };

  return (
    <div className='update-tour-page' style={{ display: "flex", gap: "4rem", height: "100vh", overflow: "hidden" }}>
      <form
        className='update-tour-form'
        style={{ flex: 1, overflow: "auto" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='update-tour-header'>
          <h2>Update Your Booking</h2>
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
          Update
        </Button>
      </form>
      <div className='update-tour-img' style={{ flex: 1, height: "100%" }}>
        <img src={BookTourImage} alt='Update Tour' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </div>
  );
};

export default UpdateTour;
