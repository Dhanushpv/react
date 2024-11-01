export default function DisplayComponent({dataDisplay}){
    // console.log(" displyaaa.. .. ....")
    return(
        <>
            <h1>Name : {dataDisplay.name}</h1>
            <h1>Email : {dataDisplay.email}</h1>
        </>
    )
}