import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "../feautres/movie/movieSlice";
import userSlice from '../feautres/user/userSlice';
import userReducer from "../feautres/user/userSlice";
export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user:userSlice
  }, 
});