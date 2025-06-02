import React, { useEffect } from "react";
import Country from "./country";
import { useState } from "react";
import Shimmercountrylist from "./Shimmercountrylist";
import { useLocation } from "react-router";





const Countrycontainer=({query,reigon})=> {

   const [countrydata,setCountrydata]=useState([]);
   const Location=useLocation();
   console.log(location);

   useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").
    then((res)=> res.json())
    .then((data)=>{
         setCountrydata(data);
    })
   },[]);

 const  filteredCountry=countrydata.filter((country)=>{
     return (country.name.common.toLowerCase().includes(query))
 })

 


return filteredCountry.length==0 ? <Shimmercountrylist /> :(
  <>
 
  <div className="countries_container">{
           
          filteredCountry.filter((country)=>{
            return country.region.toLowerCase().includes(reigon.toLowerCase()) 
          }).map((cont,i) => (

      <Country countryName={cont.name.common}
         link={cont.flags.png}   
         key={i} 
         population={cont.population}
          capital={cont.capital?.[0]} 
          reigon={cont.region}
          data={cont}
    />
    
   ))}
     
  

</div>
</>
 )
};


export default Countrycontainer;

