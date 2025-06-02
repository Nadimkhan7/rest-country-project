
import Header  from "./components/Header";
import "./App.css";
import { Outlet } from "react-router";
import Shimmercountrylist from "./components/Shimmercountrylist";
import { useState } from "react";
import {  ThemeProvider } from "./Context/ThemeContext.jsx";


const App=()=>{

   

  
      console.log("App render");

  
    return(
       
      <ThemeProvider>
        <Header />
      
        <Outlet/> 

      </ThemeProvider>
        

      
    )
}


export default App;