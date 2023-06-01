import React, {useEffect, useState} from "react"
import "./conversation.css"
import axios from "axios"

const Conversation = ({conversation, currentUser}) => {
  const [user, setUser] = useState(null)
  const public_folder = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const friendId = conversation.members.find(
      (member) => member !== currentUser._id
    )
    const getUser = async () => {
      try {
        const res = await axios.get("/users?userId=" + friendId)
        console.log("getUser", res)
        setUser(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [conversation, currentUser])

  return (
    <div className='conversation'>
      <img
        src={
          user?.profilePicture
            ? user?.profilePicture
            : public_folder + "/person/noAvatar.png"
        }
        alt=''
        className='conversationImg'
      />
      <span className='conversationName'>{user?.username}</span>
    </div>
  )
}

export default Conversation
