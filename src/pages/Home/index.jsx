import React from 'react'
import { Messages, Status, ChatInput } from 'components'
import { Icon, Button } from 'antd'
import { Dialogs } from 'containers'
import './Home.scss'

const Home = () => {
  return (

    <section className='home'>

      <div className='chat'>
        <div className='chat__sidebar'>
          <div className='chat__sidebar-header'>
            <div>
              <Icon type='team' />
              <span>Список диалогов</span>
            </div>
            <Button type='link' shape='circle' icon='form' />
          </div>
          <div className='chat__sidebar-dialogs'>
            <Dialogs
              userId={0}
              items={[
                {
                  text: 'Вы тоже представляете как Дима удивляется своему залупинску',
                  created_at: new Date(2019, 9, 11),
                  user: {
                    _id: 'dablkjal234jn42346234234j4nk23j5',
                    fullname: 'Фёдор федотов',
                    avatar: null,
                  }
                },
                {
                  text: 'тестовый текст',
                  created_at: new Date(2019, 9, 12),
                  user: {
                    _id: '1jslkjal234jn42346234234j4nk23j5',
                    fullname: 'Вася',
                    avatar: null,
                  }
                },
                {
                  text: 'test text',
                  created_at: new Date('October 12, 2019 13:24:00'),
                  user: {
                    _id: 'd95lkjal234jn42346234234j4nk23j5',
                    fullname: 'Алан Тьюринг',
                    avatar: 'http://lamcdn.net/lookatme.ru/post_image-image/h4aTYQl3gS0f0xpB68XcVQ-article.jpg',
                  }
                },
                {
                  text: 'test text',
                  created_at: new Date('October 12, 2019 13:24:00'),
                  user: {
                    _id: 'd95lkjal234jn42346234234j4nk23j5',
                    fullname: 'Алан Тьюринг',
                    avatar: 'http://lamcdn.net/lookatme.ru/post_image-image/h4aTYQl3gS0f0xpB68XcVQ-article.jpg',
                  }
                },
                {
                  text: 'test text',
                  created_at: new Date('October 12, 2019 13:24:00'),
                  user: {
                    _id: 'd95lkjal234jn42346234234j4nk23j5',
                    fullname: 'Алан Тьюринг',
                    avatar: 'http://lamcdn.net/lookatme.ru/post_image-image/h4aTYQl3gS0f0xpB68XcVQ-article.jpg',
                  }
                },
                {
                  text: 'test text',
                  created_at: new Date('October 12, 2019 13:24:00'),
                  user: {
                    _id: 'd95lkjal234jn42346234234j4nk23j5',
                    fullname: 'Алан Тьюринг',
                    avatar: 'http://lamcdn.net/lookatme.ru/post_image-image/h4aTYQl3gS0f0xpB68XcVQ-article.jpg',
                  }
                },
                
                {
                  text: 'test text',
                  created_at: new Date('October 12, 2019 13:24:00'),
                  user: {
                    _id: 'd95lkjal234jn42346234234j4nk23j5',
                    fullname: 'Алан Тьюринг',
                    avatar: 'http://lamcdn.net/lookatme.ru/post_image-image/h4aTYQl3gS0f0xpB68XcVQ-article.jpg',
                  }
                },
                {
                  text: 'test text',
                  created_at: new Date('October 12, 2019 13:24:00'),
                  user: {
                    _id: 'd95lkjal234jn42346234234j4nk23j5',
                    fullname: 'Алан Тьюринг',
                    avatar: 'http://lamcdn.net/lookatme.ru/post_image-image/h4aTYQl3gS0f0xpB68XcVQ-article.jpg',
                  }
                },
                {
                  text: 'test text',
                  created_at: new Date('October 12, 2019 13:24:00'),
                  user: {
                    _id: 'd95lkjal234jn42346234234j4nk23j5',
                    fullname: 'Алан Тьюринг',
                    avatar: 'http://lamcdn.net/lookatme.ru/post_image-image/h4aTYQl3gS0f0xpB68XcVQ-article.jpg',
                  }
                },
                {
                  text: 'Вы тоже представляете как Дима удивляется своему залупинску',
                  created_at: new Date(2019, 9, 11),
                  user: {
                    _id: 'dablkjal234jn42346234234j4nk23j5',
                    fullname: 'Фёдор федотов',
                    avatar: null,
                  }
                },
                {
                  text: 'Вы тоже представляете как Дима удивляется своему залупинску',
                  created_at: new Date(2019, 9, 11),
                  user: {
                    _id: 'dablkjal234jn42346234234j4nk23j5',
                    fullname: 'Фёдор федотов',
                    avatar: null,
                  }
                },
                {
                  text: 'Вы тоже представляете как Дима удивляется своему залупинску',
                  created_at: new Date(2019, 9, 11),
                  user: {
                    _id: 'dablkjal234jn42346234234j4nk23j5',
                    fullname: 'Фёдор федотов',
                    avatar: null,
                  }
                },
              ]} />
          </div>
        </div>
        <div className='chat__dialog'>
          <div className='chat__dialog-header'>
            <div />
            <div className='chat__dialog-header-center'>
              <b className='chat__dialog-header-username'>Алан Тьюринг</b>
              <div className='chat__dialog-header-status'>
                <Status online={false}/>
              </div>
            </div>
            <Button type='link' shape='circle' icon='ellipsis' style={{ fontSize: '22px'}}/>
          </div>
          <div className='chat__dialog-messages'>
            <Messages items={true}/>
           
          </div>
              <div className='chat__dialog-input'>
                <ChatInput />
              </div>
        </div>

      </div>




    </section>
  )
}

export default Home