import React, { useState,useEffect } from 'react'

const Effect = () => {
    const[count,setCount]=useState(0);
    const Inc=()=>{
        setCount(count+1);
    }

//   useEffect(()=>{
//     return ()=>{  
//         setTimeout(()=>{
            
//         },5000)
//     }
//   },[count])

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    console.log("clear")
  },[count]);

  return (
    <>
    <h1>{count}</h1>
    <button onClick={Inc}>Increment</button>
   
    </>
  )
}

export default Effect