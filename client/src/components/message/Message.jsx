import React from "react"
import "./message.css"

const Message = ({own}) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className='messageTop'>
        <img
          src='https://images.pexels.com/photos/3861437/pexels-photo-3861437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='messageImg'
        />
        <p className='messageText'>Hello this is a message</p>
      </div>
      <div className='messageBottom'>1 hour ago</div>
    </div>
  )
}

export default Message
