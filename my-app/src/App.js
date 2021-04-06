import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import bgelement1 from './img/bg-element1.svg';
import bgelement2 from './img/bg-element4.svg';
import bgelement3 from './img/bg-element6.svg';
import bgelement4 from './img/bg-element2.svg';
import bgelement5 from './img/bg-element3.svg';
import bgelement6 from './img/bg-element5.svg';
import CD1 from './img/CD1.png'
import CD2 from './img/CD2.png'
import CD3 from './img/CD3.png'
import CD4 from './img/CD4.png'
import pop from './img/popup.png'
import mainbg from './img/main-bg.svg';

import 'semantic-ui-css/semantic.min.css';
import {  Form, Container, Header} from 'semantic-ui-react';
import {Button,Modal, Nav, Navbar} from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import ur from './url'
import Navhead from './components/header.js' 
import Herosection from './components/herosection';
import Jobs from './components/jobs';
import About from './components/about';
import Plans from './components/plans';
import Details from './components/details';
import Coursefor from './components/coursefor';
import Testimonials from './components/testimonials';
import Experts from './components/experts';
import Faq from './components/faq';
import Foot from './components/foot';


const useScript = url => {
  url=ur;

  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

function App() {
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



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="App">
      <Navhead/>
     <Herosection/>
     <Jobs/>
     <div className="heading4"  > 
        <button className="heading4-bt" onClick={handleShow} style={{boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.05)'}}><p> Get Your Next Job Now! </p></button>
        </div>
     <About/>
     <Plans/>    
     
     <div className="button"  id="details"> <button onClick={handleShow} className="bt"><p>Register</p></button></div>
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
      

     <Details/> 
        <div style={{marginTop:'10px'}} className="button"> <button onClick={handleShow} className="bt"><p>Register</p></button></div>
     
     
      <Coursefor/>
      <Testimonials/>    
      <Experts/> 
  <Faq/>
         
<div className="footer">
        <Foot/>
        <div>
    <button style={{marginTop:'50px'}}  onClick={handleShow} className="bottom"><p>Contact</p></button>
    </div>
    </div>

    </div>
  );
}

export default App;
