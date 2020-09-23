import { withFormik } from 'formik'
import Login from '../components/Login'
import validateForm from 'utils/validate'
import { userActions } from 'redux/actions'

import store from 'redux/store'

const LoginContainer = withFormik({

    enableReinitialize: true,

    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),

    validate: values => {
        let errors = {}
        
        validateForm({ isAuth: true, values, errors })
        
        return errors
    },

    handleSubmit: (values, { setSubmitting, props }) => {
        //костыль, но работает
        store.dispatch(userActions.fetchUserLogin(values))
        .then(({ status }) => {
            if (status === 'success') {
                props.history.push('/')
            }
            setSubmitting(false)
          })
          .catch(() => {
            setSubmitting(false)
          })
        
    },

    displayName: 'Login',
})(Login)

export default LoginContainer