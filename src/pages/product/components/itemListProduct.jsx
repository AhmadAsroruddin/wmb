import { Component } from "react";
import ItemProduct from "./itemProduct";
import { IconBookmark, IconShoppingCart } from "@tabler/icons-react";

export default class ItemListProduct extends Component{
    state = {
        itemCount : 0,
        saveCount : 0
    }

    handleChangeSaveCount = (number) =>{
        this.setState({
            saveCount :  this.state.saveCount + number
        })
    }

    render(){
        return (
            <>
                <section>
                    <div className="container shadow p-4 my-4 rounded-2">
                        <div className="d-flex justify-content-between mb-4">
                            <h2 className="my-2">
                                List Product Enigmat Shop
                            </h2>
                            <div className="d-flex justify-content-end column-gap-2 ">
                                <div className="text-end my-2">
                                    <IconBookmark />
                                    <span className="badge text-bg-secondary rounded-all">
                                        {this.state.saveCount}
                                    </span>
                                </div>
                                <div className="text-end my-2">
                                    <IconShoppingCart />
                                    <span className="badge text-bg-secondary rounded-all">
                                        {this.state.itemCount}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-lg-4 row-cols-1-1 g-4">
                            <div className="col px-5">
                                <ItemProduct 
                                    image = "https://assets.klikindomaret.com/products/20093135/20093135_1.jpg"
                                    title = "beng-beng"
                                    price = {3000}
                                    changeSaveCount = {this.handleChangeSaveCount}
                                />
                            </div>
                            <div className="col px-5">
                                <ItemProduct 
                                    image = "data:image/jpeg;base64,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"
                                    title = "Chitato Lite"
                                    price = {17000}
                                    changeSaveCount = {this.handleChangeSaveCount}

                                />
                            </div>
                            <div className="col px-5">
                                <ItemProduct 
                                    image = "https://assets.klikindomaret.com/products/20093135/20093135_1.jpg"
                                    title = "beng-beng"
                                    price = {3000}
                                    changeSaveCount = {this.handleChangeSaveCount}

                                />
                            </div>
                            <div className="col px-5">
                                <ItemProduct 
                                    image = "https://assets.klikindomaret.com/products/20093135/20093135_1.jpg"
                                    title = "beng-beng"
                                    price = {3000}
                                    changeSaveCount = {this.handleChangeSaveCount}

                                />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}