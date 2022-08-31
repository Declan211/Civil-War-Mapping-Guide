import React from 'react'
import '../App.css';
import graph from './images/immigrant-graph.png';
import population from './images/population.png';
import arrows from './images/arrows.png';
import subgraphs from './images/subgraphs.png';
import graphmoney from './images/graph-money.png';
import graphrailroads from './images/graph-railroads.png';
import { Link } from 'react-router-dom';
import { Button } from './Button.js'

function Armies() {
  return (
  <div className='armies-container'>
    <h1>THE ARMY OF NORTHERN VIRGINIA</h1>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Flag_of_the_Confederate_States_of_America_%281861%E2%80%931863%29.svg/255px-Flag_of_the_Confederate_States_of_America_%281861%E2%80%931863%29.svg.png' alt='confederate' />
    <br />
    <p>The principle army of the Confederacy. </p>
    <br />
    <p>"They are rebels and volunteers. They are mostly unpaid and usually self-equipped. 
        It is an army of remarkable unity, fighting for disunion. It is Anglo-Saxon and
        Protestant. Though there are many men who cannot read or write, they all speak English. They share
        common customs and a common faith and they have been consistently victorious against superior
        members. They have as solid a faith in their leader as any veteran army that ever marched."
      </p>
      <p> -Michael Shaara, "The Killer Angels"</p>
      <h1>THE ARMY OF THE POTOMAC</h1>
      <img src= 'https://www.crwflags.com/fotw/images/u/us-1861.gif' width='250' height='150' alt='us-flag' />
      <br />
      <p>The principle army of the Union.</p>
      <br />
      <p>"It is a strange new kind of army, a polyglot mass of vastly dissimilar men, fighting for union.
There are strange accents and strange religions and many who do not speak English at all. Nothing
like this army has been seen upon the planet. It is a collection of men from many different places
who have seen much defeat and many commanders. They are volunteers: last of the great volunteer
armies, for the draft is beginning that summer in the North. They have lost faith in their leaders but
not in themselves."</p>
<p> -Michael Shaara, "The Killer Angels"</p>
<br />
    
    <h1>PRE-WAR STATISTICS</h1>
    <br />
    <img src={population} alt='population' width='800' height='520'/>
    <br />
    <img src={graph} alt='immigrants' width='1100' height='420'/>
    <img src={arrows} alt='arrows' width='1100' height='200' />
    <img src={subgraphs} alt='subgraphs' width='1100' height='370' />
    <img src={graphmoney} alt='graph-money' width='1100' height='400' />
    <br />
    <img src={graphrailroads} alt='graph-railroads' width='1100' height='400' />
    <br />
    <p>The numbers themselves clearly illustrate the stark differences between the two sides - 
      the North being a diverse society booming with growth in both indusry and population, 
      The South being stagnant, stubborn in maintaing its agrarian, slave-possessing, Anglo-Saxon character, 
      clearly over its head in a war against an opponent that surpasses them in nearly every possible
      statisitcal category.
    </p>
    <br />
    <br />
    <p>However, there were two factors swinging in the South's direction that are not quantifiable.</p>
    <br />
    <br />
    <p>The first, is that the South possessed superior military leadership. Commanders such as 
      Robert E. Lee, Stonewall Jackson, and James Longstreet - all having graduated from West Point
      as well as serving in the Mexican-American War - were instrumental in transforming the South's
      numerically inferior army into a faithful, formidable fighting force. Meanwhile, the North would cycle
      through three generals before arriving at Ulysses S. Grant, the man who would end the war.
    </p>
    <br />
    <br />
    <p>Secondly, and most importantly, was that the South was fighting a defensive war. Victory for the
      South would ensue if they simply did not lose a detrimental amount of territory, and thus, victory 
      for the North would only come with a thorough annihilation of the Southern Army.
    </p>
    <br />
    <br />
    <p>
      All this known, the stage is now set for the bloodiest conflict to ever take place on American soil. 
    </p>
    <br />
    <br />
    {<Button buttonSize='btn-large' buttonStyle='btn--outline'>Begin War</Button>}
  </div>
  )
}

export default Armies