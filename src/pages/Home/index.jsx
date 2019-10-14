import React from 'react'
import { Dialogs, Message } from 'components'
import './Home.scss'



const Home = () => {
  console.log(new Date())
  return (

    <section className='home'>
      <p>Список диалогов</p><hr></hr>
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
              _id: 'aeflkjal234jn42346234234j4nk23j5',
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
          }
        ]} />

<p>Виды сообщений</p><hr></hr>

      <Message
        avatar='https://sun9-17.userapi.com/c858128/v858128779/7b09e/NR3-7Ovw_xk.jpg?ava=1'
        date='Tue Sep 17 2019 23:19:10'
        audio='https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3'
        
      />


      <Message 
      avatar='https://sun9-17.userapi.com/c858128/v858128779/7b09e/NR3-7Ovw_xk.jpg?ava=1' 
      text='привет'
      date='Tue Sep 17 2019 23:19:10'
      />
      <Message 
      avatar='https://sun9-17.userapi.com/c858128/v858128779/7b09e/NR3-7Ovw_xk.jpg?ava=1' 
      text='чекай фоточки'
      date='Tue Sep 17 2019 23:19:10'
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=1&nature,water">'
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=2&nature,water">'
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=3&nature,water">'
        }
      ]}
      />
      <Message 
      avatar='https://sun9-17.userapi.com/c858128/v858128779/7b09e/NR3-7Ovw_xk.jpg?ava=1' 
      date='Tue Sep 17 2019 23:19:10'
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/250x250/?random=4&nature,water">'
        }
      ]}
      />
      <Message 
      avatar='https://sun9-59.userapi.com/c851024/v851024451/1bbea9/0yOKm5GMadc.jpg?ava=1' 
      text='привет'
      date='Tue Sep 17 2019 23:19:12'
      isMe={true}
      isReaded={false}
      />
      <Message 
      avatar='https://sun9-17.userapi.com/c858128/v858128779/7b09e/NR3-7Ovw_xk.jpg?ava=1' 
      isTyping={true}
    />

    </section>
  )
}

export default Home