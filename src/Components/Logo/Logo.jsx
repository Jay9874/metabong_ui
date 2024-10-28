import React from 'react'
import './style.css'
export default function Logo () {
  return (
    <div className='logo-cont'>
      <div className='bg-cont'>
        <img
          src='/icons/noise.png'
          alt='Noise in background of logo to feel good'
        />
      </div>
      <div className='logo-img-cont'>
        <img src='/icons/logo.svg' alt='Company Logo' />
      </div>
    </div>
  )
}
