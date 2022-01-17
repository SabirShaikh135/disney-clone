import {createSlice} from "@reduxjs/toolkit";
const initialState ={
    movies:[]
}

const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        SetMovies:(state,action)=>{
            state.movies=action.payload;
        }
    }
})

export const {SetMovies} = movieSlice.actions;
export const selectMovies = (state)=>state.movie.movies;
export default movieSlice.reducer;