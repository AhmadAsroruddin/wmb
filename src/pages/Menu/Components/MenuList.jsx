import { IconTrash, IconEdit } from '@tabler/icons-react';
import React from 'react';
import PropTypes from 'prop-types';

const MenuList = ({ todos, handleDelete }) => {
    return (
        <div className='table-responsive border shadow-sm'>
            <table className='table table-hover align-items-center text-center'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Description</th>
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
                    ) : (
                        todos.map((todo, idx) => (
                            <tr key={idx} className='text-center'>
                                <td>{idx + 1}</td>
                                <td>{todo.name}</td>
                                <td>{todo.price}</td>
                                <td>
                                    <div className='d-flex gap-2 align-items-center mx-auto justify-content-center'>
                                        <button className='btn btn-danger text-white' onClick={() => handleDelete(todo.id)}>
                                            <IconTrash size={22} />
                                        </button>
                                        {/* Tambahkan tombol edit di sini */}
                                        <button className='btn btn-primary text-white' onClick={() => handleEdit(todo.id)}>
                                            <IconEdit size={22} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

MenuList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired // Tambahkan propType untuk handleEdit
};

export default MenuList;
