import React from 'react'
import { PropTypes } from 'prop-types'
import readedSvg from 'assets/img/readed.svg'
import notReadedSvg from 'assets/img/not-readed.svg'

const IconReaded = ({ isMe = true, isReaded = false }) => //если что ошубка тут
  isMe &&
  (isReaded ? (
    <img
      src={readedSvg}
      className='message__icon-readed'
      alt='Checked icon'
    />
  ) : (
      <img
        className='message__icon-readed message__icon-readed--not'
        src={notReadedSvg}
        alt='Checked icon'
      />
    ))


IconReaded.propTypes = {
  isReaded: PropTypes.bool,
  isMe: PropTypes.bool,
}

export default IconReaded