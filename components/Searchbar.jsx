import React from 'react'
// import countrydata from '../countrydata';
import Country from './country';


const Searchbar = ({setQuery}) => {
 
  return (
  
    <div className="searching-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" onChange={(e)=>{setQuery(e.target.value.toLowerCase())}} className="searching-input" placeholder="search a country..."/>
       
    </div>
  )
}

export default Searchbar