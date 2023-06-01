import React from "react"
import "./message.css"
import {format} from "timeago.js"

const Message = ({message, own}) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className='messageTop'>
        <img
          src='https://images.pexels.com/photos/3861437/pexels-photo-3861437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='messageImg'
        />
        <p className='messageText'>{message.text}</p>
      </div>
      <div className='messageBottom'>{format(message.createdAt)}</div>
    </div>
  )
}

export default Message
