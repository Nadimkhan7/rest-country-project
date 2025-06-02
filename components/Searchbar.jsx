import React from 'react'




const Searchbar = ({setQuery}) => {
 
  return (
  
    <div className="searching-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" onChange={(e)=>{setQuery(e.target.value.toLowerCase())}} className="searching-input" placeholder="search a country..."/>
       
    </div>
  )
}

export default Searchbar