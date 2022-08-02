import { Outlet } from 'react-router-dom'
import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div>
        Login
        <Outlet />    
    </div>
      
    )
  }
}

export default Login