import React from 'react'

export default function Fruits2(props) {
  return (
    <div>
            <p>Price: {props.fruit.price}</p>
            <p>Quantity: {props.fruit.quantity}</p>
    </div>
  )
}
