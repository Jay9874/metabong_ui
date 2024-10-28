import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './style.css'
import Discord from '../../Components/Discrod/Discord'
import Button from '../../Components/Button/Button'
import Transaction from '../../Components/Transaction/Transaction'
import Logo from '../../Components/Logo/Logo'
export default function Home () {
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
          <div className='transactions-assets-cont'>
            <Transaction />
          </div>
          <div className='transaction-overlay'>
            <Logo />
          </div>
        </div>
      </div>
    </main>
  )
}
