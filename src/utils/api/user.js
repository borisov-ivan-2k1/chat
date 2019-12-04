import { axios } from 'core'

export default {
  signIn: postData => axios.post('/user/signin', postData),
  signUp: postData => axios.post('/user/signup', postData),
  getMe: () => axios.get('/user/me'),
  findUsers: query => axios.get('/user/find?query=' + query)
}