import React, { useState } from 'react'
import './index.css'
export default function Index() {
    const [isSubscribe,setName] = useState(true)

  
  return (
    <div className='container' >
      <h1 className='heading'>Welcome</h1>
      <p className='para'>Thank You! Happy Learning</p>
      <button className='button' onClick={()=>setName(!isSubscribe)}>{isSubscribe ? "subscribe" : "subscribed"}</button>
    </div>
  )
}
