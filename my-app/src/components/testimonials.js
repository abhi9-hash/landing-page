import React from 'react'
import test from '../img/test.png';
import Carousel from 'react-elastic-carousel';
import bgelement3 from '../img/bg-element6.svg';
import bgelement5 from '../img/bg-element3.svg';
import {caraousel} from 'bootstrap'

function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
             <div style={{marginTop:'-40px'}} className="heading5"><p> Testimonials</p></div>
       <div><img className="img7" src={bgelement5} style={{maxWidth:'30vw',position:'absolute', marginTop:'-180px',marginLeft:'-650px',zIndex:'-1'}}></img> 
        <img className="img8" src={bgelement3} style={{maxWidth:'30vw',position:'absolute', marginTop:'-500px',zIndex:'-1',marginLeft:'-700px'}}></img> 
        </div>
            
         <div className="cr" style={{
         
         width:'95%', margin:'1rem auto'}}>
               <Carousel className="carousel" style={{
                
                width:'95%', margin:'0 auto'}} >
                     <item>
                   <div style={{width:'80%', height:'100%', margin:'0 auto',}}>
                     <img width='80%' height='85%' style={{ borderRadius:'50px',marginTop:'20px'}} src={test}></img>
                   </div>
                 </item>
                 <item>
                   <div style={{width:'80%', height:'100%', margin:'0 auto',}}>
                     <img width='80%' height='85%' style={{ borderRadius:'50px',marginTop:'20px'}} src={test}></img>
                   </div>
                 </item>
                 <item>
                   <div style={{width:'80%', height:'100%', margin:'0 auto',}}>
                     <img width='80%' height='85%' style={{ borderRadius:'50px',marginTop:'20px'}} src={test}></img>
                   </div>
                 </item>
                </Carousel>
       
             </div>
             <div className="detailsslide" style={{marginTop: '5rem', width:'100%'}}>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img width="300" class="d-block w-100" style={{ borderRadius:'50px',marginTop:'20px'}} src={test} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img  width="300" class="d-block w-100" style={{ borderRadius:'50px',marginTop:'20px'}} src={test} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img  width="300" class="d-block w-100" style={{ borderRadius:'50px',marginTop:'20px'}} src={test} alt="Third slide"/>
    </div>
  </div>
 
</div>
</div>
        </div>
    )
}

export default Testimonials
