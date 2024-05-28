/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IconTrash } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MenuList extends Component {
    render() {
        const {
            todos,
            handleDelete,
            handleEdit
        } = this.props

        return (
            <>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className='text-center'>
                                        <p>~ Data is Empty ~</p>
                                    </td>
                                </tr>
                            ) : ""}
                            {todos.map((todo, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{++idx}</td>
                                        <td>{todo.tableName}</td>
                                        <td>
                                            <span className={`badge text-white ${
                                                todo.status ? 'text-bg-success' : 'text-bg-danger'
                                            }`}>
                                                {todo.status ? 'Selesai' : 'Belum Selesai'}
                                            </span>
                                        </td>
                                        <td>
                                            <div className='d-flex gap-2'>
                                                <button className='btn btn-danger text-white' onClick={() => handleDelete(todo.id)}>
                                                    <IconTrash size={22} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>   
            </>
        );
    }
}

MenuList.propTypes = {
    todos: PropTypes.array,
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func
}


export default MenuList;
