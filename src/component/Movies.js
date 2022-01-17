import React from 'react';
import "./Movies.css";
import { selectMovies } from '../feautres/movie/movieSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Movies() {
const moives =useSelector(selectMovies);
console.log("moives",moives);
    return (
        <div className='movies'>
            <h4>Recommended For You</h4>
            <div className="movies_content">
            { moives && moives.map((movie)=>{
                return(
                <div className="movies_wrap" key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                <img src={movie?.data.cardImg}/>
                </Link>
               </div>
                )
                })
            }

            </div>
        </div>
    )
}

export default Movies
