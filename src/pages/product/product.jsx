import { Component } from "react";
import ItemListProduct from "./components/itemListProduct";

export default class Product extends Component{
    render(){
        return (
            <>
                <ItemListProduct changeSaveCount={this.changeSaveCount}/>
            </>
        )
    }
}