import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Time, IconReaded } from '../'

import { convertCurrentTime } from 'utils/helpers'

import waveSvg from 'assets/img/wave.svg'
import playSvg from 'assets/img/play.svg'
import pauseSvg from 'assets/img/pause.svg'

import './Message.scss'

const MessageAudio = ({ audioSrc }) => {
    const audioElem = useRef(null)
    const [isPlayng, setIsPlayng] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)

    const togglePlay = () => {
      if (!isPlayng) {
        audioElem.current.play()
      } else {
        audioElem.current.pause()
      }
    }

    useEffect(() => {
      audioElem.current.volume = "0.1"
      audioElem.current.addEventListener('playing', () => {
        setIsPlayng(true)
      }, false)
      audioElem.current.addEventListener('ended', () => {
        setIsPlayng(false)
        setProgress(0)
        setCurrentTime(0)
      }, false)
      audioElem.current.addEventListener('pause', () => {
        setIsPlayng(false)
      }, false)
      audioElem.current.addEventListener('timeupdate', () => {
        const duration = (audioElem.current && audioElem.current.duration) || 0
        setCurrentTime(audioElem.current.currentTime)
        setProgress((audioElem.current.currentTime / duration) * 100)

      })
    }, [])


  return (
    <div className='message__audio'>
      <audio ref={audioElem} src={audioSrc} preload='auto'></audio>
      <div className='message__audio-progress'
        style={{ width: progress + '%' }}>
      </div>

      <div className='message__audio-info'>
        <div className='message__audio-btn'>
          <button onClick={togglePlay}>
            {isPlayng ? (
              <img src={pauseSvg} alt='Pause svg' />
            ) : (
              <img src={playSvg} alt='Plau svg' />)}
          </button>
        </div>

        <div className='message__audio-wave'>
          <img src={waveSvg} alt='Wave svg'></img>
        </div>

        <span className='message__audio-duration'>
          {convertCurrentTime(currentTime)}
        </span>

      </div>
    </div>
  )
}

const Message = ({ avatar, isMe, isReaded, user, audio, text, attachments, date, isTyping }) => {

  return (

    <div className={classNames('message', {
      'message--isme': isMe,
      'message--is-typing': isTyping,
      'message--is-audio': audio,
      'message--image': attachments && attachments.length === 1,

    })}>
      <div className='message__content'>
        <IconReaded isMe={isMe} isReaded={isReaded} />
        <div className='message__avatar'>
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className='message__info'>
          {(audio || text || isTyping) && (
            <div className='message__bubble'>
              {text && (<p className='message__text'>{text}</p>)}
              {isTyping && (
                <div className='message__typing'>
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {
                audio && <MessageAudio audioSrc={audio}/>
              }
            </div>)}

          {attachments && (
            <div className='message__attachments'>
              {attachments.map((item, index) => (
                <div key={index} className='message__attachments-item'>
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
            </div>
          )}

          {date && (<span className='message__date'>
            <Time date={date} />
          </span>)}
        </div>
      </div>
    </div>

  )
}

Message.defaultProps = {
  user: {},
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  isMe: PropTypes.bool,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
}


export default Message