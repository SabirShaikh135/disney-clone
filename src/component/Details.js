import React from 'react';
import "./Details.css";
import PlayIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import GroupAddIcon from '@material-ui/icons/Group';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import db from '../firebase';
import { useState } from 'react';

function Details() {
    const {id} = useParams();
    const [movie ,setMovie] =useState();
    console.log("id",movie);
    useEffect(()=>{
        db.collection("movies").doc(id).get().then((doc)=>{
            if(doc.exists){
            setMovie(doc.data());
            }
            else{

            }
        })
    },[])
    return (
        <div className='details'>
            <div className="details_bacground">
                <img src='./images/home-background.png'/>
            </div>
            <div className="details_bacground_title">
                <img src={movie?.cardImg} />
            </div>
            <div className="details_control">
              <button className="details_Play"><PlayIcon/><span>Play</span></button>
              <button className="details_trailer details_Play"><PlayIcon/><span>Trailer</span></button>
              <button className="details_addbutton"><AddIcon/></button>
              <button className="details_groupwatch"><GroupAddIcon/></button>
            </div>
            <div className="details_subtitle">{movie?.st}</div>
            <div className="details_description">
                {movie?.des}
            </div>
        </div>
    )
}

export default Details
