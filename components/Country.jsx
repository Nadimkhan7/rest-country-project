import React from 'react'
import { Link } from 'react-router';

const Country=({countryName,population,capital,reigon,link,data})=> {

   const formatPopulation = population.toLocaleString();
   

  return (
    
   
        <Link className="country-card" to={`/${countryName}`} state={data}>
            <img src={link} alt={countryName + " flag"} />
            <div className="card-text">
                <h4 className="card-title">{countryName}</h4>
                <p><b>Population: </b>{formatPopulation}</p>
                <p><b>Reigon: </b>{reigon}</p>
                <p><b>Capital: </b>{capital}</p>
            </div>
        </Link> 
  )
}

export default Country;

