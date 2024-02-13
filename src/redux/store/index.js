import { configureStore } from "@reduxjs/toolkit";
import multimediaReducer from "@/redux/reducers/multimedia";
export default configureStore({
  reducer: {
    multimedia: multimediaReducer,
  },
});
