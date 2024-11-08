import { useState } from "react";

import {  } from "react";

const users = [
    {
        id : 1,
        name : "joe",
        role : "Admin"
    },
    {
        id : 2,
        name : "jack",
        role : "User"
    },
    {
        id : 3,
        name : "bob",
        role : "User"
    },
    {
        id : 4,
        name : "alice",
        role : "Admin"
    },
    {
        id : 5,
        name : "jane",
        role : "User"
    },
    {
        id : 6,
        name : "charlie",
        role : "Admin"
    },
]

function Userlist (){

    console.log("componet rendring.....")
    return (
        <>
        <h1>UserList</h1>
        </>
    )
}
export default Userlist