import { Component } from "react";
import {IconArrowLeft} from '@tabler/icons-react';
import loginImage from '../../../assets/login.svg';
import PropTypes from 'prop-types'

class Login extends Component {
    state = {
        form: {
            username: '',
            password: '',
        },
        errors: {
            username: '',
            password: '',
        },
        isValid: false,
    }

    handleChange = (e) => {
        const { name, value } = e.target

        let errors = { ...this.state.errors }
        if ( name === "username" ) {
            errors.username = value.length === 0 ? "Username wajib diisi" : ""
        }
        if ( name === "password" ) {
            errors.password = value.length === 0 ? "Password wajib diisi" : ""
        }

        this.setState(
            {
                form: {
                    ...this.state.form,
                    [name]: value,
                },
                errors,
            },
            this.validateForm
        )
    }

    validateForm = () => {
        const { username, password } = this.state.form
        const { errors } = this.state
        const isValid = 
            username.trim() !== "" &&
            password.trim() !== "" &&
            Object.values(errors).every((error) => error === "")

        this.setState({ isValid })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        const { username, password } = this.state.form
        if (!this.state.isValid) return

        if (username === "admin" && password === "12345678") {
            this.props.handleAuthentication(true)
        }
    }
    render(){
        return (<>
          
            <div className="container d-flex justify-content-center align-item-center mt-5">
                <div className="shadow-lg rounded-4" style={{width : 500}}>
                    <div className="">
                        <a className="user-select-all p-4 d-flex align-items-center gap-2 text-decoration-none" href="">
                            <span>< IconArrowLeft/></span>
                            Back
                        </a>
                    </div>
                    <div className="p-4">
                        <div className="row mt-4 mb-3">
                            <div className="col text-center">
                                <img src={loginImage} alt="" className="img-fluid" style={{minHeight : 200}}/>

                            </div>
                        </div>
                        <form onSubmit={this.handleOnSubmit}>
                            <div class="mb-3">
                                <babel for="username" class="form-label">Username</babel>
                                <input 
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    aria-describedby="emailHelp"
                                    onChange={this.handleChange}
                                    className={`form-control rounded-0 border-0 border-bottom ${
                                        this.state.errors.username && "is-invalid"
                                    }`}
                                />
                                <div className="invalid-feedback">
                                    {this.state.errors.username}
                                </div>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input
                                onChange={this.handleChange}
                                type="password"
                                name="password"
                                id="password"
                                className={`form-control rounded-0 border-0 border-bottom ${
                                    this.state.errors.password && "is-invalid"
                                }`}
                                />
                                <div className="invalid-feedback">
                                    {this.state.errors.password}
                                </div>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div class="d-grid gap-2">
                                <button disabled={!this.state.isValid} class="btn btn-primary" type="submit" >Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>)
    }
}
Login.propTypes = {
    handleAuthentication: PropTypes.func,
}
export default Login;