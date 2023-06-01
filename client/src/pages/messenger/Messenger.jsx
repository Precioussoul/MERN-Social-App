import React, {useContext, useEffect, useState} from "react"
import Topbar from "../../components/topbar/Topbar"
import "./messenger.css"
import Conversation from "../../components/conversation/Conservation"
import Message from "../../components/message/Message"
import ChatOnline from "../../components/chatOnline/ChatOnline"
import {AuthContext} from "../../context/AuthContext"
import axios from "axios"

const Messenger = () => {
  const [conversations, setConversations] = useState([])

  const {user} = useContext(AuthContext)
  console.log("user", user)

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id)
        setConversations(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getConversation()
  }, [user._id])

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
            <div className='conversationBox'>
              {conversations.map((conversation, index) => (
                <Conversation
                  key={index}
                  conversation={conversation}
                  currentUser={user}
                />
              ))}
            </div>
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
          <div className='chatOnlineWrapper'>
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  )
}

export default Messenger
