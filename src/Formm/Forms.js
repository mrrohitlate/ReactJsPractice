import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { Button } from "primereact/button";

function Forms() {
    // const [name, selectName]= useState();
    // const [selectedCity, setSelectedCity] = useState(null);
    // const [checked, setChecked] = useState(false);

    // const cities = [
    //     { name: 'New York', code: 'NY' },
    //     { name: 'Rome', code: 'RM' },
    //     { name: 'London', code: 'LDN' },
    //     { name: 'Istanbul', code: 'IST' },
    //     { name: 'Paris', code: 'PRS' }
    // ];

    // function getFormData(e){
    //     console.warn(name, selectedCity, checked)
    //     e.preventDefault();
    // }

    // return (
    //     <>
    //         <h3>hello form Component</h3>
    //         <form onSubmit={getFormData}>
    //             <InputText type="text" placeholder="enter Name" value="name" onChange={(e)=>selectName(e.target.value)}></InputText><br /><br />
    //             <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
    //                 editable placeholder="Select a City" className="w-full md:w-14rem" /><br /><br />
    //             terms & conditions <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>  <br /><br />
    //             <Button type="submit" >submit</Button> &nbsp;
    //             <Button >clear</Button>

    //         </form>
    //     </>
    // )


  const [name, setName] = useState("");
  const [term, setTerm] = useState(false);
  const [who, setWho] = useState("sigma");
  const [what, setWhat] = useState("");

  function formFun(e) {
    console.log(name, term, who, what);
    e.preventDefault();
  }
  function clear() {
    setName("");
    setTerm(false);
    setWho("sigma");
    setWhat("");
  }

  return (
    <>
      <form onSubmit={formFun} style={{ marginLeft: "35%", marginTop: "10%" }}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          style={{ background: "yellow" }}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="terms">I Agree</label>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          value="agree"
          onChange={(e) => setTerm(e.target.checked)}
        />
        <br />
        <label htmlFor="whoareyou">who are you? </label>
        <select
          name="whoareyou"
          id="whoareyou"
          onChange={(e) => setWho(e.target.value)}
        >
          <option value="sigma">sigma</option>
          <option value="alpha">alpha</option>
          <option value="omega">omega</option>
          <option value="noob">noob</option>
        </select>
        <br />
        <p>What you do?</p>
        <label htmlFor="code">code </label>
        <input
          type="radio"
          id="code"
          name="whatyoudo"
          value="code"
          onChange={(e) => setWhat(e.target.value)}
        />

        <label htmlFor="art"> art </label>
        <input
          type="radio"
          id="art"
          name="whatyoudo"
          value="art"
          onChange={(e) => setWhat(e.target.value)}
        />

        <br />
        <br />
        <button type="submit" style={{ background: "green" }}>
          Click
        </button>
        <br />
        <br />
        <button onClick={clear} type="reset" style={{ background: "skyblue" }}>
          Clear
        </button>
      </form>
    </>
  );
}

export default Forms;