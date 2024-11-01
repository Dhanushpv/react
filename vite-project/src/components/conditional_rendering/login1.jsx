import React from "react";
import { useState } from "react";

function login1(){

    const[isLoggedIn, setIsLoggedIn]=useState(true);

    return(
        <>
        {isLoggedIn ? (<h1>login successful</h1>) : (<h1> please continue to login </h1>)}
        </>
    )
}
export default login1