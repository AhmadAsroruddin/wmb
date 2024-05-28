import { Component } from "react";
import { IconShoppingCart, IconHeartFilled, IconHeart } from "@tabler/icons-react";
import PropTypes from 'prop-types';

export default class ItemProduct extends Component{
    state = {
        count : 0,
        isSave : false
    }

    handleIncrement = () => {
        this.setState({
            count : this.state.count+1
        })
    }
    handleDecrement = () =>{
        if(this.state.count === 0) return;

        this.setState({
            count: this.state.count - 1
        })
    }
    handleSaveChanges = () =>{
        this.setState({isSave : !this.state.isSave}, () =>{
            if(this.state.isSave){
                this.props.changeSaveCount(1)
            } else{
                this.props.changeSaveCount(-1)
            }
        })
    }

    render(){
        const {image, title, price} = this.props;

        return(
            <>
                <div className="card shadow-sm h-100">
                    <img src={image} alt="" className="card-img-top h-50 object-fit-container" />
                    <div className="card-body">
                        <h5 className="card-title fw-light">{title}</h5>
                        <p className="fw-bold ">Rp.{price}</p>
                    </div>
                    <div className="d-flex justify-content-between p-2">
                        <div className="d-flex align-items-center column-gap-4">
                            { this.state.count === 0 ? 
                                (
                                    <button className="d-flex align-items-center column-gap-2 btn btn-primary" onClick={this.handleIncrement}>
                                        <IconShoppingCart />
                                    </button>
                                )
                                : 
                                (
                                    <>
                                        <button className="btn btn-primary" onClick={this.handleIncrement}>+</button>
                                        <span>{this.state.count}</span>
                                        <button className="btn btn-primary" onClick={this.handleDecrement}>-</button>
                                    </>
                                )
                            }
                        </div>
                        <button onClick={this.handleSaveChanges} className="btn btn-link">
                            <i>{this.state.isSave ? <IconHeartFilled/> : <IconHeart/>}</i>
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

ItemProduct.propTypes = {
    changeSaveCount : PropTypes.func.isRequired
}