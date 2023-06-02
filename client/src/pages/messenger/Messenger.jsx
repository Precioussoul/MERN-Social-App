import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import Topbar from "../../components/topbar/Topbar"
import "./messenger.css"
import Conversation from "../../components/conversation/Conservation"
import Message from "../../components/message/Message"
import ChatOnline from "../../components/chatOnline/ChatOnline"
import {AuthContext} from "../../context/AuthContext"
import axios from "axios"
import {io} from "socket.io-client"

const Messenger = () => {
  const [conversations, setConversations] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState(null)
  const socket = useRef(io("ws://localhost:8900"))
  const [newMessage, setNewMessage] = useState("")
  const scrollRef = useRef()
  const {user} = useContext(AuthContext)

  useEffect(() => {
    socket.current.emit("addUser", user._id)
    socket.current.on("getUsers", (users) => {
      console.log("users socket", users)
    })
  }, [user])

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

  useEffect(() => {
    const getMessenger = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id)
        setMessages(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMessenger()
  }, [currentChat])

  console.log("messages", messages)

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      const message = {
        sender: user._id,
        text: newMessage,
        conversationId: currentChat._id,
      }

      try {
        const res = await axios.post("/messages", message)
        setMessages([...messages, res.data])
        setNewMessage("")
      } catch (error) {
        console.log(error)
      }
    },
    [currentChat, messages, newMessage, user]
  )

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: "smooth"})
  }, [messages])

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
              {conversations.map((conversation) => (
                <div
                  onClick={() => setCurrentChat(conversation)}
                  key={conversation._id}
                >
                  <Conversation
                    conversation={conversation}
                    currentUser={user}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='chatBox'>
          <div className='chatBoxWrapper'>
            {currentChat ? (
              <>
                <div className='chatBoxTop'>
                  {messages.map((message) => (
                    <div ref={scrollRef} key={message._id}>
                      <Message
                        message={message}
                        own={message.sender === user._id}
                      />
                    </div>
                  ))}
                </div>
                <div className='chatBoxBottom'>
                  <textarea
                    placeholder='write something...'
                    className='chatMessageInput'
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <button className='chatSubmitButton' onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className='noConversation'>
                Open a conversation to start a chat
              </span>
            )}
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
