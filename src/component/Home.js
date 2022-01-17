import React from 'react';
import "./Home.css";
import ImgSlider from './ImgSlider';
import Viewer from "./Viewer";
import Movies from "./Movies";
import { useEffect } from 'react';
import db from '../firebase'; 
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SetMovies } from '../feautres/movie/movieSlice';

function Home() {
    const [datamovies,setDataMovies]= useState([]);
    const dispatch =useDispatch();
    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot)=>{
           const tempmovies = snapshot.docs.map((doc)=>{
               return{
                id:doc.id,
                data:doc.data(),
               }
           })
           dispatch(SetMovies(tempmovies));  
        }) 
       console.log("sssssssss",datamovies);
    },[])
    return (
        <div className='home'>
            <ImgSlider/>
             <Viewer/>
             <Movies/>

        </div>
    )
}

export default Home
