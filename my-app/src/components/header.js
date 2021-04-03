import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'


export default function Navhead() {
    return (
        <div style={{width:"100vw", backgroundColor:"white", fontSize:"3vh", height:'10vh',}}>

      <Navbar style={{backgroundColor:"white",display:"flex", justifyContent:"space-evenly", margin:"0 auto", paddingRight:"12vw",paddingLeft:"12vw", paddingTop:'3vh'}} fixed="top" expand="lg">
  <Navbar.Brand href="#home">LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
  <div style={{display:"flex", justifyContent:"space-evenly", color:"black",alignItems:"center", marin:"0 auto", width:"100%"}}>
      <Nav.Link href="#home" style={{color:"black"}}>Home</Nav.Link>
     <Nav.Link href="#about" style={{color:"black"}}>About</Nav.Link>
     <Nav.Link href="#plans" style={{color:"black"}}>Plans</Nav.Link>
     <Nav.Link href="#details" style={{color:"black"}}>Details</Nav.Link>
  </div>   
  </Navbar.Collapse>
  <Button style={{backgroundColor:" #f9bb85", borderColor:"transparent", fontSize:"3vh", width:"fit-content", 
  boxShadow: '5px 10px 18px #888888'}}>Talk To Us</Button>
</Navbar>
      </div>
    )
}
 
