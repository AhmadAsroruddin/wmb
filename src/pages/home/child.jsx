import { Component } from "react";

class Child extends Component{
    render(){
        return(
            <div>
                Hallo my name is {this.props.name} andmy age is {this.props.age}
            </div>
        )
    }
}

export default Child;