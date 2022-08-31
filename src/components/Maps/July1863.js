import React from 'react'
import './July1863.css'
import { Link } from 'react-router-dom';
function July1863() {
  return (
    <>
    <div className='jul1863-container'>
        <h1>July 1, 1863</h1>
        <div className='next-prev'>
      <li className='previous'>
              <Link to='./jan-1863' className='nav-links'>
                Previous
              </Link>
            </li>
            <li className='next'>
              <Link to='./jan-1864' className='nav-links'>
                Next
              </Link>
            </li>
    </div>
    </div>
    
    <div className='notes-container'>
    <p>April 30, 1863: Battle of Chancellorsville results in Confederate victory, Army of Northern Virginia
            advances into Pennsylvania
        </p>
        <p>May 18, 1863: Siege of Vicksburg results in Union Victory, Confederacy is split down the Mississippi River</p>
    </div>

    
     </>
  )
}

export default July1863