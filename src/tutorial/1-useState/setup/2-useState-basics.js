import React, { useState } from 'react';


const UseStateBasics = () => {
  const [text, setText] = useState('randooom')
  const handleClick = () => {
    if (text === 'randooom'){
      setText('hello world')
    } else {
      setText('randooom')
    }
  }
  
  return <>
  <h1>{text}</h1>
  <button className="btn" onClick={handleClick}>
    change Title
  </button>
  </>;
};

export default UseStateBasics;
