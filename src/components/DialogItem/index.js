import React from 'react'
import PropTypes from 'prop-types'
import { IconReaded, Avatar } from '../'
import classNames from 'classnames'
import './DialogItem.scss'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'

const getMessageTime = created_at => {
  if(isToday(created_at)) {
    return format(created_at, 'hh:MM')
  } else {
    return format(created_at, 'dd.MM.yyyy')
  }
}

const DialogItem = ({ user, unreaded, created_at, text, isMe }) => (
  <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
    <div className='dialogs__item-avatar'>
      <Avatar user={user}/>
    </div>
    <div className='dialogs__item-info'>
      <div className='dialogs__item-info-top'>
        <b>{user.fullname}</b>
        <span>
          {getMessageTime(created_at)}
        </span>
      </div>
      <div className='dialogs__item-info-bottom'>
        <p>
          {text}
        </p>
        {isMe && <IconReaded isMe={true} isReaded={false} />}
        {unreaded > 0 && (
        <div className='dialogs__item-info-bottom-count'>
          {unreaded > 99 ? '99' : unreaded}
        </div>)}
        
      </div>
    </div>
  </div>
  
)




DialogItem.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  isMe: PropTypes.bool,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
}


export default DialogItem