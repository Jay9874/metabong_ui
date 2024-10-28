import React from 'react'
import Discord from '../Discrod/Discord'
import './style.css'
import Button from '../Button/Button'
export default function Navbar () {
  return (
    <main className='navbar'>
      <div className='navbar-container'>

        {/* Company Branding */}
        {/* <div className='navbar-short'> */}
          <div className='navbar-main-container'>
            <div className='brand'>
              <div className='brand-logo'>
                <img src='/icons/logo.svg' alt='Company Logo' />
              </div>
              <div className='brand-title'>
                <h2 className='brand-title-heading'>Vault</h2>
              </div>

              {/* Navbar Links Structure */}
              <div className='navbar-links'>
                <div className='navlink link-home'>
                  <div className='home-img'>
                    <img src='/icons/home.svg' alt='home link' />
                  </div>
                  <div className='home-link-title'>
                    <h4>Home</h4>
                  </div>
                </div>
                <div className='navlink link-admin'>
                  <div className='admin-img'>
                    <img src='/icons/admin.svg' alt='admin link' />
                  </div>
                  <div className='admin-link-title'>
                    <h4>Admin</h4>
                  </div>
                </div>
                <div className='navlink link-analytics'>
                  <div className='analytics-img'>
                    <img src='/icons/analytics.svg' alt='analytics link' />
                  </div>
                  <div className='analytics-link-title'>
                    <h4>Analytics</h4>
                  </div>
                </div>
                <div className='navlink link-guide'>
                  <div className='guide-img'>
                    <img src='/icons/guide.svg' alt='guide link' />
                  </div>
                  <div className='guide-link-title'>
                    <h4>Guide</h4>
                  </div>
                </div>
                <div className='navlink link-about'>
                  <div className='about-img'>
                    <img src='/icons/about.svg' alt='about link' />
                  </div>
                  <div className='about-link-title'>
                    <h4 style={{ paddingBottom: '.125rem' }}>About</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Navbar Action buttons */}
          </div>
        {/* </div> */}
        <Discord/>
       <Button text='Connect Wallet' img='/icons/wallet.svg'/>
      </div>
    </main>
  )
}
