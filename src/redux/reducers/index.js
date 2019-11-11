import { combineReducers } from "redux"

// код ниже скопирован с сайта stackoverflow

const reducers = ["messages", "dialogs", "user"]

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default;
    return initial;
  }, {})
);