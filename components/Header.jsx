import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext';

const Header = () => {
  console.log("render");
  const [isDark,setIsDark]=useContext(ThemeContext);
  console.log("Header",isDark);
  console.log("Header",setIsDark);
  
  // console.log(isDark,setIsDark);
 

// if(isDark){
//   document.body.classList.add("dark");
// }
 

  return (
       <>
        <header className={isDark ? "dark" : ""}>
            <h1 className="title"><a href="#">Where in the world</a></h1>
            <p className="dark-mode-btn" onClick={()=>{
              setIsDark(!isDark);
              localStorage.setItem("darkMode", !isDark);
            }}><i className={`fa-regular  ${isDark ? "fa-moon" : "fa-sun"}`}></i>&nbsp; {`${isDark ? "Dark" : "Light"} Mode`}</p>
        </header> 

    </>
  )
}

export default Header