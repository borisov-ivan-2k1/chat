import React from 'react'
import orderBy from 'lodash/orderBy'
import { Input, Empty } from 'antd'
import { Dialog } from '../'

import './Dialogs.scss'

const Dialogs = ({ 
  items, 
  userId, 
  onSearch, 
  inputValue, 
  currentDialogId, 
}) =>
   (
    
  <div className='dialogs'>
    <div className='dialogs__search'>
      <Input.Search
        placeholder='Поиск среди контактов'
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items.length ? (
      //поиск по диалогам
      orderBy(items, ['created_at'], ['desc']).map(item => (
        <Dialog 
        key={item._id}  
        isMe={item.author._id === userId}
        userId={userId}
        currentDialogId={currentDialogId}
        partner={item.partner} 
        author={item.author}
        {...item} 
        
        />
      ))
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description='Ничего не найдено'
      />
    )}
  </div>
) 

export default Dialogs