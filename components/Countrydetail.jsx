import React, { use, useEffect,useContext } from 'react'
import { useState } from 'react';
import { useOutletContext, useParams } from 'react-router';
import { Link } from 'react-router';
import Shimmerdetail from './Shimmerdetail';
import { useLocation } from 'react-router';
import { ThemeContext } from '../Context/ThemeContext';

function Countrydetail() {
  const param=useParams();
 let {state}=useLocation(); //for accepting state passed by compenent

 const [isDark,setIsDark]=useContext(ThemeContext);

  
  const countryName=param.countrydetail;

  const [countryData,setCountryData]=useState(null);
  const [nofound,Setnofound]=useState(false);

function updateCountryData(data){
    setCountryData({
        name:data.name?.common,
        nativeName:data.name?.nativeName && Object.values(data.name.nativeName).length > 0
    ? Object.values(data.name.nativeName)[0].common
    : data.name?.common,
        population:data.population.toLocaleString(),
        region:data.region,
        subregion:data.subregion,
        capital:data.capital?.join(","),
        domain:data.tld.join(" , "),
        currencies:data.currencies && Object.values(data.currencies)[0].name,
        languages:data.languages && Object.values(data.languages),
        flag:data.flags.svg

      });

      if(!data.borders){
           data.borders=[];
      }

    

  Promise.all(data.borders.map((border)=>{
      return  fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then(res=>res.json())
        .then(([borderCountry])=>{
          return borderCountry.name.common;
          
        })
       })).then((allBordersName)=>{
         setCountryData((prevData)=>{
            return {
              ...prevData,
              borders:allBordersName
            }
         }) 
       })
}



useEffect(() => {

  if(state){
      updateCountryData(state);
  }

  else{
  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Country not found");
      }
      return res.json();
    })
    .then(([data]) => {
      updateCountryData(data);
 
    })
    .catch((err) => {
      Setnofound(true);
      console.log("Catch error is running right now:", err.message);
    }) ;
  }
   },[countryName]);


  
 








  if(nofound){
    return <div className="error">Country not found ... you have entered wrong url</div>
  }

//  console.log("countryData",countryData);
 
  return countryData===null ?   < Shimmerdetail/> :

    (
    
        <main className={isDark ? "dark" : ""}>
       
             
        <section>
         <div className="parent">
           <button  className="back-btn" onClick={()=>window.history.back()}><i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back</button>
         </div>
         <div className="country-details">
       
            <img  src={countryData.flag} alt={` ${countryData.name} flag`}/>
            <div className="detail-text">
                <h1 className="country-name">{countryData.name}</h1>
                    <div className="additional-details">
                        <div className="section-1">
                            <p><b>Native Name: </b><span className="native-name">{countryData.nativeName}</span></p>
                            <p><b>Population: </b><span className="population">{countryData.population}</span></p>
                            <p><b>Reigon: </b><span className="reigon">{countryData.region}</span></p>
                            <p><b>Sub Reigon: </b><span className="sub-reigon">{countryData.subregion}</span></p>
                            <p><b>Capital: </b><span className="capital"></span>{countryData.capital}</p> 
                        </div>
                        <div className="section-2">
                            <p><b>Top Level Domain: </b><span className="domain">{countryData.domain}</span></p>
                            <p><b>Currencies: </b><span className="currency">{countryData.currencies}</span></p>
                            <p><b>Language: </b><span className="language">{countryData.languages.join(",")}</span></p>
                        </div>
                    </div>
                
                       { countryData?.borders && countryData.borders.length!==0 && ( <div className="border-countries">
                          <p className="border"><b>Border Countries:&nbsp;&nbsp;</b>
                          {countryData?.borders.map((border,index)=>{
                            return <Link key={index} to={`/${border}`}>{border}</Link>
                          })}
                        </p>
                 
                       </div>)
                          }
            </div>
        </div>


    </section>
    </main>
    
    )
  
}

export default Countrydetail;