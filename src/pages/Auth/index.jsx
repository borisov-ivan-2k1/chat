import React from 'react'
import { Route } from 'react-router-dom'

import './Auth.scss'

import { Login, Registration } from 'modules'

const Auth = () => {
  return (
    <section className='auth'>
      <div className='auth__content'>
      <Route exact path="/signin" component={Login} />
      <Route exact path="/signup" component={Registration} />
      </div>
    </section>
  )
}

export default Auth 