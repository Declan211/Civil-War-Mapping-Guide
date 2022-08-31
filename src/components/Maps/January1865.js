import React from 'react'

import './January1865.css'
import { Link } from 'react-router-dom';
function January1865() {
  return (
    <>
    <div className='jan1865-container'>
        <h1>January 1, 1865</h1>
        <div className='next-prev'>
        <li className='previous'>
              <Link to='./jul-1864' className='nav-links'>
                Previous
              </Link>
            </li>
      <li className='next'>
              <Link to='./jul-1865' className='nav-links'>
                Next
              </Link>
            </li>
    </div>
    </div>
    
    <div className='notes-container'>
        <p>Novermber 15 - December 8, 1864: Sherman's March to the Sea splits Confederacy into three</p>
    </div>
    
  
     </>
  )
}

export default January1865