import React from 'react';
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from  "@material-ui/icons/Search";
import WatchIcon from  "@material-ui/icons/WatchLater";
import CropOriginalIcon from  "@material-ui/icons/CropOriginal";
import MovieIcon from  "@material-ui/icons/Movie";
import CropOriginalSharpIcon from  "@material-ui/icons/CropOriginalSharp";
import {Avatar} from "@material-ui/core";
import {selectusername,selectuserphoto,SetuserLogin,SetuserSignOut} from "../feautres/user/userSlice";
import { useDispatch,useSelector } from 'react-redux';
import {auth,provider} from "../firebase";
import {useEffect} from "react";
import {useNavigate } from "react-router-dom"

function Header() {
  const userName =useSelector(selectusername);
  const userPhoto =useSelector(selectuserphoto);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  useEffect(()=>{
    auth.onAuthStateChanged(async (user)=>{
      if(user){
        dispatch(SetuserLogin({
          name:user.displayName,
          email:user.email,
          photo:user.photoURL,
        }))
        navigate("/");
      }
    })
  },[])

  const SignIn = () =>{
    auth.signInWithPopup(provider).
    then((result)=>{
      let user= result.user;
      dispatch(SetuserLogin({
        name:user.displayName,
        email:user.email,
        photo:user.photoURL,
      }))
      navigate("/")
    })
  }

  const SignOut=()=>{
    auth.signOut().
    then(()=>{
      dispatch(SetuserSignOut());
      navigate("/Login")
    })
  }

  return (
        <nav className='header'>
        <img
            src='https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg'
            alt='logo'
        /> 
        {
          !userName ? 
          (
            <div className="login_cantainer">
            <div className='login_logo' onClick={SignIn}>login</div>
            </div>
            ):

          <>
          <div className="header_menu">
            <ul>
            <li><a>
              <HomeIcon/>
                <span>Home</span>
            </a></li>
            <li><a>
              <SearchIcon/>
                <span>Search</span>
            </a></li>
            <li><a>
              <WatchIcon/>
                <span>WatchLater</span>
            </a></li>
            <li><a>
              <CropOriginalIcon/>
                <span>Originals</span>
            </a></li>
            <li> <a>
              <MovieIcon/>
                <span>Movies</span>
            </a></li>
            <li><a>
              <CropOriginalSharpIcon/>
                <span>Series</span>
            </a></li>
            </ul>
        </div>
        <div className="SignOut_cantainer">
        <Avatar src={userPhoto?.photoURL} className='dp' onClick={SignOut}/>
        <div className="username">
        <h5 className='Avatar' onClick={SignOut}>Sign Out</h5>
        </div>
        </div>
        
          </>
        }
        
        </nav>
    )
}

export default Header;
