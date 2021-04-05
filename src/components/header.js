import React, { useState } from 'react'
import pop from '../img/popup.png'
import axios from 'axios';
import { Button, Nav, Navbar, Carousel,Modal } from 'react-bootstrap'

import {  Form, Container, Header} from 'semantic-ui-react';


export default function Navhead() {
  const [data, setdata]=useState({name:'', number:''
})
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleShow = () => setShow(true);
  
  const handleShow1 = () => setShow1(true);
  function submitHandler (e) {
    e.preventDefault();
    console.log(data);
    axios.post('https://sheet.best/api/sheets/8f6e7f37-8126-4fda-ac72-a490ca0dd6e0', data)
    .then(response => {
      console.log(response);
    })
  }
    return (
        <div style={{width:"100vw", backgroundColor:"white", fontSize:"2rem", height:'10vh',}}>
               <Modal  
        style={{ backgroundColor:'transparent',borderRadius:'50px'}}
      show={show} onHide={handleClose} size="sm"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              className="modal"
              bsPrefix="bp"

              >
                  <Modal.Header style={{borderBottomColor:'transparent',textAlign:'center'}} closeButton >
           <Modal.Title style={{width:'100%', margin:'0 auto'}} ><label style={{textAlign:'center',fontSize:'3rem', marginLeft:'10%',justifyContent:'center'}}>Register</label></Modal.Title> 
        </Modal.Header>  
        <Modal.Body > 
          {     <Container fluid className="container">
        <Form className="form" style={{display:'flex',flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
          <Form.Field>
          {/* <label style={{textAlign:'center',fontSize:'30px'}}>Register</label> */}
            <label style={{textAlign:'center',fontFamily: 'Montserrat, sans-serif'}}>Name</label>
            <input style={{ color: "#c4957", borderRadius:'50px', width:'100%',borderColor:'transparent',boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.05)' }} placeholder='Enter your name' onChange={(e)=>(setdata({...data,name:e.target.value}))} />
          </Form.Field>
          <Form.Field>
            <label style={{textAlign:'center',fontFamily: 'Montserrat, sans-serif'}}>Number</label>
            <input style={{ color: "#c4957", borderRadius:'50px', width:'100%',borderColor:'transparent',boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.05)'  }} placeholder='Enter your contact number' onChange={(e)=>(setdata({...data,number:e.target.value}))} />
          </Form.Field>
         
        </Form>
      </Container>
}</Modal.Body>
        <Modal.Footer style={{ justifyContent:'center',color: "#c4957", borderRadius:'50px', borderColor:'transparent', textAlign:'center' }}>
        <button 
        style={{width:'50%'}}
          className="bt"
          onClick={(e)=>{
            handleClose();
            submitHandler(e);
            handleShow1()

          }} type="submit">
            Submit
          </button>
        </Modal.Footer>
        
        
      </Modal>



      
     <Modal  
        style={{ backgroundColor:'transparent',borderRadius:'50px'}}
      show={show1} onHide={handleClose1} size="lg"
              centered
              className="modal1"
              

              > 
        <Modal.Body> 
            <img style={{zIndex:'-1'}} width="300"src={pop}></img>
       
   
</Modal.Body>        
        
      </Modal>
       <div className="nav1">
      <Navbar style={{backgroundColor:"white",display:"flex", justifyContent:"space-evenly", margin:"0 auto", paddingRight:"12vw",paddingLeft:"12vw", paddingTop:'3vh'}} fixed="top" expand="lg">
  <Navbar.Brand href="#home">LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
  <div style={{display:"flex", justifyContent:"space-evenly", color:"black",alignItems:"center", marin:"0 auto", width:"100%"}}>
     <Nav.Link href="#about" style={{color:"black"}}>About</Nav.Link>
     <Nav.Link href="#plans" style={{color:"black"}}>Plans</Nav.Link>
     <Nav.Link href="#details" style={{color:"black"}}>Details</Nav.Link>
  </div>   
  </Navbar.Collapse>
  <Button onClick={handleShow} style={{backgroundColor:" #f9bb85", borderColor:"transparent", fontSize:"2rem", width:"fit-content", 
 boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.05)'}}>Talk To Us</Button>
</Navbar>
</div>
<div className="nav2">

<Navbar style={{backgroundColor:"white",display:"flex", fontSize:"1rem",justifyContent:"space-between", margin:"0 auto",  paddingTop:'3vh'}} fixed="top" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
  <div style={{display:"flex", justifyContent:"space-evenly", color:"black",alignItems:"center", marin:"0 auto", width:"100%"}}>
     <Nav.Link href="#about" style={{color:"black"}}>About</Nav.Link>
     <Nav.Link href="#plans" style={{color:"black"}}>Plans</Nav.Link>
     <Nav.Link href="#details" style={{color:"black"}}>Details</Nav.Link>
  </div>   
  </Navbar.Collapse>
  <Navbar.Brand href="#home">LOGO</Navbar.Brand>
  <Button onClick={handleShow}style={{backgroundColor:" #f9bb85", borderColor:"transparent", fontSize:"1rem", width:"fit-content", 
 boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.05)'}}>Talk To Us</Button>
</Navbar>
</div>
      </div>
    )
}
 
