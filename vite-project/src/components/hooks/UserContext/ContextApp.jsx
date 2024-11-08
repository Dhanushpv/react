import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import {createContext} from 'react';


const MyContext = createContext ('default');

function UseContextApp(){
    return (
        <>
        
        <MyContext.Provider value = "Hello">

            <ComponentA/>
            <ComponentB/>
        </MyContext.Provider>
        
        </>

    )
}

export {MyContext};
export default UseContextApp;