import React from 'react'
import './July1864.css'
import { Link } from 'react-router-dom';
function July1864() {
  return (
    <>
    <div className='jul1864-container'>
        <h1>July 1, 1864</h1>
        <div className='next-prev'>
            <li className='previous'>
              <Link to='./jan-1864' className='nav-links'>
                Previous
              </Link>
            </li>
            <li className='next'>
              <Link to='./jan-1865' className='nav-links'>
                Next
              </Link>
            </li>
    </div>
    </div>
    
    <div className='notes-container'>
    <p>May 5, 1864: Battle of the Wilderness, 29,800 casualties</p>
    <p>May 8, 1864: Battle of Spotsylvania Courthouse, 30,000 casualties</p>
    </div>

    
     </>
  )
}

export default July1864