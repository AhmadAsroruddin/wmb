import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconDeviceFloppy, IconRefresh } from '@tabler/icons-react';

class TableForm extends Component {
    render() {
        const {
            handleChange,
            handleChangeSubmit,
            handleChangeStatus,
            handleReset,
            error,
            form
        } = this.props;

        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form onSubmit={handleChangeSubmit} className='shadow-sm p-4 rounded-4'>
                            <h3 className='mb-4'>Penambahan Meja</h3>

                            <div className='mb-3'>
                                <label htmlFor="tableName" className='form-label pb-2'>Tambah Meja</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    className={`form-control ${error.tableName && 'is-invalid'}`}
                                    id='tableName'
                                    name='tableName'
                                    value={form.tableName}
                                />
                                {error.tableName && (
                                    <div className='invalid-feedback'>{error.tableName}</div>
                                )}
                            </div>

                            <div className='form-check mb-3'>
                                <input
                                    onChange={handleChangeStatus}
                                    type="checkbox"
                                    className='form-check-input'
                                    id='status'
                                    checked={form.status}
                                />
                                <label htmlFor="status" className='form-check-label'>Selesai</label>
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

TableForm.propTypes = {
    handleChangeSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeStatus: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired
};

export default TableForm;
