import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

function Login() {
    const [useId, setuse] = useState("")
    const [passwo, setpass] = useState("")
    const [usererr, setusererr] = useState(false);
    const [passerr, setpasserr] = useState(false);
    function loginhanndele(e) {
        if(useId.length<3 || passwo.length<9){
            alert("type correct values")
        }else{
            alert("all Good ")
        }
        e.preventDefault();

    }
    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setusererr(true);
            // console.log("invalid")
        }else
        {
            setusererr(false);
        }
        // console.warn(e.target.value.length)
        setuse(item)
    }

    function passwordHandler(e){
        let item = e.target.value;
        if(item.length<7 || item.isString){
            setpasserr(true);
        }else{
            setpasserr(false);
        }
        setpass(item)
    }
    return (
        <>
            <h3>welcome to login page</h3>
            <form onSubmit={loginhanndele}><InputText type="text" onChange={userHandler} placeholder="input User Id" /> <br />{usererr?<span style={{color: "red"}}>user not valid</span>:""}<br />
                <InputText type="password" placeholder="input User password" onChange={passwordHandler} /><br />{passerr?<span style={{color: "red"}}>Password not valid</span>:""}<br />
                <Button type="submit" >login</Button>
            </form>
        </>
    )
}

export default Login;