import React from 'react';
import './App.css';
import { TEST } from './Props';
import { useState } from 'react';
import { Count } from './model/count';
import { idText, readBuilderProgram } from 'typescript';

function App() {
  const test:string = 'Hello, World!';
  const [state, setState] = useState(0); 

  const onstate = () => {
   setState(state + 1);
  console.log(state);
  setCount(true);
  const newLoopHello = [...loopHello];
  newLoopHello.push({id:state, hello:'Hello'});
  setLoopHello(newLoopHello);
  console.log (loopHello);  
}

　//条件文用
  const [count, setCount] = useState(false); 

  // ループ文用
  const [loopHello, setLoopHello] = useState<Count[]>([]); 

  return (
    <div className="App">
     <TEST text={test}/>
     <button onClick={onstate}>{state}</button>
     {/* 条件文 */}
    {/* {(() => {if(count === true){
      return <div>count UP!</div>
    }else{
      return null;
    }})()} */}
    {count && <div>count UP!</div>}

{/* ループ文 */}
{/* {(() => {
  const showLoopHello = [];
  for (let i =0; i< state; i++) {
  showLoopHello.push(<div key={i}>{loopHello[i].hello}</div>);
}
 return showLoopHello;
})()} */}
{loopHello.map((count:Count) => {
  return <div key={count.id}>{count.hello}</div>
  })}
</div>
  );
}

export default App;
