import axios from 'axios'

// данный код повзаимствован на stackoverflow

axios.defaults.baseURL = window.location.origin
axios.defaults.headers.common["token"] = window.token

window.axios = axios

export default axios