import { useState } from "react";

function ConditinalRendering(){
    const[loggedIn, setLoggedIn]= useState(1);

    // if(loggedIn){
    //     return(
    //         <>
    //         <h3>hello system</h3>
    //         </>
    //     )
    // }else{
    //     return(
    //         <>
    //         <h3 style={{ color: "red"}}>error page</h3>
    //         </>
    //     )
    // }


    return(
        <>
        {loggedIn==1? <h3 style={{ color: "blue"}}>hello use 1 system</h3> :loggedIn==2? <h3 style={{ color: "red"}}>error page</h3>: <h3>hello 3</h3>}
        </>
    )
}
export default ConditinalRendering;