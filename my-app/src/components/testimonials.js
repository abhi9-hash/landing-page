import React from 'react'
import test1 from '../img/test1.png';
import test2 from '../img/test2.png';
import test3 from '../img/test3.png';
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
             <div  className="heading5"><p> Testimonials</p></div>
       <div><img className="img7" src={bgelement5} style={{maxWidth:'30vw',position:'absolute', marginTop:'-180px',marginLeft:'-650px',zIndex:'-1'}}></img> 
        <img className="img8" src={bgelement3} style={{maxWidth:'30vw',position:'absolute', marginTop:'-500px',zIndex:'-1',marginLeft:'-700px'}}></img> 
        </div>
            
         <div className="cr" style={{
         
         width:'95%', margin:'1rem auto'}}>
               <Carousel className="carousel" style={{
                
                width:'95%', margin:'0 auto'}} >
                     <item>
                   <div style={{width:'80%', height:'100%', margin:'0 auto',}}>
                     <img width='80%' height='85%' style={{ borderRadius:'50px',marginTop:'20px'}} src={test1}></img>
                   </div>
                 </item>
                 <item>
                   <div style={{width:'80%', height:'100%', margin:'0 auto',}}>
                     <img width='80%' height='85%' style={{ borderRadius:'50px',marginTop:'20px'}} src={test2}></img>
                   </div>
                 </item>
                 <item>
                   <div style={{width:'80%', height:'100%', margin:'0 auto',}}>
                     <img width='80%' height='85%' style={{ borderRadius:'50px',marginTop:'20px'}} src={test3}></img>
                   </div>
                 </item>
                </Carousel>
       
             </div>
             <div className="detailsslide" style={{margin: '5rem auto', width:'100%'}}>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
    <li style={{background:'rgba(131, 133, 123, .6)',width:'20px',height:'5px', borderRadius:'50%'}}data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
    <li style={{background:'rgba(131, 133, 123, .6)',width:'20px',height:'5px', borderRadius:'50%'}}data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li  style={{background:'rgba(131, 133, 123, .6)', width:'20px',height:'5px',borderRadius:'50%'}}data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" >
 
    <div class="carousel-item active">
      <img width="300" class="d-block w-100" style={{ borderRadius:'50px',marginTop:'20px'}} src={test1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img  width="300" class="d-block w-100" style={{ borderRadius:'50px',marginTop:'20px'}} src={test2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img  width="300" class="d-block w-100" style={{ borderRadius:'50px',marginTop:'20px'}} src={test3} alt="Third slide"/>
    </div>
  </div>
 
</div>
</div>
        </div>
    )
}

export default Testimonials
