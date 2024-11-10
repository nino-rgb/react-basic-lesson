import React from 'react';
import './App.css';
import { TEST } from './Props';
import { useState } from 'react';

function App() {
  const test:string = 'Hello, World!';
  const [state, setState] = useState(0); 

  const onstate = () => {
   setState(state + 1);
  console.log(state);
  }

  return (
    <div className="App">
     <TEST text={test}/>
     <button onClick={onstate}>{state}</button>
    </div>
  );
}

export default App;
