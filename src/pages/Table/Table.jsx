/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TableForm from './Components/TableForm'
import TableList from './Components/TableList'
import LoadingAnimation from '../../shared/Animation/LoadingAnimation'
import WithLoading from '../../shared/Hoc/withLoading'
import Toast from '../../shared/Toast/Toast'
import { IconArrowLeft } from '@tabler/icons-react'
import { IconPlus } from '@tabler/icons-react'

class Table extends Component {
    state = {
        form: {
            id: '',
            tableName: '',
            status: false
        },
        todos: [],
        error: {
            tableName: ''
        },
        isVisible: false
    }

	componentDidMount() {
        const { tables } = this.props
		this.props.handleShowLoading();
		setTimeout(() => {
			this.setState({
				todos: tables
			});
			this.props.handleHideLoading();
		}, 3000);
	}

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            form: {
                ...this.state.form,
                [name] : value
            }
        })
    }

    handleChangeStatus = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                status: event.target.checked
            }
        })
    }

    handleChangeSubmit = (event) => {
        event.preventDefault()

        let error = {}
        if (this.state.form.tableName === '') {
            error.tableName = 'Tugas wajib di isi'
        }

        this.setState({
            error: error
        })

        if(Object.keys(error).length > 0) return
        this.props.handleShowLoading()

        const todos = this.state.todos

        setTimeout(() => {
            if (this.state.form.id) {
                const index = todos.findIndex((todo) => todo.id === this.state.form.id)
                const todo = {...this.state.form}
    
                todos.splice(index, 1, todo)
                this.setState({todos:todos})
                this.props.showToast("Data Berhasil DiUbah", "info")
                this.props.handleHideLoading()
            } else {
                const todo = {
                    ...this.state.form,
                    id: new Date().getMilliseconds().toString()
                }
                todos.push(todo)
                this.setState({todos:todos})
                this.props.showToast("Data Berhasil DiTambahkan", "primary")
                this.props.handleHideLoading()
                this.handleUnVisible()
            }
            this.handleReset()
        }, 2000)
    }

    handleReset = (event) => {
        if (event) event.preventDefault()

        this.setState({
            form: {
                id: '',
                tableName: '',
                status: false
            }
        })
    }

    handleEdit = (id) => {
        const exist = this.state.todos.find(value => value.id === id)
        if (exist == null) return

        this.setState({
            form: {
                ...exist
            }
        })
    }

    handleDelete = (id) => {
        if(!confirm('Apakah yakin ingin menghapus data?')) return
        setTimeout(() => {
            const todos = this.state.todos.filter((todo) => todo.id !== id)
            this.setState({todos : todos})
            this.props.showToast("Berhasil di Hapus", "danger")
        }, 2000)
    }

    handleVisible = () => {
        this.setState({ isVisible : true })
    }

    handleUnVisible = () => {
        this.setState({ isVisible : false })
    }

    render() {
        return (
            <div className='container-fluid pt-4 px-4'>
                <h2>Meja</h2>
                {this.state.isVisible ? (
                    <>
                        <a
                            onClick={this.handleUnVisible}
                            href="#"
                            style={{ width: "max-content" }}
                            className="user-select-all p-4 d-flex align-items-center gap-2 text-decoration-none"
                        >
                            <span>
                                <IconArrowLeft />
                            </span>
                            Kembali
                        </a>
                        <TableForm
                            handleChange = {this.handleChange}
                            handleChangeStatus = {this.handleChangeStatus}
                            handleChangeSubmit = {this.handleChangeSubmit}
                            handleReset = {this.handleReset}
                            error = {this.state.error}
                            form = {this.state.form}
                        />
                    </>
                ) : (
                    <div className='container'>
                        <button type='button' className='btn btn-info text-white my-3' onClick={this.handleVisible}>
                            <IconPlus className='' />
                            Tambah
                        </button>
                        {this.props.isLoading ? (
                            <LoadingAnimation />
                        ) : (
                            <div className='shadow-sm p4 rounded-2 mt-4'>
                                <h3>List Menu Makanan</h3>
                                <TableList
                                    todos = {this.state.todos}
                                    handleEdit = {this.handleEdit}
                                    handleDelete = {this.handleDelete}
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

Table.propTypes = {
    isLoading : PropTypes.bool.isRequired,
    handleShowLoading : PropTypes.func.isRequired,
    handleHideLoading : PropTypes.func.isRequired
}

const TableWithLoading = WithLoading(Table)
export default TableWithLoading
