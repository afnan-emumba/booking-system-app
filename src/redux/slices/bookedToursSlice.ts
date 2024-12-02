import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  paymentMethod: string;
}

interface Included {
  deptLocation: string;
  return: string;
  features: string[];
}

interface Itinerary {
  day: number;
  weather: number;
  schedule: string[];
}

interface Tour {
  id: number;
  name: string;
  description: string;
  city: string;
  priceRange: string;
  numOfDays: number;
  coverImage: string;
  images: string[];
  included: Included;
  itinerary: Itinerary[];
  user: User;
}

interface BookedToursState {
  tours: Tour[];
}

const initialState: BookedToursState = {
  tours: JSON.parse(localStorage.getItem("bookedTours") || "[]"),
};

const bookedToursSlice = createSlice({
  name: "bookedTours",
  initialState,
  reducers: {
    addTour: (state, action: PayloadAction<Tour>) => {
      const newId = state.tours.length
        ? state.tours[state.tours.length - 1].id + 1
        : 1;
      state.tours.push({ ...action.payload, id: newId });
      localStorage.setItem("bookedTours", JSON.stringify(state.tours));
    },
    removeTour: (state, action: PayloadAction<number>) => {
      state.tours = state.tours.filter((tour) => tour.id !== action.payload);
      localStorage.setItem("bookedTours", JSON.stringify(state.tours));
    },
    updateTour: (state, action: PayloadAction<Tour>) => {
      const index = state.tours.findIndex(
        (tour) => tour.id === action.payload.id
      );
      if (index !== -1) {
        state.tours[index] = action.payload;
        localStorage.setItem("bookedTours", JSON.stringify(state.tours));
      }
    },
  },
});

export const { addTour, removeTour, updateTour } = bookedToursSlice.actions;
export default bookedToursSlice.reducer;
