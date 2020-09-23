import { axios } from 'core'

export default {
  // получение всех сообщений
  getAll: () => axios.get('/dialogs'),
  // создание диалога
  create: ({ partner, text }) => axios.post('/dialogs', { partner, text })
}