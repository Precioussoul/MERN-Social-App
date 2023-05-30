import React from "react"
import "./conversation.css"

const Conversation = () => {
  return (
    <div className='conversation'>
      <img
        src='https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
        className='conversationImg'
      />
      <span className='conversationName'>John Doe</span>
    </div>
  )
}

export default Conversation
