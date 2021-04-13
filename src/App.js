
import './App.css';
import axios from 'axios';

import pop from './img/popup.png'

import 'semantic-ui-css/semantic.min.css';
import {  Form, Container} from 'semantic-ui-react';
import {Modal} from 'react-bootstrap';
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
  var current = new Date();
  const [data, setdata]=useState({name:'', number:'', time:`${current}`
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
    <div className="App">
      <Navhead/>
      <Herosection/> 
     <Jobs/>
     <div className="heading4" style={{marginBottom:'5rem'}} > 
        <button className="heading4-bt"  onClick={handleShow} style={{boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.05)'}}><p> Get Your Next Job Now! </p></button>
        </div>
      <About/>
     <Plans/>    
     
     <div className="heading4"  id="details"> <button onClick={handleShow} className="heading4-bt"><p>Get Your Next Job Now!</p></button></div>
     <Modal  
        style={{ backgroundColor:'transparent',borderRadius:'50px'}}
      show={show} onHide={handleClose} size="sm"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              className="modal"
              bsPrefix="bp"
              backdrop={false}

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
            <img style={{zIndex:'-1', marginLeft:'-30%'}} width="350"src={pop}></img>
       
   
</Modal.Body>        
        
      </Modal>
      </div>
      

     <Details/> 
        <div style={{marginTop:'10px'}} className="heading4"> <button onClick={handleShow} className="heading4-bt"><p>Get Your Next Job Now!</p></button></div>
     
     
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
