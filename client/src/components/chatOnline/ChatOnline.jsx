import React from "react"
import "./chatOnline.css"

const ChatOnline = () => {
  return (
    <div className='chatOnline'>
      <div className='chatOnlineFriend'>
        <div className='chatOnlineImgContainer'>
          <img
            src='https://images.pexels.com/photos/9628854/pexels-photo-9628854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='chatOnlineImg'
          />
          <div className='chatOnlineBadge'></div>
        </div>
        <span className='chatOnlineName'>John Doe</span>
      </div>
    </div>
  )
}

export default ChatOnline
