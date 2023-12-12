import React from 'react'
import Fruits2 from './Fruits2'
export default function Fruits(props) {
  const fruit = {
              price: "50",
                quantity: "2kg"
  }
  return (
    <div className="fruit">
            <h1>List of Fruits</h1>
            <p>Name: {props.fruits.name}</p>
            <p>Color: {props.fruits.color}</p>
            <Fruits2 fruit={fruit} />
            
        </div>
  )
}

