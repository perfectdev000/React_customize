import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function HookEffect() {

  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count} times`;
  });
  
  return (
    <div style={{justifyContent:'center', alignItems:'center', display:'flex',}}>
      <div>
        <div><p>You clicked {count} times</p></div>
        <div><button onClick={() => setCount(count + 1)}>++1</button></div>
        <div><button onClick={() => setCount(0)}>Reset</button></div>
        <div><button onClick={() => setCount(0)}>Reset</button></div>
        <div><Link to='/home'>Go Home</Link></div>
      </div>
    </div>
  );
}