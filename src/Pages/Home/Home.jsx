import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './style.css'
import Discord from '../../Components/Discrod/Discord'
import Button from '../../Components/Button/Button'
import Transaction from '../../Components/Transaction/Transaction'
import Logo from '../../Components/Logo/Logo'
export default function Home() {
  const [isActive, setIsActive] = useState(false)
  setTimeout(() => {
    setIsActive(!isActive)
  }, 2000);
  return (
    <main>
      <div className='hero'>
        <div className='hero-text-cont'>
          <span>
            <span id='holding'>Holding</span>
            {'  '}
            <span id='awesome'>
              isn't just a flex, <span />
              <br />
              <span className='centered-strategy'>
                it is a <span id='strategy'>Strategy</span>
              </span>
            </span>
          </span>
        </div>
        <div className='hero-action-cont'>
          <Discord />
          <Button text='Launch app' img='/icons/launch.svg' />
        </div>
        <div className='transaction-animation'>
          <div className={`transactions-assets-cont ${!isActive ? 'active' : ''}`}>
            <Transaction />
          </div>
        </div>
        <div className='animation-overlay'>
          <div className='main-asset-cont'>
            <div className={`asset-logo-cont ${isActive ? 'active' : ''}`}>
              <Logo />
            </div>
            <div className={`asset1 ${isActive ? 'active' : ''}`}>
              <img src='/icons/asset1.svg' alt='asset 1' />
            </div>
            <div className={`asset2 ${isActive ? 'active' : ''}`}>
              <img src='/icons/asset2.svg' alt='asset 2' />
            </div>
            <div className={`asset3 ${isActive ? 'active' : ''}`}>
              <img src='/icons/asset3.svg' alt='asset 3' />
            </div>
            <div className={`asset4 ${isActive ? 'active' : ''}`}>
              <img src='/icons/asset4.svg' alt='asset 4' />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
