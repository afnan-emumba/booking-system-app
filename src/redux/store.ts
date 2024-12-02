import { configureStore } from "@reduxjs/toolkit";
import bookedToursReducer from "./slices/bookedToursSlice";
import toursReducer from "./slices/toursSlice";

export const store = configureStore({
  reducer: {
    bookedTours: bookedToursReducer,
    tours: toursReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
