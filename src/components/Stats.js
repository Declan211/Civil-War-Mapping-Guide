import React from 'react'
import graph from './images/Battles-Scatter-Graph.png'
import graph2 from './images/Casualties-Graph.png'
import './Stats.css'

function Stats() {
  return (
    <div className='stats-container'>
      <img src={graph} alt='battles' width='900' height='600' />
      <img src={graph2} alt='casualties' width='900' height='550' />
    </div>
  )
}

export default Stats