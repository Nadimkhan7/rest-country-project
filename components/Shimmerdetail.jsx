import React from 'react'
import './countrydetail.css';

function Shimmerdetail({data}) {
  console.log(data);
  return (
    <main>
        <section>
            <div className='parent back-button'></div>
            <div className='country-details'>
              <div className='image_flag'></div>
              <div className='detail-text'>
                <div className="country-name "></div>
                <div className='additional-details'>
                    <div className='section-1'>
                      {
                        Array.from({length:5}).map((eleme,index)=>{
                          return <div className='shimmer-text' key={index}></div>
                        })
                      }
                    </div>
                    <div className='section-2'>
                       {
                        Array.from({length:4}).map((eleme,index)=>{
                          return <div className='shimmer-text' key={index}></div>
                        })
                      }
                    </div>

                </div>

              </div>
              




            </div>
        </section>
    </main>
  )
}

export default Shimmerdetail;