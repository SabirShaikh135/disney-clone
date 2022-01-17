import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Details from "./component/Details";
import Login from "./component/Login";
const App=()=>{
   return(
        <div className="app">
        <Router>
        <Header/>
           <Routes>
              
           <Route path="/login" element={
               <Login/>
              }>
              
              </Route>

              <Route path="/details/:id" element={
               <Details/>
              }>
              
              </Route>

              <Route path="/" element={
                  <Home/>
               }>
              
              </Route>
           </Routes>
        </Router>
        
       
        </div>
         )
}

export default App;