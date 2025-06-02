import React, {useEffect } from 'react'
import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import Countrycontainer from "./Countrycontainer";
import { useState } from "react";
// import { ThemeContext } from '../Context/ThemeContext';
// import { getWindowSize } from '../hooks/useWindowSize.js';
import { usetheme } from '../hooks/usetheme';


function Home() {
         const [query,setQuery]=useState("");
         const [reigon,setReigon]=useState("");
         const [isDark]=usetheme();
        //  const width=getWindowSize()
        //  console.log(width);
      

  return (
     <main  className={isDark ? "dark" : ""}>
    
                  <div className="search-filter-container">
     
                      < Searchbar setQuery={setQuery} />
                      < Filter  setReigon={setReigon} />
                  </div>
             
                  <Countrycontainer query={query} reigon={reigon}/>
     </main>
  )
}

export default Home;