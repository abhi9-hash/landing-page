import React from 'react'
import bgelement5 from '../img/bg-element3.svg';
import expert1 from '../img/expert1.jpg';
import expert2 from '../img/expert2.webp';
import expert3 from '../img/expert3.webp';

function Experts() {
    return (
        <div>
                  <div className="heading6" id="expert"><p > Meet Our Experts</p></div>
      <div><img className="img9" src={bgelement5} style={{width:'35%', marginBottom:'-15rem',marginLeft:'57%',zIndex:'-1'}}></img> 
          </div>

     <div className="grid5">
        <div className="grid15" >
          <div className="div">
            <div style={{height:'12rem',width:'12rem',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center', position:'sticky', marginBottom:'1rem', marginTop:'-10rem'}}><img style={{height:'12rem',width:'12rem',borderRadius:'50%'}}src={expert1}></img>
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
            <div style={{height:'12rem',width:'12rem',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center', position:'sticky', marginBottom:'1rem', marginTop:'-10rem'}}><img style={{height:'12rem',width:'12rem',borderRadius:'50%'}}src={expert2}></img>
            </div>
            <h2 style={{
  fontFamily: 'Montserrat, sans-serif'}}>Pankaj Pandey</h2>
            <h5 style={{
  fontFamily: 'Montserrat, sans-serif'}}>Senior Manager, ICICI Lomabrd General Insurance  </h5>
            <h5 style={{
  fontFamily: 'Montserrat, sans-serif'}}><a color="white" href="https://www.linkedin.com/in/02pankaj93/"><i style={{transform:'scale(1.5)'}}  class="linkedin alternate icon"></i></a></h5>
            </div>
            
            </div>
            <div className="grid35" >
            <div className="div">
            <div style={{height:'12rem',width:'12rem',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'sticky', marginBottom:'1rem', marginTop:'-10rem'}}>< img style={{height:'12rem',width:'12rem',borderRadius:'50%'}}src={expert3}></img>
            </div>
            <h2 style={{
  fontFamily: 'Montserrat, sans-serif'}}>Rachna Kakkar</h2>
            <h5 style={{
  fontFamily: 'Montserrat, sans-serif'}}>Certified Career Coach & Communication Expert  </h5>
            <h5 style={{
  fontFamily: 'Montserrat, sans-serif'}}><a color="white" href="https://www.linkedin.com/in/rachnakacker/"><i style={{transform:'scale(1.5)'}} class="linkedin alternate icon"></i></a></h5>
            </div>
            
            </div>
        </div>   
            
        </div>
    )
}

export default Experts
