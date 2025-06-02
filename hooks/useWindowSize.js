import { useState,useEffect } from "react"

 export function  getWindowSize(){
   
   const [width,setWidth]=useState({width:window.innerWidth,height:window.innerHeight})
      


useEffect(()=>{
  window.addEventListener("resize",()=>{
    setWidth({width:window.innerWidth,height:innerHeight})
    console.log("hi");
  })
},[])
  
  return width

 }