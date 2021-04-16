import React, { useState } from 'react'
import pop from '../img/popup.png'
import logo from '../img/logo-prep.svg'
import axios from 'axios';
import { Button, Nav, Navbar,Modal } from 'react-bootstrap'



export default function Navhead() {
  var current = new Date();
  const [data, setdata]=useState({name:'', number:'', time:`${current}` 
})
const [open, setOpen] = useState(false);
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
            (data.number>4000000000 && data.number<9999999999)&&
            submitHandler(e);
            (data.number>4000000000 && data.number<9999999999)?
              handleShow1():(alert("Invalid Format of number"))

          }} type="submit">
            Submit
          </button>
        </Modal.Footer>
        
        
      </Modal>



      
     
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
            <img style={{zIndex:'-1', marginLeft:'-50%'}} width="500" src={pop}></img>
       
   
</Modal.Body>        
        
      </Modal>
      </div>
       <div className="nav1">
      <Navbar style={{fontSize:'1.5rem',backgroundColor:"white",display:"flex", justifyContent:"space-evenly", margin:"0 auto", paddingRight:"15vw",paddingLeft:"15vw", paddingTop:'3vh'}} fixed="top" expand="lg">
  <Navbar.Brand href="#home">{<img width="70" src={logo}></img>}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
  <div style={{display:"flex", justifyContent:"space-evenly", color:"black",alignItems:"center", marin:"0 auto", width:"100%"}}>
     <Nav.Link   href="#expert" style={{color:"black"}}>Experts</Nav.Link>
     <Nav.Link   href="#plans" style={{color:"black"}}>Plans</Nav.Link>
     <Nav.Link   href="#details" style={{color:"black"}}>Details</Nav.Link>
  </div>   
  </Navbar.Collapse>
  <Button onClick={handleShow} style={{backgroundColor:" #f9bb85", borderColor:"transparent", fontSize:"1.5rem", width:"fit-content", 
 boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.05)'}}>Talk To Us</Button>
</Navbar>
</div>
<div className="nav2">

<Navbar style={{backgroundColor:"white",display:"flex", fontSize:"1rem",justifyContent:"space-between", margin:"0 auto",  paddingTop:'1vh'}} fixed="top" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse  id="basic-navbar-nav" >
   <Nav ><Nav.Link   href="#expert" style={{color:"black"}}>Experts</Nav.Link>
     <Nav.Link  href="#plans" style={{color:"black"}}>Plans</Nav.Link>
     <Nav.Link  href="#details" style={{color:"black"}}>Details</Nav.Link>
     </Nav>  
  </Navbar.Collapse>
  <Navbar.Brand href="#home">{<img width="50" style={{marginLeft:'20%'}}src={logo}></img>}</Navbar.Brand>
  <Button onClick={handleShow}style={{backgroundColor:" #f9bb85", borderColor:"transparent", fontSize:"1rem", width:"fit-content", 
 boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.05)'}}>Talk To Us</Button>
</Navbar>
</div>
      </div>
    )
}
 
