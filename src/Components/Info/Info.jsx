import React from 'react'
import './style.css'
export default function Info ({ name, value }) {
  return (
    <div className='vault-fee'>
      <div className='fee-name'>
        <img src='/icons/about.svg' alt='Information icon for vault fee' />
        <p>{name}</p>
      </div>
      <div className='fee-value'>
        <p>{value}%</p>
      </div>
    </div>
  )
}
