import React from 'react'
import Map from '../images/Finished Jul 1861.png'
import './July1861.css'
import { Link } from 'react-router-dom';
function July1861() {
  return (
    <>
    <div className='jul1861-container'>
        <h1>July 1, 1861</h1>
        <div className='next-prev'>
      <li className='previous'>
              <Link to='./jan-1861' className='nav-links'>
                Previous
              </Link>
            </li>
            <li className='next'>
              <Link to='./jan-1862' className='nav-links'>
                Next
              </Link>
            </li>
    </div>
    </div>
    
    <div className='notes-container'>
    <p>January 9 - June 8, 1861: Ten more southern states secede from the Union</p>
    <p>April 12, 1861: Battle of Fort Sumter, first battle of the Civil War</p>
    </div>

    
     </>
  )
}

export default July1861