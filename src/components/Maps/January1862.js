import React from 'react'

import './January1862.css'
import { Link } from 'react-router-dom';
function January1862() {
  return (
    <>
    <div className='jan1862-container'>
        <h1>January 1, 1862</h1>
        <div className='next-prev'>
        <li className='previous'>
              <Link to='./jul-1861' className='nav-links'>
                Previous
              </Link>
            </li>
      <li className='next'>
              <Link to='./jul-1862' className='nav-links'>
                Next
              </Link>
            </li>
    </div>
    </div>
    
    <div className='notes-container'>
    <p>July 21, 1861: First Battle of Manassas, first major battle of Civil War, 4700 casualties</p>
    </div>
    
     </>
  )
}

export default January1862