import { Button } from "primereact/button";
import React,{ Component } from "react";

class StateInClass extends Component {
    constructor(){
        super();
        this.state={
            date: 'helloo'
        }
    }
    update(){
        this.setState({date:'hello'})
    }

    render(){
        return(
            <>
            <h1>{this.state.date}</h1>
                <Button onClick={(this.update.bind(this,'date'))}>hey</Button>
            </>
        )
    }
}

export default StateInClass