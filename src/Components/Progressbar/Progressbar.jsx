import React from 'react'
import './style.css'
export default function Progressbar({ value, img }) {
  return (
    <div className='progressbar'>
      <div className='progress-cont'>
        <div className='real-progress'>
        
        </div>
        <div className='sudo-progress'>
            <div className='percent-dots'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='icon-mover'>
                <img src={img} alt='selected currency icon'/>
            </div>
        </div>
      </div>
      <div className='progress-indicator'>
        <span>min</span>
        <span>25%</span>
        <span>75%</span>
        <span>max</span>
      </div>
    </div>
  )
}
