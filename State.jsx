import React, {useState} from 'react'

const State = () => {
  const[text,setText]=useState(' ');
  const updateText = () => {
    setText('Text Updated!');
  };
  return (
    <>
    <div>
      <h1>{text}</h1>
      <button onClick={updateText}>Button1</button>
    </div>
    </>
  )
}

export default State