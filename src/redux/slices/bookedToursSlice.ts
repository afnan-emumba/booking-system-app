import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Tour, BookedToursState } from "../interfaces";

const initialState: BookedToursState = {
  tours: [],
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
