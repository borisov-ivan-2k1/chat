import React from 'react'
import { Route } from 'react-router-dom'
import './Auth.scss'

import { LoginForm, RegisterForm } from 'modules'

const Auth = () => {
  return (
    <section className='auth'>
      <Route exact path={['/', '/login']} component={LoginForm} />
      <Route exact path='/register' component={RegisterForm} />
    </section>
  )
}

export default Auth 