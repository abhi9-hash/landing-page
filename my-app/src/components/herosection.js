import React, { useState } from 'react'
import one from '../img/one.png';
import two from '../img/two.png';
import three from '../img/three.png';
import axios from 'axios';
import pop from '../img/popup.png'
import { Modal } from 'react-bootstrap';


function Herosection() {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

    const [data, setdata]=useState({name:'', number:''})
    function submitHandler (e) {
        e.preventDefault();
        console.log(data);
        axios.post('https://sheet.best/api/sheets/8f6e7f37-8126-4fda-ac72-a490ca0dd6e0', data)
        .then(response => {
          console.log(response);
        })
      }
    return (
        <div className="hero" id="home" >
            <div className="hero1" >
             <div className="heading1"><p>India's Most Promising Job Site</p></div>
      <div className="heading2"><p>Simple 15 Days <br></br>To Get Your First Job</p></div>
      <div className="headertop">
        <div className="number"><input type="tel" pattern="[5-9]{3}[0-9]{3}[0-9]{4}" className="number-in" placeholder="Enter Your Number to Get Started" onChange={(e)=>(setdata({...data,number:e.target.value}))}></input><button onClick={(e)=>{
            submitHandler(e);

          }} className="bt-in" onClick={handleShow1}><p>Go</p></button></div>


          


      <div   onClick={handleClose1}>
     <Modal 
        style={{ backgroundColor:'transparent',borderRadius:'50px', background:'transparent'}}
      show={show1} onHide={handleClose1} size="lg"
              centered
              className="modal1 "
              aria-labelledby="contained-modal-title-vcenter"
              backdropClassName="backdrop-transparent"
              backdrop={false}
            

              > 
        <Modal.Body> 
            <img style={{zIndex:'-1', marginLeft:'-10%'}} width="300"src={pop}></img>
       
   
</Modal.Body>        
        
      </Modal>
      </div>
        </div>
        </div>
        <div className="hero2" style={{display:'flex', justifyContent:'center', alignItems:'flex-start',zIndex:'-1'}}>
        <img width="22rem" height="16rem" src={one} style={{position:"absolute", zIndex:'-1', marginTop:'-9rem', marginLeft:'-10rem', width:"22rem" ,height:"16rem"}}></img>
         <img  src={two} style={{position:"absolute", zIndex:'-1',marginTop:'-2rem', marginLeft:'-2rem',width:"22rem" ,height:"16rem" }}></img>
        <img  id="about" src={three} style={{position:"absolute", zIndex:'-1', marginTop:'80px', marginLeft:'-10rem', width:"22rem" ,height:"16rem"}}></img> 
        </div>
            
        </div>
    )
}

export default Herosection
