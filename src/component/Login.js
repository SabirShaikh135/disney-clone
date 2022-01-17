import React from 'react';
import "./Login.css";

function Login() {
    return (
        <div className='login'>
            <div className="login_bacground">
                <img src='./images/login-background.jpg'
                />
            </div>
            <div className="login_content">
                <img src="./images/cta-logo-one.svg" alt="logo" />
                <button className='login_content_a'>Get all there</button>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint distinctio illo praesentium adipisci maxime reprehenderit deserunt ipsam consequuntur repudiandae. Eligendi magni explicabo suscipit animi impedit iste, laborum blanditiis consequuntur quos!</p>
                <img src="./images/cta-logo-two.png" alt="logo" />
            </div> 
            

        </div>
    )
}

export default Login
