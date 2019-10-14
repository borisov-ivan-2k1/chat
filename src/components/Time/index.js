import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import rulocale from 'date-fns/locale/ru'

const Time = ({ date }) => 
    formatDistanceToNow(new Date(date), { addSuffix: true, locale: rulocale })

export default Time