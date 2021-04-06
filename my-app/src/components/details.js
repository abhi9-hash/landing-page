import React from 'react'
import CD1 from '../img/CD1.png'
import CD2 from '../img/CD2.png'
import CD3 from '../img/CD3.png'
import CD4 from '../img/CD4.png'
import bgelement4 from '../img/bg-element2.svg';
import bgelement6 from '../img/bg-element5.svg';
import {carousel} from 'bootstrap'
function Details() {
    return (
        <div>
            <div className="heading9"><p >BDE Course Details</p></div>
       
       <div className="grid4" style={{zIndex:'1'}} >

      <div className="grid1-4"><img width="100" height="100" src={CD1}></img></div>
       <div className="grid2-4" ><img width="100" height="100"  src={CD2}></img></div>
       <div className="grid3-4"><img width="100" height="100"  src={CD3}></img></div>
       <div className="grid4-4"><img width="100" height="100"  src={CD4}></img></div>
          
       </div>
      
      <div className="detailsslide" style={{marginTop: '5rem', width:'100%'}}>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
    <li style={{background:'rgba(212, 214, 203, .6)',width:'20px',height:'5px', borderRadius:'50%'}}data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
    <li style={{background:'rgba(212, 214, 203, .6)', width:'20px',height:'5px',borderRadius:'50%'}}data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li  style={{background:'rgba(212, 214, 203, .6)',width:'20px',height:'5px', borderRadius:'50%'}}data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li  style={{background:'rgba(212, 214, 203, .6)',width:'20px',height:'5px', borderRadius:'50%'}}data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  
  </ol>
   
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  width="300" style={{borderRadius:'37px'}} src={CD1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img width="300" style={{borderRadius:'37px'}}src={CD2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img  width="300" style={{borderRadius:'37px'}}src={CD3} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img  width="300" style={{borderRadius:'37px'}}src={CD4} alt="Forth slide"/>
    </div>
  </div>
</div>
</div>
       




       <div className="header1" style={{position:'absolute', width:'90vw',zIndex:'-1', marginTop:'0vh'}} >
       <img className="img1" src={bgelement6} style={{maxHeight:'50rem',maxWidth:'50rem',zIndex:'-1',marginTop:'-14rem'}}></img>
       <img className="img3" src={bgelement4} style={{maxHeight:'50rem',maxWidth:'50rem',zIndex:'-1',marginTop:'-14rem',marginLeft:'10rem'}}></img>
       <img className="img2" src={bgelement6} style={{maxHeight:'50rem',maxWidth:'50rem',zIndex:'-1',marginTop:'-14rem'}}></img>
       </div>
        </div>
    )
}

export default Details
