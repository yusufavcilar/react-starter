import React from "react";
import { useState } from "react";

function Counter(){
 const [counter,setCounter] = useState(0)

 const increase = () => {
    setCounter(counter+1)
 }
 const decrease = () => {
     setCounter(counter -1)
 }
 const reset = () => {
setCounter(0)
 }
return (
    <>
    <h1>Counter</h1>
    <div>{counter}</div>
    <button onClick={increase}>İncrease</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={reset}>Reset</button>
    </>
)
}

export default Counter;