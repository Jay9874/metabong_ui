import React from 'react'
import './style.css'
export default function Button ({ img, text }) {
  return (
    <div className='web3-id-container'>
      <div className='id-title'>
        <p>{text}</p>
      </div>
      <div className='id-logo'>
        <img src={img} alt='Connect your wallet' />
      </div>
    </div>
  )
}
