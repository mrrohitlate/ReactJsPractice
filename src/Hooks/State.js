
import { Button } from 'primereact/button';
import { useState } from 'react';

function State(){
    const  [demo,setDemo]=useState('State in react rohit')
    function UpdateData(){
        setDemo('Rohit');
    }

    return(
        <>
            <h1>{demo}</h1>
            <Button label='Click Button' onClick={UpdateData}></Button>
        </>
    )

}

export default State;