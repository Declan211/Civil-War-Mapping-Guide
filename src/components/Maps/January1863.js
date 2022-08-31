import React from 'react'

import './January1863.css'
import { Link } from 'react-router-dom';
function January1863() {
  return (
    <>
    <div className='jan1863-container'>
        <h1>January 1, 1863</h1>
        <div className='next-prev'>
        <li className='previous'>
              <Link to='./jul-1862' className='nav-links'>
                Previous
              </Link>
            </li>
      <li className='next'>
              <Link to='./jul-1863' className='nav-links'>
                Next
              </Link>
            </li>
    </div>
    </div>
    
    <div className='notes-container'>
    <p>September 17, 1862: Battle of Antietam, 23,100 casualties</p>
    <p>January 1, 1863: Abraham Lincoln issues the Emancipation Proclomation, freeing slaves in the Confederacy</p>
    </div>
    
  
     </>
  )
}

export default January1863