import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button>Login</button>
        <p>This is an error!</p>
        <span>Don't have an account?&nbsp;<Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}
