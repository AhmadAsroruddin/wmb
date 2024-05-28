import { Component } from "react";
import Child from "./child";

class Parent extends Component{
    render(){
        return(
            <div>
                <button onClick={() => this.props.onIncrement()} >Increment</button>
                count : {this.props.count}
            </div>
        )
    }

}

export default Parent;