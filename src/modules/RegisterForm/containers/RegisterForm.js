import { withFormik } from 'formik'
import { userActions } from 'redux/actions'
import RegisterForm from '../components/RegisterForm'
import validateForm from 'utils/validate'

import store from 'redux/store'

export default withFormik({

  mapPropsToValues: () => ({
    email: '',
    fullname: '',
    password: '',
    password_2: '',
  }),

  validate: values => {
    let errors = {}

    validateForm({ isAuth: false, values, errors })

    return errors
  },

  handleSubmit: (values, { setSubmitting, props }) => {

    store
      .dispatch(userActions.fetchUserRegister(values))
      .then(({ status }) => {
        if (status === 'success') {
          setTimeout(() => {
            props.history.push('/')
          }, 50)
        }
        setSubmitting(false)
      })
      .catch(() => {
        setSubmitting(false)
      })
  },

  displayName: 'RegisterForm',
})(RegisterForm)

