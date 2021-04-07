import React from 'react'
import bgelement5 from '../img/bg-element3.svg';
import expert1 from '../img/expert1.jpg';
import expert2 from '../img/expert2.jpg';
import expert3 from '../img/expert3.jpg';

function Experts() {
    return (
        <div>
                  <div className="heading6"><p > Meet Our Experts</p></div>
      <div><img className="img9" src={bgelement5} style={{maxWidth:'45vw',position:'absolute', marginTop:'-200px',marginLeft:'7%',zIndex:'-1'}}></img> 
          </div>

     <div className="grid5">
        <div className="grid15" >
          <div className="div">
            <div style={{height:'15rem',width:'15rem',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'20px', marginBottom:'30rem'}}><img style={{height:'15rem',width:'15rem',borderRadius:'50%'}}src={expert1}></img>
            </div>
            <h2 style={{
  fontFamily: 'Montserrat, sans-serif'}}>Akansha Bajaj </h2>
            <h5 style={{
  fontFamily: 'Montserrat, sans-serif'}}>Head of Business Development, OYO rooms</h5>
            <h5 style={{
  fontFamily: 'Montserrat, sans-serif'}}><a  color="white" href="https://www.linkedin.com/in/akansha-bajaj-022a75113"><i style={{transform:'scale(1.5)'}} class="linkedin alternate icon"></i></a> </h5>
            </div>
            
            </div>
            <div className="grid25" >
            <div className="div">
            <div style={{height:'15rem',width:'15rem',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'20px', marginBottom:'30rem'}}><img style={{height:'15rem',width:'15rem',borderRadius:'50%'}}src={expert2}></img>
            </div>
            <h2 style={{
  fontFamily: 'Montserrat, sans-serif'}}>Pankaj Pandey</h2>
            <h5 style={{
  fontFamily: 'Montserrat, sans-serif'}}>ICICI Lomabrd General Insurance  </h5>
            <h5 style={{
  fontFamily: 'Montserrat, sans-serif'}}><a color="white" href="https://www.linkedin.com/in/02pankaj93/"><i style={{transform:'scale(1.5)'}}  class="linkedin alternate icon"></i></a></h5>
            </div>
            
            </div>
            <div className="grid35" >
            <div className="div">
            <div style={{height:'15rem',width:'15rem',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'20px', marginBottom:'30rem'}}>< img style={{height:'15rem',width:'15rem',borderRadius:'50%'}}src={expert3}></img>
            </div>
            <h2 style={{
  fontFamily: 'Montserrat, sans-serif'}}>Rachna Cacker</h2>
            <h5 style={{
  fontFamily: 'Montserrat, sans-serif'}}>Career & Resume Specialist, Communication Expert  </h5>
            <h5 style={{
  fontFamily: 'Montserrat, sans-serif'}}><a color="white" href="https://www.linkedin.com/in/rachnakacker/"><i style={{transform:'scale(1.5)'}} class="linkedin alternate icon"></i></a></h5>
            </div>
            
            </div>
        </div>   
            
        </div>
    )
}

export default Experts
