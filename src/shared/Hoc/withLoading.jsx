/* eslint-disable no-unused-vars */
import React from 'react'
import { Component } from 'react'
import Toast from '../Toast/Toast'

function WithLoading(WrappedComponent) {
  return class HOC extends Component {
    state = {
        isLoading : false,
        toastColor: "primary"
    }

    handleShowLoading = () => {
        this.setState({ isLoading : true })
    }

    handleHideLoading= () => {
        this.setState({ isLoading : false })
    }

    showToast = (message, color) => {
        this.setState({
            showToast: true,
            toastMessage: message,
            toastColor: color || this.state.toastColor
        })

        setTimeout(() => {
            this.setState({
                showToast: false
            })
        }, 4000)
    }

    render() {
        return (
            <>
                {this.state.showToast && (
                    <Toast
                        message={this.state.toastMessage}
                        color={this.state.toastColor}
                    />
                )}

                <WrappedComponent
                    {...this.props} // melakukan copy ke semua properti dari component with loading
                    isLoading = {this.state.isLoading}
                    showToast={this.showToast}
                    handleHideLoading = {this.handleHideLoading}
                    handleShowLoading = {this.handleShowLoading}
                >

                </WrappedComponent>            
            </>
        )
    }
  }

}

export default WithLoading