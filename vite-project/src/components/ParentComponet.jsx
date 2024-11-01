import {useState} from "react"
import DisplayComponent from "./Displyacomponet"
import FormComponet from "./FormComponent"



export default function ParentComponet(){
    const [dataToDisplay, setDataToDisplay]= useState("")

    const handleSubmit = (data) =>{
       
        setDataToDisplay(data)
    }
    return(
        <>
            <h1>REV HUB</h1>
            <DisplayComponent dataDisplay={dataToDisplay}/>
            <FormComponet onSubmit={handleSubmit}/>



        </>
    )
}