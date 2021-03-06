import React from 'react'
import './Status.scss'
import classNames from 'classnames'

const Status = ({
  online,
  fullname
}) => (
    <div className='chat__dialog-header'>
      <div className='chat__dialog-header-center'>
        <b className='chat__dialog-header-username'>{fullname}</b>
        <div className='chat__dialog-header-status'>
          <span className={classNames('status', { 'status--online': online })}>
            {online ? 'онлайн' : 'офлайн'}
          </span>
        </div>
      </div>
    </div>
  )


export default Status