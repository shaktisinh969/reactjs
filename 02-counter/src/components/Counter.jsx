import { useState } from "react";

const Counter = ()=>{

let [count,setcount]=useState(0)
const inccrement=()=>{
setcount(count+1)
}
const decrement=()=>{           
setcount(count-1)
}
const reset=()=>{
  setcount(count=0)
}

return(
<>

 <div className="sub-container">
    <h1>COUNTER</h1>
    <h2>{count}</h2>
    <button onClick={inccrement}>+</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decrement}>-</button>
    </div>
</>
)
}
export default Counter