import React from "react"
import Topbar from "../../components/topbar/Topbar"
import "./messenger.css"
import Conversation from "../../components/conversation/Conservation"

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
              placeholder='Search for friends'
            />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className='chatBox'>
          <div className='chatBoxWrapper'>
            <div className='chatBoxTop'></div>
          </div>
        </div>
        <div className='chatOnline'>
          <div className='chatOnlineWrapper'>online</div>
        </div>
      </div>
    </>
  )
}

export default Messenger
