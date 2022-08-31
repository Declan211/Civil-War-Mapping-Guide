import React from 'react'

import './January1864.css'
import { Link } from 'react-router-dom';
function January1864() {
  return (
    <>
    <div className='jan1864-container'>
        <h1>January 1, 1864</h1>
        <div className='next-prev'>
        <li className='previous'>
              <Link to='./jul-1863' className='nav-links'>
                Previous
              </Link>
            </li>
      <li className='next'>
              <Link to='./jul-1864' className='nav-links'>
                Next
              </Link>
            </li>
    </div>
    </div>
    
    <div className='notes-container'>
    <p>July 3, 1863: Battle of Gettysburg: Confederate advance is halted, 51,000 casualties</p>
    <p>September 19, 1863: Battle of Chickamauga, 34,624 casualties</p>
    </div>

     </>
  )
}

export default January1864