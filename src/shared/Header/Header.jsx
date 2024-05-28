/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import profileImg from '../../assets/person.svg'
import { IconSettings } from '@tabler/icons-react'
import PropTypes from 'prop-types'
import { IconDoorExit } from '@tabler/icons-react'

export default class Header extends Component {
    handleLogout = () => {
        if (!confirm("Apakah yakin ingin logout?")) return;
        this.props.handleAuthentication(false);
    }

    render() {
        return (
            <div className='d-flex justify-content-end shadow-md px-4 py-3 bg-primary'>
                <button className='btn btn-primary' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img 
                        className='rounded-circle cursor-pointer'
                        src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-372-456324.png"
                        alt="avatar" 
                        width={32} 
                        height={32} 
                    />
                </button>
                <ul className='dropdown-menu'>
                    <li className="dropdown-item-text">
                        <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1">Admin</h6>
                            <span>Admin@email.com</span>
                        </div>
                    </li>
                    <hr />
                    <li>
                        <button
                            onClick={this.handleLogout}
                            className="dropdown-item"
                            href="#"
                        >
                            <i className="me-2">
                                <IconDoorExit size={16} />
                            </i>
                            Logout
                        </button>
                    </li>

                </ul>
            </div>
        )
    }
}

Header.propTypes = {
    handleAuthentication: PropTypes.func
}
