import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import bgelement1 from './img/bg-element1.svg';
import bgelement2 from './img/bg-element4.svg';
import bgelement3 from './img/bg-element6.svg';
import who1 from './img/who-1.svg';
import who2 from './img/who-2.svg';
import who3 from './img/who-3.svg';
import 'semantic-ui-css/semantic.min.css';
import {  Form, Container, Header} from 'semantic-ui-react';
import {Button,Modal, ModalHeader, ModalFooter, ModalBody, ModalTitle} from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import ur from './url'

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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <div className="header1">
        <img className="img1" src={bgelement1}></img>
        <img className="img2" src={bgelement2}></img>
        <img className="img3" src={bgelement3}></img>
        </div>
   
     <div className="button"> <button onClick={handleShow} className="bt"><p>Register</p></button>
     <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          {     <Container fluid className="container">
        <Form className="form">
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' onChange={(e)=>(setdata({...data,name:e.target.value}))} />
          </Form.Field>
          <Form.Field>
            <label>Number</label>
            <input placeholder='Enter your contact number' onChange={(e)=>(setdata({...data,number:e.target.value}))} />
          </Form.Field>
        </Form>
      </Container>
}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={(e)=>{
            handleClose();
            submitHandler(e);

          }} type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
     </div>
      <div className="heading"><p>Who Is This Course For?</p></div>
      <div className="img-bg">
        
        
        
      </div>
      <div className="grid">
        <div className="grid1"><img className="img4" src={who1}></img><div><p>Anyone who is looking for a job but not sure which job role to take.</p></div></div>
        <div className="grid2" ><img className="img5" src={who2}></img><div><p>Students about to start their professional journey</p></div></div>
        <div className="grid3"><img className="img6" src={who3}></img><div><p>Personnels actively looking for job role</p></div></div>
        </div>
    </div>
  );
}

export default App;
