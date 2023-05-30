import React from "react"
import Topbar from "../../components/topbar/Topbar"
import "./messenger.css"

const Messenger = () => {
  return (
    <>
      <Topbar />
      <div className='messenger'>
        <div className='chatMenu'>
          <div className='chatMenuWrapper'>
            <input type='text' className='chatMenuInput' placeholder='' />
          </div>
        </div>
        <div className='chatBox'>
          <div className='chatBoxWrapper'></div>
        </div>
        <div className='chatOnline'>
          <div className='chatOnlineWrapper'>online</div>
        </div>
      </div>
    </>
  )
}

export default Messenger
