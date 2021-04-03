import React from 'react'
import one from '../img/one.png';
import two from '../img/two.png';
import three from '../img/three.png';

function Herosection() {
    return (
        <div className="hero" id="home" >
            <div >
             <div className="heading1"><p>India's Most Promising Job Site</p></div>
      <div className="heading2"><p>Simple 15 Days <br></br>To Get Your First Job</p></div>
      <div className="headertop">
        <div className="number"><input className="number-in" placeholder="Enter Your Number to Get Started"></input><button className="bt-in"><p>Go</p></button></div>
        </div>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',zIndex:'1', margin:'60px 0 0 0'}}>
        <img width="347.4px" height="260.7px" src={one} style={{position:"absolute", zIndex:'-1', marginTop:'-150px', marginLeft:'-160px'}}></img>
         <img width="347.4px" height="260.7px" src={two} style={{position:"absolute", zIndex:'1',marginTop:'-40px' }}></img>
        <img width="347.4px" height="260.7px" src={three} style={{position:"absolute", zIndex:'1', marginTop:'80px', marginLeft:'-160px'}}></img> 
        </div>

            
        </div>
    )
}

export default Herosection
