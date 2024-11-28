import { createSlice } from "@reduxjs/toolkit";
import tourDetails from "../../tourDetails";

const toursSlice = createSlice({
  name: "tours",
  initialState: tourDetails,
  reducers: {},
});

export default toursSlice.reducer;
