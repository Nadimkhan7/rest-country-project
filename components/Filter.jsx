import React from 'react'

const Filter=({setReigon})=> {
 
  // console.log(setReigon);

  return (
     <select onChange={(e)=> setReigon(e.target.value)} className="filter-by-reigon">
            <option hidden>filter-by-reigon</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
     </select>
  )
}

export default Filter;