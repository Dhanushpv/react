import { useState,useEffect } from "react";

function UseCallbackComponet(){

    const [count, setCount]=useState(0);

    const increment = () =>
        setCount((prevCount) =>prevCount+1)

    useEffect(()=>{
        console.log("incrementing")
    },
    [increment]
       
    )

    return(
        <>
                <h1>count : </h1>
                <button onClickCapture={increment}>Increment</button>
        </>
    )
}

export  default UseCallbackComponet