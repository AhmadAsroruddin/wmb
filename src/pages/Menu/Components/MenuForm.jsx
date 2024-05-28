import { IconRefresh, IconDeviceFloppy } from '@tabler/icons-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuForm extends Component {
    render() {
        const {
            handleChange,
            handleChangeSubmit,
            handleReset,
            error,
            form
        } = this.props;

        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form onSubmit={handleChangeSubmit} className='shadow-sm p-4 rounded-4'>
                            <h3 className='mb-4 text-center'>Menu Makanan</h3>
                            <div className='mb-3'>
                                <label htmlFor="name" className='from-tabel pb-2'>Nama Makanan</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    className={`form-control ${error.name && 'is-invalid'}`}
                                    id='name'
                                    name='name'
                                    value={form.name}
                                />
                                {error.name && (
                                    <div className='invalid-feedback'>{error.name}</div>
                                )}
                                <label htmlFor="price" className='from-tabel py-2'>Harga Makanan</label>
                                <input
                                    onChange={handleChange}
                                    type='number'
                                    id='price'
                                    className={`form-control ${error.price && 'is-invalid'}`}
                                    name='price'
                                    value={form.price}
                                />
                                {error.price && (
                                    <div className='invalid-feedback'>{error.price}</div>
                                )}
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button type='submit' className='btn btn-primary me-2 d-flex align-items-center gap-2'>
                                    <IconDeviceFloppy />
                                    <span>Submit</span>
                                </button>
                                <button type='button' onClick={handleReset} className='btn btn-danger text-white me-2 d-flex align-items-center gap-2'>
                                    <IconRefresh />
                                    <span>Reset</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

MenuForm.propTypes = {
    handleChangeSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    handleChangeStatus: PropTypes.func,
    handleReset: PropTypes.func,
    error: PropTypes.object,
    form: PropTypes.object
};

export default MenuForm;
