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
      <div className="heading2"><p>Master the art of Sales in 15 days<br></br>and get a Guaranteed Job</p></div>
      <div className="headertop">
        <div className="number"><input type="tel"   className="number-in" placeholder="Enter Your Number" onChange={(e)=>((setdata({...data,number:e.target.value})))}></input>
        <button onClick={(e)=>{          
            (data.number>4000000000 && data.number<9999999999)&&
            submitHandler(e)
           

          }} onClick={(e)=>(
              (data.number>4000000000 && data.number<9999999999)?
              handleShow1():(alert("Invalid Format of number"))
          )} className="bt-in" ><p>Start</p></button></div>


          


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
            <img style={{zIndex:'-1', marginLeft:'-50%'}} width="500"src={pop}></img>
       
   
</Modal.Body>        
        
      </Modal>
      </div>
        </div>
        </div>
        <div className="hero2">
        <img  src={one} style={{position:"absolute", zIndex:'-1', marginTop:'-9rem', marginLeft:'-8rem', width:"40vh" ,height:"auto"}}></img>
         <img  src={two} style={{position:"absolute", zIndex:'-1',marginTop:'-2rem',width:"40vh" ,height:"auto" }}></img>
        <img  id="about" src={three} style={{position:"absolute", zIndex:'-1', marginTop:'80px', marginLeft:'-8rem', width:"40vh" ,height:"auto"}}></img> 
        </div>
            
        </div>
    )
}

export default Herosection
