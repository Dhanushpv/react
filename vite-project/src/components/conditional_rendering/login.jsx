import { useState } from "react";

function Login(){

    const[isLoggedIn, setIsLoggedIn]= useState(false);
    let content;

    if(isLoggedIn){
        content = <h1>Login successful!</h1>
    }else{
        content = <h1>Please continue to login</h1>
    }

    return(
        <>
        {content}
        </>
    )

}
export default Login