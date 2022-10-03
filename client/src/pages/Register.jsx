import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username' />
        <input required type="email" placeholder='email' />
        <input required type="password" placeholder='password' />
        <button>Register</button>
        <p>This is an error!</p>
        <span>Don't have an account?&nbsp;<Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}
