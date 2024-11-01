// import {useState} from "react"

// export default function FormComponet({onSubmit}){

//     const[inputData ,setInputData]=useState({
//         name :'',
//         email :'',
//     });

//     const handlerInputChange = (e)=>{

//             if(e.target.name === "name"){
//                 console.log("name",e.target.value)
//                 setInputData({
//                     ...inputData,
//                     name :e.target.value,
//                 })

//             }

//             if(e.target.name === "email"){
//                 console.log("email",e.target.value)

//                 setInputData({
//                     ...inputData,
//                     email :e.target.value,
//                 })

//             }
//         console.log("value : ", e.target.value)
//         setInputData(e.target.value)

//     }

//     const handleSubmit = (e) =>{
//         e.preventDefault()
//         console.log("submit btn... ....  . .")
//          onSubmit(inputData)
//     }
   
//     return(
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="name"  name="name" onChange={handlerInputChange}/>
//                 <input type="email" placeholder="Email" name="email" onChange={handlerInputChange}/>
//                 {/* <input type="text" placeholder="place" name="place" onChange={handlerInputChange}/>
//                 <input type="text" placeholder="pincode" name="pincode" onChange={handlerInputChange}/> */}
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     )
// }


import { useState } from "react";

export default function FormComponent({ onSubmit }) {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });

  const handlerInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={inputData.name}
          onChange={handlerInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={inputData.email}
          onChange={handlerInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
