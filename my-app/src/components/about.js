import React from 'react'
import bgelement4 from '../img/bg-element2.svg';
import bgelement5 from '../img/bg-element3.svg';
import bgelement1 from '../img/bg-element1.svg';
import bgelement2 from '../img/bg-element4.svg';

import how1 from '../img/how-one.png';
import how2 from '../img/how-two.png';
import how3 from '../img/how-three.png';
import how4 from '../img/how-four.png';
import how5 from '../img/how-five.png';

function About() {
    return (
        <div>
            
        <div>
          <img  
          style={{maxHeight:'20rem',maxWidth:'15rem',zIndex:'-1',position:'absolute', marginTop:'-6rem'}} 
          src={bgelement1}></img> 
          <div className="heading5"><p> How we Make <br></br>a Difference</p></div>
          
          <div className="header"><img 
          src={bgelement4}></img>
          <img 
          style={{marginTop:'-7rem'}} 
          src={bgelement4}></img>
          </div>
          </div>
          <div className="about">
           <div className="grid2">
        <div className="grid-1" ><img  style={{marginTop:'-5.5rem'}} src={how1}></img><div><p>Guaranteed Job Placement</p></div></div>
        <div className="grid-2" ><img src={how4} style={{marginTop:'-8rem', zIndex:'1'}}  ></img><div><p>Expert Curated Programs</p></div></div>
        <div className="grid-3"><img  src={how2} style={{marginTop:'-8rem'}}></img><div><p>Free Interview Preparation Toolkit</p></div></div>
        </div>
         <div className="grid20" >
        <div className="grid-4" ><img  style={{marginTop:'-8rem'}} src={how5} ></img><div><p>Assured Moneyback On Promise Break</p></div></div>
        <div className="grid-6" ><img   src={how3} style={{marginTop:'-10rem'}}></img><div><p>One to One Assistance</p></div></div>
        </div> 
         <div >
          <img id="plans" src={bgelement5} style={{position:'absolute',marginLeft:'-15vw',marginTop:'-10rem',width:'40vw', zIndex:'-1'}}></img>
          <img src={bgelement2} style={{position:'absolute',marginTop:'4rem',marginLeft:'15vw',width:'40vw', zIndex:'-1'}}></img>
          </div> 
        </div>
            
        </div>
    )
}

export default About
