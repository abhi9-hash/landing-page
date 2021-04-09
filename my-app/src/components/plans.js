import React from 'react'
import bgelement4 from '../img/bg-element2.svg';
import bgelement5 from '../img/bg-element3.svg';
import bgelement6 from '../img/bg-element5.svg';
import bgelement1 from '../img/bg-element1.svg';

function Plans() {
    return (
        <div>
        <div id="plans" className="heading61" style={{width:'100%'}}>
          
        {/* <img style={{marginRight:'20vw',marginLeft:'-40vw',marginTop:'-30rem',width:'40rem', zIndex:'-1'}} 
          src={bgelement4}></img> */}
        <img  style={{width:'30vw', zIndex:'-1',position:'absolute',marginLeft:'-40vw',marginTop:'7rem'}} src={bgelement6}>
          </img>
          
          <p > Our Plans </p>
        
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginTop:'-20rem'}} src={bgelement5}>
          </img>
          
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginLeft:'20vw',marginTop:'-7rem'}} src={bgelement4}></img>
        
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginTop:'-20remx'}} src={bgelement1}></img></div>
        
        <div className="grid3"  >
        <div className="grid1-3">
          <div className='top'>
            <p>● Interactive Live Classes</p>
            <p>● Lifetime Access.</p>
            <p>● Build Resume and Linkedin Profile</p>
            <p>● Placement Tips & Assistance</p>
            <p>● Job Opportunities at Top companies</p> </div>
            <div className="free">
              <p><strike>3,999/-</strike>  1,999/-</p>
              </div>
              </div>
              <div className="grid2-3">
              <div  style={{ borderTopLeftRadius: '30px',
  borderTopRightRadius:' 30px',backgroundColor: '#92ffa9',
  width: '100%'}}>
            <p>Recommended</p>
              </div>
          <div className='top'>
          
          <p>● Interactive Live Classes</p>
            <p>● Lifetime Access.</p>
            <p>● Build Resume and Linkedin Profile</p>
            <p>● Placement Tips & Assistance</p>
            <p>● <b>Job Opportunities at Top companies</b></p>
            <p>● <b>Unlimited Guaranteed Interviews</b></p>
            <p>● Free GD, HR & Technical Interview Practice</p></div>
            <div className="free">
            <p><strike>7,999/-</strike>  3,999/-</p>
              </div>
              </div>
              <div className="grid3-3">
          <div className='top'>
          <p>● Interactive Live Classes</p>
            <p>● Lifetime Access.</p>
            <p>● Build Resume and Linkedin Profile</p>
            <p>● Placement Tips & Assistance</p>
            <p>● Job Opportunities at Top companies</p>
            <p>● <b>1 on 1 Placement Assistance</b></p>
            <p>● <b>Guaranteed Job</b></p>
            <p>● <b>Assured Money Back</b></p>
            <p>● Free GD, HR & Technical Interview Practice</p> </div>
            <div className="free">
            <p><strike>15,999/-</strike>  7,999/-</p>
              </div>
              </div>
       </div>
            
        </div>
    )
}

export default Plans
