import React,{Component} from 'react'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

class Mainpage extends Component{

    constructor(props){
        super(props)
        this.state = { counter: 0 };

    }
    onclick(type) {
        this.setState(prevState => {
            return { counter: type === 'max' ? prevState.counter + 1 : prevState.counter - 1 }
        });
    }
   
    render(){
        const header = (
         <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" width={"1px"} height={"100px"}/>
    );

        const footer = (
            <div className="flex flex-wrap justify-content-end gap-2">
                <Button label="Save" icon="pi pi-check" />
                <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
            </div>
        );
        return (
            <>
                <div className="container card flex justify-content-center">
                    <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-1px">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <Button label='+' onClick={this.onclick.bind(this,'max')}></Button>
                &nbsp;&nbsp;
                <b>Counter:{this.state.counter}</b>
                &nbsp;&nbsp;
                <Button label='-' onClick={this.onclick.bind(this,'min')}></Button>
            </>
        )
    }
    
}

export default Mainpage