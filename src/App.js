import Keys from "./keypad";
import './App.css';
import { useState } from "react";


function App(){

  let [key, updateKey] = useState('')

  function handleClick(value){
updateKey(key + value)
  }

  function calculate(value){
   let output = eval(key);
   updateKey(output);
  }

  function handleClear(value){
    updateKey('');
  }

 
  return (
    
      <div className="container">
<h1> Calculator using REACT</h1>
<div className="calculator">
<input type="text" value={key} className="output"/>
<Keys handleClick={handleClick} handleClear={handleClear} calculate={calculate} ></Keys>


</div>

      </div>
    
  )
}

export default App;