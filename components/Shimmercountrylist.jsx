import React from 'react'
import  './Shimmer.css'; // Assuming you have a CSS module for styles

function Shimmercountrylist() {








  return (
    <div className="countries_container">
       {
         Array.from({length:10}).map((element,index)=>{
            return (<div key={index} className="shimmercard">
               <div className="flag"></div>
               <div className="styles.details-text-container">
                 <h1 className="title"></h1>
                 <div className=''>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  
                  
                  
                  </div>




            </div>
            </div>
            )
         })
       }
          
    </div>
    

    
  )
}

export default Shimmercountrylist;