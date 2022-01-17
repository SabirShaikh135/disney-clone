import React from 'react';
import "./Viewer.css";

function Viewer() {
    return (
        <div className='viewer'>
            <div className="viewer_wrap">
                <img src='./images/viewers-disney.png'
                 alt='image'/>
                 <video autoPlay={true} loop={true} playsInline={true}>
                  <source src="./videos/1564674844-disney.mp4" type="video/mp4" />
                 </video>
            </div>
            <div className="viewer_wrap">
                 <img src='./images/viewers-pixar.png'
                 alt='image'/>
                 <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
            </div>
            <div className="viewer_wrap">
                <img src='./images/viewers-marvel.png'
                 alt='image'/>
                  <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
            </div>
            <div className="viewer_wrap">
                 <img src='./images/viewers-starwars.png'
                 alt='image'/>
                 <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
            </div>
            <div className="viewer_wrap">
                 <img src='./images/viewers-national.png'
                 alt='image'/>
                 <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
            </div>
        </div>
    )
}

export default Viewer
