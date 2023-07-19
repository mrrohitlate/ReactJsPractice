import { Button } from "primereact/button"
import React from "react"

function HideShowToggle(){
    const[status,setstatus]= React.useState(false)
    return(
        <>
        {
            status? <Button>hello React</Button> :null
        }

        <button type="text" onClick={()=>setstatus(!status)}>toggle button</button>
        
        </>
    )
}

export default HideShowToggle;