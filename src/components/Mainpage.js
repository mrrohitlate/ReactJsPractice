import React from "react";
import { Card } from "primereact/card";

// class Mainpage extends Component{

//     render(){
//         return (
//             <>

//             </>
//         )
//     }

// }

function MainPage() {
    return (
        <>
            <div className="card">
            <Card
                title="Simple Card"
                pt={{
                    body: { className: 'bg-primary border-round-lg' }
                }}
            >
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </Card>
        </div>
        </>
    );
}
export default MainPage;
