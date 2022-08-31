import React from 'react'
import './July1862.css'
import { Link } from 'react-router-dom';
function July1862() {
  return (
    <>
    <div className='jul1862-container'>
        <h1>July 1, 1862</h1>
        <div className='next-prev'>
      <li className='previous'>
              <Link to='./jan-1862' className='nav-links'>
                Previous
              </Link>
            </li>
            <li className='next'>
              <Link to='./jan-1863' className='nav-links'>
                Next
              </Link>
            </li>
    </div>
    </div>
    
    <div className='notes-container'>
        <p>Februrary 11, 1862: Battle of Fort Donelson, 17,398 casualties</p>
        <p>April 6, 1862: Battle of Shiloh, 23,741 casualties</p>
    </div>

    
     </>
  )
}

export default July1862