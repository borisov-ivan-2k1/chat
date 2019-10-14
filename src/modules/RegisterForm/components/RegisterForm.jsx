import React from 'react'
import { Form, Icon, Input } from 'antd'
import { ShadowBlock } from 'components'
import { Button } from 'components'
import { Link } from 'react-router-dom'
import { validateField } from 'utils/helpers'

const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props
  const success = false
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, Вам нужно зарегистрироваться</p>
      </div>
      <ShadowBlock>
        {!success ?
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item
            validateStatus={validateField('email', touched, errors)}
            hasFeedback
            help={!touched.email ? '' : errors.email}>
              <Input
                id='email'
                size="large"
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Ваше имя"
              />
            </Form.Item>
            <Form.Item validateStatus={validateField('password', touched, errors)}
            hasFeedback
            help={!touched.password ? '' : errors.password}>
              <Input
                size="large"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                id='password'
                placeholder="Пароль"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item validateStatus={validateField('password', touched, errors)}>
              <Input
                size="large"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password2"
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button onClick={handleSubmit} type="primary" htmlType="submit" size="large" className="button login-form-button">
                Зарегистрироваться
            </Button >
            </Form.Item>
            <Link className='auth__register-link' to='/login'>Войти в аккаунт</Link>
          </Form> :
          <div className='auth__success-block'>
            <div>
              <Icon type='info-circle' theme='twoTone' />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>На вашу почту было выслано письмо с ссылкой на подтверждение аккаунта.</p>
          </div>}
      </ShadowBlock>
    </div>
  )
}


export default RegisterForm
