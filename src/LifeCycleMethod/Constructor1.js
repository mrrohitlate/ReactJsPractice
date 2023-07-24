import React, { Component } from "react";

class Constructor1 extends Component {

    constructor(){
        super();
        // console.warn("constructor")
    }

    render() {
        // console.warn("render")
        return (
            <>
                <h3>hello Constructor</h3>
            </>
        )
    }
}