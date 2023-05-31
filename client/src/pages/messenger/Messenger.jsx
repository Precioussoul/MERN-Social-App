import React from "react"
import Topbar from "../../components/topbar/Topbar"
import "./messenger.css"
import Conversation from "../../components/conversation/Conservation"
import Message from "../../components/message/Message"

const Messenger = () => {
  return (
    <>
      <Topbar />
      <div className='messenger'>
        <div className='chatMenu'>
          <div className='chatMenuWrapper'>
            <input
              type='text'
              className='chatMenuInput'
              placeholder='Search for friends...'
            />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className='chatBox'>
          <div className='chatBoxWrapper'>
            <div className='chatBoxTop'>
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
            </div>
            <div className='chatBoxBottom'>
              <textarea
                placeholder='write something...'
                className='chatMessageInput'
              />
              <button className='chatSubmitButton'>Send</button>
            </div>
          </div>
        </div>
        <div className='chatOnline'>
          <div className='chatOnlineWrapper'></div>
        </div>
      </div>
    </>
  )
}

export default Messenger
