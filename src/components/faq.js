import React from 'react'
import bgelement4 from '../img/bg-element2.svg';

function Faq() {
    return (
        <div>
            
     <div  className="heading8"><p >FAQs</p></div>
     <div><img className="img9" src={bgelement4} style={{maxWidth:'45vw',position:'absolute', marginTop:'-30%',marginLeft:'-70%',zIndex:'-1'}}></img> 
     </div>   
     <div><img className="img9" src={bgelement4} style={{maxWidth:'30vw',position:'absolute', marginTop:'100px',marginLeft:'15%',zIndex:'-1'}}></img> 
      </div> 
      <div className="faq">
         <div className="in" placeholder="Enter Your Number to Get Started"></div>
         <div className="in" placeholder="Enter Your Number to Get Started"></div>
         <div className="in" placeholder="Enter Your Number to Get Started"></div>
          <div className="in" placeholder="Enter Your Number to Get Started"></div>
         </div> 
            
        </div>
    )
}

export default Faq
