import React from 'react'
import '../App.css';
import graph from './images/immigrant-graph.png';

function Graphs() {
    return (
    <div className='graphs-container'>
      <h1>PRE-WAR STATISTICS</h1>
      <img src={graph} alt='immigrant-graph'/>
    </div>
    )
  }
  

export default Graphs