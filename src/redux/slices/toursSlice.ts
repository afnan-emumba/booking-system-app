import { createSlice } from "@reduxjs/toolkit";
import { tourDetails } from "../../utils/constants";

const toursSlice = createSlice({
  name: "tours",
  initialState: tourDetails,
  reducers: {},
});

export default toursSlice.reducer;
