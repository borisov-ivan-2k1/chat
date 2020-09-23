import React from 'react'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/is_today'
import { Link } from 'react-router-dom'

import { IconReaded, Avatar } from '..'

//преобразование даты в зависимости от вреени
const getMessageTime = createdAt => {
  if (isToday(createdAt)) {
    return format(createdAt, 'HH:mm')
  } else {
    return format(createdAt, 'DD.MM.YYYY')
  }
}

//если последнее сообщение не текст, вывести 'прикреплённый файл'
const renderLastMessage = (message, userId) => {
  let text = ''
  if (!message.text && message.attachments.length) {
    text = 'прикрепленный файл'
  } else {
    text = message.text
  }
  // если последнее сообщение отправлено автором, то вывести перед сообщением "Вы"
  return `${message.user._id === userId ? 'Вы: ' : ''}${text}`
}

const Dialog = ({
  _id,
  isMe,
  currentDialogId,
  partner,
  userId,
  lastMessage,
  author
  

}) => (
    <Link to={`/dialog/${_id}`}>
      <div className={classNames('dialogs__item', {
        'dialogs__item--online': partner.isOnline,
        'dialogs__item--selected': currentDialogId === _id
      })}
      >
        <div className='dialogs__item-avatar'>
          {isMe ? <Avatar user={partner} /> : <Avatar user={author} />}
        </div>
        <div className='dialogs__item-info'>
          <div className='dialogs__item-info-top'>
            {isMe ? <b>{partner.fullname}</b> : <b>{author.fullname}</b>}
            
            <span>
              {/* время отправки сообщения */}
              {getMessageTime(lastMessage.createdAt)}
            </span>
          </div>
          <div className='dialogs__item-info-bottom'>
            <p>
              {renderLastMessage(lastMessage, userId)}
            </p>
            {/* если последнее сообщение от автора диалога, то отобразить значок прочитано/непрочитано */}
            {isMe && <IconReaded isMe={isMe} isReaded={lastMessage.readed} />}
          </div>
        </div>
      </div>
    </Link>
  )

export default Dialog