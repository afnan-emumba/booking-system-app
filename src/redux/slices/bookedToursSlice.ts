import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Tour, BookedToursState } from "../interfaces";

const initialState: BookedToursState = {
  tours: JSON.parse(localStorage.getItem("bookedTours") || "[]"),
};

const bookedToursSlice = createSlice({
  name: "bookedTours",
  initialState,
  reducers: {
    addTour: (state, action: PayloadAction<Tour>) => {
      state.tours.push(action.payload);
      localStorage.setItem("bookedTours", JSON.stringify(state.tours));
    },
    removeTour: (state, action: PayloadAction<number>) => {
      state.tours = state.tours.filter((tour) => tour.id !== action.payload);
      localStorage.setItem("bookedTours", JSON.stringify(state.tours));
    },
  },
});

export const { addTour, removeTour } = bookedToursSlice.actions;
export default bookedToursSlice.reducer;
