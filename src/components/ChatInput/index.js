import React, { useState } from 'react'

import './ChatInput.scss'
import { Input, Button } from 'antd'

const ChatInput = props => {

    const [value, setValue] = useState('')

    return (
        <div className='chat-input'>
            <div className='chat-input__smile-btn'>
                <Button type='ghost' shape='circle' icon='smile'/>
            </div>
            <Input 
            onChange={e => setValue(e.target.value)} 
            placeholder='Введите сообщение' 
            size='large' />
            <div className='chat-input__actions'>
                <Button type='ghost' shape='circle' icon='camera'/>
                {value ? <Button type='ghost' shape='circle' icon='arrow-right'/> : <Button type='ghost' shape='circle' icon='audio'/>}
            </div>
        </div>
    )

}

export default ChatInput