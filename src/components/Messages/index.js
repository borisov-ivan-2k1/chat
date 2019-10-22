import React from "react"
import { Empty } from "antd"

import { Message } from "../"

const Messages = ({ items }) => {
  return items ? (
    <div>
      <Message
              avatar='http://lamcdn.net/lookatme.ru/post_image-image/h4aTYQl3gS0f0xpB68XcVQ-article.jpg'
              date='Tue Sep 17 2019 23:19:10'
              audio='https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3'
              
            />
            <Message
              avatar='http://lamcdn.net/lookatme.ru/post_image-image/h4aTYQl3gS0f0xpB68XcVQ-article.jpg'
              text='привет'
              date='Tue Sep 17 2019 23:19:10'
            />
            <Message
              avatar='http://lamcdn.net/lookatme.ru/post_image-image/h4aTYQl3gS0f0xpB68XcVQ-article.jpg'
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
              avatar='http://lamcdn.net/lookatme.ru/post_image-image/h4aTYQl3gS0f0xpB68XcVQ-article.jpg'
              date='Tue Sep 17 2019 23:19:10'
              attachments={[
                {
                  filename: 'image.jpg',
                  url: 'https://source.unsplash.com/250x250/?random=4&nature,water">'
                }
              ]}
            />
            <Message
              avatar='http://lamcdn.net/lookatme.ru/post_image-image/h4aTYQl3gS0f0xpB68XcVQ-article.jpg'
              date='Tue Sep 17 2019 23:19:10'
              isMe={false}
              isReaded={false}
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
    </div>
  ) : (
    <Empty description="Откройте диалог" />
  );
};

export default Messages