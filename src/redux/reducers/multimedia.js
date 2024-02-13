import { createSlice } from "@reduxjs/toolkit";
import multi from "@/data/sample.json";

const initialState = multi.entries;

const multimediaSlice = createSlice({
  name: "multimedia",
  initialState,
});

export default multimediaSlice.reducer;
