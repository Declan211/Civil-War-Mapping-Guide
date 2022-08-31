import React from 'react'
import './July1865.css'
import { Link } from 'react-router-dom';
function July1865() {
  return (
    <>
    <div className='jul1865-container'>
        <h1>July 1, 1865</h1>
        <div className='next-prev'>
      <li className='previous'>
              <Link to='./jan-1865' className='nav-links'>
                Previous
              </Link>
            </li>
            <li className='next'>
              <Link to='/' className='nav-links'>
                Next
              </Link>
            </li>
    </div>
    </div>
    
    <div className='notes-container'>
        <p>April 9, 1865: Confederate Forces surrender at Appomatox Courthouse</p>
        <p>April 14, 1865: Abraham Lincoln assasinated in Washington D.C.</p>
    </div>

    
     </>
  )
}

export default July1865