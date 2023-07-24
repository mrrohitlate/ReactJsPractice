import { Button } from "primereact/button";
import React, {useState} from "react";

function Counter(){
const [count, setCount]= useState(0);
return(
    <>< br/> <br />
    <Button onClick={()=>setCount(count+1)}>+</Button>
    <h1>{count}</h1>
    <Button onClick={()=>setCount(count-1)}>-</Button>
    </>
)

}

export default Counter;