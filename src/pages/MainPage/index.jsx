import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { Messages, Status, ChatInput, Sidebar } from 'containers'
import { connect } from 'react-redux'

import { dialogsActions } from 'redux/actions'
import './MainPage.scss'

const MainPage = props => {

  const { setCurrentDialogId, user } = props

  useEffect(() => {
    const { pathname } = props.location
    const dialogId = pathname.split('/').pop()
    setCurrentDialogId(dialogId)
  }, [props.location.pathname])

  return (

    <section className='main-page'>
      <div className='messenger'>
        <Sidebar />

        {user && (
          <div className='messenger__dialog'>
            <div />
            <Status />
            <Messages />
            <div className='messenger__dialog-input'>
              <ChatInput />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default withRouter(
  connect(
    ({ user }) => ({ user: user.data }),
    dialogsActions
  )(MainPage)
)
