import React from 'react'
import './style.css'
import Info from '../Info/Info'
import Button from '../Button/Button'
import Progressbar from '../Progressbar/Progressbar'
export default function Transaction () {
  return (
    <div className='transaction'>
      <div className='popup-container'>
        <div className='container-1'>
          <div className='action-selector'>
            <div className='deposit'>
              <p>Deposit</p>
            </div>
            <div className='withdraw'>
              <p>Withdraw</p>
            </div>
          </div>
          <div className='slippage'>
            <img src='/icons/settings.svg' alt='slippage icon' />
            <p>Slippage: 0.5%</p>
          </div>
        </div>
        <div className='container-2'>
          <div className='balance'>
            <div className='balance-deposit'>
              <p className='title-in-container'>Deposit</p>
            </div>
            <div className='balance-asset'>
              <p className='title-in-container'>Asset Balance: 0.05 DOGE</p>
            </div>
          </div>
          <div className='input'>
            <div className='balance-in-dollar'>0.00</div>
            <div className='currency-options'>
              <select name='pets' id='pet-select'>
                <option value=''>
                  <img src='/icons/dogecoin.svg' alt='doge coin icon' />
                  DOGE
                </option>
                <option value='dog'>Dog</option>
                <option value='cat'>Cat</option>
                <option value='hamster'>Hamster</option>
                <option value='parrot'>Parrot</option>
                <option value='spider'>Spider</option>
                <option value='goldfish'>Goldfish</option>
              </select>
            </div>
          </div>
          <div className='conversion'>
            <div className='conversion-amount'>
              <p>$ 0</p>
            </div>
            {/* <Progressbar value={25}/> */}
            <progress id='amount' max={100} value={0} />
          </div>
        </div>
        <div className='container-3'>
          <div className='receive'>
            <div className='receive-title'>
              <p className='title-in-container'>Receive</p>
            </div>
            <div className='doge-balance'>
              <p className='title-in-container'>ms DOGE balance: 0.00 DOGE</p>
            </div>
          </div>
          <div className='receive-amount'>
            <div className='amount-net'>
              <p className='balance-in-dollar'>0.00</p>
            </div>
            <div className='amount-currency'>
              <img src='/icons/msdoge.svg' alt='ms doge icons' />
              <p
                style={{ paddingRight: '16px' }}
                className='title-in-container'
              >
                ms DOGE
              </p>
              <img src='/icons/wallet-done.svg' alt='wallet done icon' />
            </div>
          </div>
          <div className='conversion-rate'>
            <p>1 DOGE = 0.80 ms DOGE</p>
          </div>
        </div>
        <div className='container-4'>
          <Info name='Vault fees' value={0.0} />
          <Info name='Platform fees' value={0.0} />
        </div>
        <div className='deposit-btn'>
          <Button text='Deposit' img='/icons/deposit.svg' />
        </div>
      </div>
    </div>
  )
}
