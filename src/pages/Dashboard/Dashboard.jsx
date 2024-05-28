/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Menu from '../../assets/menu.jpg'
import Table from '../../assets/table.jpg'

export default class Dashboard extends Component {
    render() {
        const { navigateTo } = this.props
        return (
            <div className='container-fluid pt-4 px-4 d-flex flex-column align-items-center gap-5 justify-content-center'>
                <div className='d-flex flex-column text-center'>
                    <h2>Warung Makan Bahari</h2>
                    <p>Welcome to Admin Page of Warung Makan Bahari</p>
                </div>
                <div className='d-flex gap-5'>
                    <div className="card shadow" style={{ width: '18rem' }}  onClick={() => navigateTo(<Dashboard />)} >
                        <img src={Menu} className="card-img-top" alt="menu" />
                        <div className='container d-flex flex-column align-items-center'>
                            <h5 className='mt-2'>Manajemen Menu</h5>
                            
                        </div>
                    </div>
                    <div className="card shadow" style={{ width: '19rem' }}>
                        <img src={Table} className="card-img-top" alt="menu" />
                        <div className='container d-flex flex-column align-items-center'>
                            <h5 className='mt-2'>Manajemen Meja</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}