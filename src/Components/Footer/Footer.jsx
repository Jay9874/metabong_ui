import React from 'react'
import './style.css'
export default function Footer () {
  return (
    <div className='footer'>
      <div className='company'>
        <div className='about'>
          <div className='company-logo'>
            <img src='/icons/logo.svg' alt='company logo' />
            <h1 className='company-name'>Vault</h1>
          </div>
          <div className='company-description'>
            <p>The ultimate platform for turning coins into long-term gains.</p>
            <p>
              Stake, hold, and grow your assets with strategies designed for
              degen investors
            </p>
          </div>
        </div>
        <div className='product-tools'>
          <h2 className='product'>Product</h2>
          <p className='about tool-link'>About product</p>
          <p className='guide tool-link'>Guide</p>
          <p className='discord-channel tool-link'>
            Join Discord <img src='/icons/discord-2.svg' alt='discord-icon' />
          </p>
        </div>
      </div>
      <div className='copyright'>2024 @metaborong all rights reserved</div>
    </div>
  )
}
