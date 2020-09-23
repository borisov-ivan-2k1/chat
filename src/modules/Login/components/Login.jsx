import React from 'react'
import { Form, Icon, Input } from 'antd'
import { Button, ShadowBlock } from 'components'
import { Link } from 'react-router-dom'
import { validateField } from 'utils/helpers'

// большая часть кода взята из документации antdesign
const Login = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props

  return (
    <div>
      <div className='auth__top'>
        <h2>Войдите в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <ShadowBlock>
        <Form onSubmit={handleSubmit} className='login-form'>
          <Form.Item
            validateStatus={validateField('email', touched, errors)}
            hasFeedback
            help={!touched.email ? '' : errors.email}>
            <Input
              id='email'
              size='large'
              prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='E-mail'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item validateStatus={validateField('password', touched, errors)}
            hasFeedback
            help={!touched.password ? '' : errors.password}>
            <Input
              size='large'
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              id='password'
              placeholder='Пароль'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            {isSubmitting && !isValid && <span>Ошибка!</span>}
            <Button
              disabled={isSubmitting}
              onClick={handleSubmit}
              type='primary'
              size='large'
              className='button login-form-button'
            >
              Войти в аккаунт
              </Button >
          </Form.Item>
          <Link className='auth__register-link' to='/signup'>Зарегистрироваться</Link>
        </Form>
      </ShadowBlock>
    </div>
  )
}

export default Login
