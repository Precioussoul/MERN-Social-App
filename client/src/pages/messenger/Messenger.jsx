import React from "react"
import Topbar from "../../components/topbar/Topbar"

const Messenger = () => {
  return (
    <>
      <Topbar />
      <div className='messenger'>
        <div className='chatMenu'>
          <div className='chatMenuWrapper'></div>
        </div>
        <div className='chatBox'></div>
        <div className='chatOnline'></div>
      </div>
    </>
  )
}

export default Messenger
