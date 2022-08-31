import React from 'react'
import Map from '../images/Finished-Jan-1861.png'
import './January1861.css'
import { Link } from 'react-router-dom';
function January1861() {
  return (
    <>
    <div className='jan1861-container'>
        <h1>January 1, 1861</h1>
        <div className='next-prev'>
        <li className='previous'>
              <Link to='./' className='nav-links'>
                Previous
              </Link>
            </li>
      <li className='next'>
              <Link to='./jul-1861' className='nav-links'>
                Next
              </Link>
            </li>
    </div>
    </div>
    
    <div className='notes-container'>
       <p>November 6, 1860: Republican Abraham Lincoln elected as President of the United States</p>
       <p>December 20, 1860: South Carolina secedes from the United States</p>
    </div>
    
  
     </>
  )
}

export default January1861