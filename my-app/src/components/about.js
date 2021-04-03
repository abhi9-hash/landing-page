import React from 'react'
import bgelement4 from '../img/bg-element2.svg';
import bgelement5 from '../img/bg-element3.svg';
import bgelement1 from '../img/bg-element1.svg';
import bgelement2 from '../img/bg-element4.svg';

import how1 from '../img/how-one.svg';
import how2 from '../img/how-two.svg';
import how3 from '../img/how-three.svg';
import how4 from '../img/how-four.svg';
import how5 from '../img/how-five.svg';

function About() {
    return (
        <div>
            
        <div>
          <img  
          style={{maxHeight:'300px',maxWidth:'200px',zIndex:'-1',position:'absolute', marginTop:'-90px'}} 
          src={bgelement1}></img>
          <div className="heading5"><p> How we Make <br></br>a Difference</p></div>
          
          <div className="header"><img 
          src={bgelement4}></img>
          <img 
          style={{marginTop:'-100px'}} 
          src={bgelement4}></img>
          </div>
          </div>
          <div>
          <div>
          <img src={bgelement5} style={{position:'absolute',marginLeft:'-15vw',marginTop:'-100px',width:'40vw', zIndex:'-1'}}></img>
          <img src={bgelement2} style={{position:'absolute',marginTop:'1000px',marginLeft:'15vw',width:'40vw', zIndex:'-1'}}></img>
          </div>
        <div className="grid2">
        <div className="grid-1" ><img style={{marginLeft:'350px',marginTop:'80px'}} src={how1}></img><div><p>Guaranteed Job Placement</p></div></div>
        <div className="grid-2" ><img src={how4} style={{marginTop:'-100px',marginLeft:'200px'}}></img><div><p>Expert Curated Programs</p></div></div>
        <div className="grid-3"><img src={how2} style={{marginTop:'120px',marginLeft:'10px'}}></img><div><p>Free Interview Preparation Toolkit</p></div></div>
        </div>
        <div className="grid20">
        <div className="grid-4" ><img src={how5} style={{marginTop:'-120px',marginLeft:'-250px'}}></img><div><p>Assured Moneyback On Promise Break</p></div></div>
        <div className="grid-6"><img src={how3} style={{marginTop:'220px',marginLeft:'-600px'}}></img><div><p>One to One Assistance</p></div></div>
        </div>
        </div>
            
        </div>
    )
}

export default About
