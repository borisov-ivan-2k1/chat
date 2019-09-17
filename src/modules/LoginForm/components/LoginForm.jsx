import React from 'react'
import { Form, Icon, Input } from 'antd'
import { ShadowBlock } from 'components'
import { Button } from 'components'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Войдите в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <ShadowBlock>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input
                size="large"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" className="button login-form-button">
                Войти в аккаунт
              </Button >
            </Form.Item>
            <Link className='auth__register-link' to='/register'>Зарегистрироваться</Link>
          </Form>
        </ShadowBlock>
      </div>
    )
  }
}

export default LoginForm
