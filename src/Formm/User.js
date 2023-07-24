import { Button } from "primereact/button";
import React from "react"
import Props from "../Props/Props";
function User(Props){
    return(
        <>
        <h3>hello User</h3>
        <Button onClick={Props.dataToChild}>Data Call Function</Button>
        </>
    )
}

export default User;