/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Component } from 'react'
import './App.css'
import Header from './shared/Header/Header'
import Sidebar from './shared/Sidebar/Sidebar'
import Dashboard from '../src/pages/Dashboard/Dashboard'
import Login from './pages/authentication/components/login'
import PropTypes from 'prop-types'
import WithLoading from './shared/Hoc/withLoading'

class App extends Component {

  state = {
    page : <Dashboard navigateTo={this.navigateTo}/>,
    isAuthenticated: false
  }

  navigateTo = (component => {
    this.setState({ page: component })
  })

  handleAuthentication = (status) => {
    this.setState({
      isAuthenticated: status
    })

    if (status) {
      this.props.showToast("Sukses Login")
    } else {
      this.props.showToast("Sukses Logout")
    }
  }

  render() {
    const { page, isAuthenticated } = this.state

    return (
      <>
        {isAuthenticated ? (
          <div className="d-flex">
            <Sidebar
              navigateTo={this.navigateTo}
              handleAuthentication={this.handleAuthentication}
            />
            <main className="w-100 flex-grow-1">
              <Header 
                navigateTo={this.navigateTo}
                handleAuthentication={this.handleAuthentication} 
              />
              {page}
            </main>
          </div>
        ) : (
          <Login handleAuthentication={this.handleAuthentication}/>
        )}
      </>
    )
  }
}

App.propsTypes = {
  showToast: PropTypes.func
}

const AppComponent = WithLoading(App)

export default AppComponent
