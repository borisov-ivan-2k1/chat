import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { Emoji } from 'emoji-mart'
import { Popover, Button, Icon } from 'antd'
import reactStringReplace from 'react-string-replace'
import { Time, IconReaded, Avatar } from '../'

import { convertCurrentTime, isAudio } from 'utils/helpers'

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
    setCurrentTime(audioElem.current.duration - audioElem.current.currentTime)
    audioElem.current.volume = '0.1'
    audioElem.current.addEventListener('playing', () => {
      setIsPlayng(true)
    }, false)
    audioElem.current.addEventListener('ended', () => {
      setIsPlayng(false)
      setProgress(0)
      setCurrentTime(audioElem.current.duration - audioElem.current.currentTime)
    }, false)
    audioElem.current.addEventListener('pause', () => {
      setIsPlayng(false)
    }, false)
    audioElem.current.addEventListener('timeupdate', () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0
      const time = (audioElem.current && audioElem.current.currentTime) || 0
      setCurrentTime(duration - time)
      setProgress((time / duration) * 100)
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

const Message = ({
  avatar,
  isMe,
  readed,
  user,
  audio,
  text,
  attachments,
  date,
  isTyping,
  onRemoveMessage,
  setPreviewImage
}) => {

  const renderAttachment = item => {
    if (item.ext !== 'webm') {
      return (
        <div
          key={item._id}
          onClick={() => setPreviewImage(item.url)}
          className='message__attachments-item'
        >
          <div className='message__attachments-item-overlay'>
            <Icon type='eye' style={{ color: 'white', fontSize: 18 }} />
          </div>

          <img src={item.url} alt={item.filename} />
        </div>
      )
    } else {
      return <MessageAudio key={item._id} audioSrc={item.url} />
    }
  }

  return (

    <div className={classNames('message', {
      'message--isme': isMe,
      'message--is-typing': isTyping,
      'message--is-audio': isAudio(attachments),
      'message--image': !isAudio(attachments) &&
        attachments &&
        attachments.length === 1 &&
        !text

    })}>

      <div className='message__content'>
        <IconReaded isMe={isMe} isReaded={readed} />
        <Popover
          content={
            <div>
              <Button onClick={onRemoveMessage}>Удалить сообщение</Button>
            </div>
          }
          trigger='click'
        >
          <div className='message__icon-actions'>
            <Button type='link' shape='circle' icon='ellipsis' />
          </div>
        </Popover>
        <div className='message__avatar'>
          <Avatar user={user} />
        </div>
        <div className='message__info'>
          {(text || isTyping) && (
            <div className='message__bubble'>
              {text && (
                <p className='message__text'>
                  {/* регулярка взята из интернета */}
                  {reactStringReplace(text, /:(.+?):/g, (match, i) => (
                    <Emoji emoji={match} set='apple' size={16} />
                  ))}
                </p>
              )}
              {isTyping && (
                <div className='message__typing'>
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {
                audio && <MessageAudio audioSrc={null} />
              }
            </div>)}

          {attachments && (
            <div className='message__attachments'>
              {attachments.map((item, index) => renderAttachment(item))}
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

export default Message