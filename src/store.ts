import { configureStore } from '@reduxjs/toolkit';
import bookedToursReducer from './features/bookedTours/bookedToursSlice';
import toursReducer from './features/tours/toursSlice';

export const store = configureStore({
  reducer: {
    bookedTours: bookedToursReducer,
    tours: toursReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
