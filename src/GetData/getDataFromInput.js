
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { Component, useState } from 'react';

function GetDataFromInputBox() {
    const [data, setdata] = useState(null);
    const [value, setValue] = useState(false);

    function GetDataOnChnge(val) {
        console.warn();
        setdata(val.target.value);
    }
    return (
        <>
            <h5>Get Data From Input Box Component</h5>
            {
                value?
                    <p>{data}</p>
                    :null
            }
            <span className="p-float-label">
                <InputText id="username" onChange={GetDataOnChnge} />
                <label htmlFor="username">Username</label>
            </span>
            <Button onClick={() => setValue(true)}>print data</Button>
        </>
    )
}

export default GetDataFromInputBox;