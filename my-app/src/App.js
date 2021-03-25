import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import bgelement1 from './img/bg-element1.svg';
import bgelement2 from './img/bg-element4.svg';
import bgelement3 from './img/bg-element6.svg';
import bgelement4 from './img/bg-element2.svg';
import bgelement5 from './img/bg-element3.svg';
import bgelement6 from './img/bg-element5.svg';
import test from './img/test.png';
import mainbg from './img/main-bg.svg';
import who1 from './img/who-1.svg';
import who2 from './img/who-2.svg';
import who3 from './img/who-3.svg';
import howto1 from './img/howto-1.svg';
import howto2 from './img/howto-2.svg';
import howto3 from './img/howto-3.svg';
import howto4 from './img/howto-4.svg';
import 'semantic-ui-css/semantic.min.css';
import {  Form, Container, Header} from 'semantic-ui-react';
import {Button,Modal} from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import ur from './url'
import Carousel from 'react-elastic-carousel';


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



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="App">
      <div className="heading1"><p>India's Most Promising Job Site</p></div>
      <div className="heading2"><p>Simple 15 Days To Get Your First Job</p></div>
      <div className="headertop">
        <div className="number"><input className="number-in" placeholder="Enter Your Number to Get Started"></input><button className="bt-in">Go</button></div>
        </div>
        <div className="heading3"><p>How To Get Jobs In 4 Easy Steps</p></div>

        <div className="grid1">
        <div className="grid11"><div className="div"><div style={{height:'50px',width:'50px',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'220px', marginBottom:'180px'}}><b style={{fontSize:'xx-large'}}>1</b></div><img className="howto1" src={howto1}></img></div><div><p><b>Enroll in the Program</b></p></div></div>
        <div className="grid22" ><div className="div"><div style={{height:'50px',width:'50px',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'220px', marginBottom:'180px'}}><b style={{fontSize:'xx-large'}}>2</b></div><img className="howto2" src={howto2}></img></div><div><b>Engage with Our Experts</b></div></div>
        <div className="grid33"><div className="div"><div style={{height:'50px',width:'50px',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'220x', marginBottom:'180px'}}><b style={{fontSize:'xx-large'}}>3</b></div><img className="howto3" src={howto3}></img></div><div><b>Excel in our Assessments</b></div></div>
        <div className="grid44"><div className="div"><div style={{height:'50px',width:'50px',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'220px', marginBottom:'180px'}}><b style={{fontSize:'xx-large'}}>4</b></div><img className="howto4" src={howto4}></img></div><div><b>Earn the Job</b></div></div>
        </div>
        <div>
          
        <div className="heading4"><p> Get Your Next Job Now! </p></div>
        <div>
          <img  
          style={{maxHeight:'300px',maxWidth:'200px',zIndex:'-1',position:'absolute', marginTop:'-90px'}} 
          src={bgelement1}></img>
          <div style={{marginTop:'40px'}} className="heading5"><p style={{fontSize:'50px'}}> How we Make a Difference</p></div>
          
          <div className="header"><img 
          src={bgelement4}></img>
          <img 
          style={{marginTop:'-100px'}} 
          src={bgelement4}></img>
          </div>
          </div>
        </div>

        <div>
          <div>
          <img src={bgelement5} style={{position:'absolute',marginLeft:'10vw',marginTop:'300px',width:'20vw', zIndex:'-1'}}></img>
          <img src={bgelement2} style={{position:'absolute',marginBottom:'200px',width:'20vw', zIndex:'-1'}}></img>
          </div>
        <div className="grid2">
        <div className="grid-1" ><b style={{fontSize:'150px',color:'lightgray',zIndex:'-1',borderRadius:'50%', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'200px', marginBottom:'-190px'}}>01</b><div><p>Guaranteed Job Placement</p></div></div>
        <div className="grid-2" ><b style={{fontSize:'150px',color:'lightgray',zIndex:'-1',borderRadius:'50%', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'200px', marginBottom:'-190px'}}>02</b><div><p>Expert Curated Programs</p></div></div>
        <div className="grid-3"><b style={{fontSize:'150px',color:'lightgray',zIndex:'-1',borderRadius:'50%', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'200px', marginBottom:'-190px'}}>03</b><div><p>Free Interview Preparation Toolkit</p></div></div>
        <div className="grid-4" ><b style={{fontSize:'150px',color:'lightgray',zIndex:'-1',borderRadius:'50%', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'200px', marginBottom:'-190px'}}>04</b><div><p>Assured Moneyback On Promise Break</p></div></div>
        <div className="grid-5" ><b style={{fontSize:'150px',color:'lightgray',zIndex:'-1',borderRadius:'50%', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'200px', marginBottom:'-190px'}}>05</b><div><p>Lifetime Partnership</p></div></div>
        <div className="grid-6"><b style={{fontSize:'150px',color:'lightgray',zIndex:'-1',borderRadius:'50%', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'200px', marginBottom:'-190px'}}>06</b><div><p>One to One Assistance</p></div></div>
        </div>
        </div>
        <div className="header" ><img style={{marginTop:'-100px',height:'300px'}} 
          src={bgelement4}></img>
          </div>
        <div className="heading5" style={{width:'100vw'}}>
        <img style={{width:'20vw', zIndex:'-1',position:'absolute',marginLeft:'-40vw'}} src={bgelement6}>
          </img>
          
          <p style={{fontSize:'50px',marginTop:'-100px'}}> Our Plans </p>
        
        <img style={{width:'40vw', zIndex:'-1',position:'absolute'}} src={bgelement5}>
          </img>
          
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginLeft:'20vw'}} src={bgelement4}></img>
        
        <img style={{width:'20vw', zIndex:'-1',position:'absolute'}} src={bgelement1}></img></div>
        
        <div className="grid3">
        <div className="grid1-3"><div><p>Anyone who is looking for a job but not sure which job role to take. Personnels actively looking for job role</p><span>Free</span></div></div>
        <div className="grid2-3" ><div><p>Students about to start their professional journey. Personnels actively looking for job role</p><span>Free</span></div></div>
        <div className="grid3-3"><div><p>Personnels actively looking for job role. Personnels actively looking for job role</p><span>Free</span></div></div>
        </div>
     
     
     <div className="button"> <button onClick={handleShow} className="bt"><p>Register</p></button>
     
     <Modal  show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title ><p Style={{alignText:'center'}}>Register</p></Modal.Title>
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


     <div className="heading6"><p style={{fontSize:'50px', marginTop:'30vh'}}>BDE Course Details</p></div>
       
        <div className="grid4" style={{zIndex:'1'}} >
        <div className="grid1-4"><div><p>Anyone who is looking for a job but not sure which job role to take. Personnels actively looking for job role</p><span><ul><li>🟦</li><li>🟦</li><li>🟦</li><li>🟦</li></ul></span></div></div>
        <div className="grid2-4" ><div><p>Students about to start their professional journey. Personnels actively looking for job role</p><span><ul><li>🟪</li><li>🟪</li><li>🟪</li><li>🟪</li></ul></span></div></div>
        <div className="grid3-4"><div><p>Personnels actively looking for job role. Personnels actively looking for job role</p><span><ul><li> 🟧 </li><li>🟧 </li><li>🟧 </li><li>🟧 </li></ul></span></div></div>
        <div className="grid4-4"><div><p>Personnels actively looking for job role. Personnels actively looking for job role</p><span><ul><li>🟩</li><li>🟩</li><li>🟩</li><li>🟩</li></ul></span></div></div>
           
        </div>
        <div className="header1" style={{position:'absolute', width:'90vw',zIndex:'-1', marginTop:'0vh'}} >
        <img className="img1" src={bgelement6} style={{maxHeight:'40vh',maxWidth:'40vw',zIndex:'-1',marginTop:'-200px'}}></img>
        <img className="img3" src={bgelement4} style={{maxHeight:'40vh',maxWidth:'40vw',zIndex:'-1',marginTop:'-200px',marginLeft:'150px'}}></img>
        <img className="img2" src={bgelement6} style={{maxHeight:'40vh',maxWidth:'40vw',zIndex:'-1',marginTop:'-200px'}}></img>
        </div> 
        <div style={{marginTop:'10px'}} className="button"> <button onClick={handleShow} className="bt"><p>Register</p></button></div>
     
      <div className="heading" style={{paddingTop: '100px'}}><p>Who Is This Course For?</p></div>
       <div className="grid">
        <div >
          <img className="img4" src={who1} style={{position:'absolute', marginTop:'-80px',marginLeft:'-150px',zIndex:'-1'}}></img> 
          <div>Anyone who is looking for a job but not sure which job role to take.</div></div>
        <div >
           <img className="img5" src={who2} style={{position:'absolute', marginTop:'-130px',marginLeft:'110px',zIndex:'1'}}></img> 
          <div>Students about to start their professional journey</div></div>
        <div >
           <img className="img6" src={who3} style={{position:'absolute', marginTop:'-150px',marginLeft:'80px',zIndex:'1'}}></img> 
          <div>Personnels actively looking for job role</div></div>
        </div>
       <div style={{marginTop:'40px',paddingBottom:'40px'}} className="heading5"><p style={{fontSize:'50px'}}> Testimonials</p></div>
       <div><img className="img7" src={bgelement5} style={{maxWidth:'30vw',position:'absolute', marginTop:'-180px',marginLeft:'-650px',zIndex:'-1'}}></img> 
        <img className="img8" src={bgelement3} style={{maxWidth:'30vw',position:'absolute', marginTop:'-180px',zIndex:'-1',marginLeft:'-650px'}}></img> 
        </div>

         <div className="cr" style={{
  display:'flex',
  width:'80%', margin:'0 auto',
   maxHeight:'600px'}}>
        <Carousel className="carousel" >
          <item>
            <div style={{width:'70%', height:'90%', margin:'0 auto', borderRadius:'50px'}}>
              <img width='100%' height='100%'style={{ borderRadius:'50px',marginTop:'40px'}} src={test}></img>
            </div>
          </item>
          <item>
            <div style={{width:'70%', height:'90%', margin:'0 auto', borderRadius:'50px'}}>
              <img width='100%' height='100%' style={{ borderRadius:'50px',marginTop:'40px'}}src={test}></img>
            </div>
          </item>
          <item>
            <div style={{width:'70%', height:'90%', margin:'0 auto',}}>
              <img width='100%' height='100%' style={{ borderRadius:'50px',marginTop:'40px'}} src={test}></img>
            </div>
          </item>
         </Carousel>
      </div>

      
      <div style={{marginTop:'140px',paddingBottom:'40px'}} className="heading6"><p style={{fontSize:'50px'}}> Meet Our Experts</p></div>
      <div><img className="img9" src={bgelement5} style={{maxWidth:'45vw',position:'absolute', marginTop:'-200px',marginLeft:'7%',zIndex:'-1'}}></img> 
          </div>

     <div className="grid5">
        <div className="grid15" >
          <div className="div">
            <div style={{height:'150px',width:'150px',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'20px', marginBottom:'300px'}}><b style={{fontSize:'xx-large'}}>2</b>
            </div>
            <h2>Engage with Our Experts</h2>
            <h5>Engage with Our Experts</h5>
            <h5>Engage with Our Experts</h5>
            </div>
            
            </div>
            <div className="grid25" >
            <div className="div">
            <div style={{height:'150px',width:'150px',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'20px', marginBottom:'300px'}}><b style={{fontSize:'xx-large'}}>2</b>
            </div>
            <h2>Engage with Our Experts</h2>
            <h5>Engage with Our Experts</h5>
            <h5>Engage with Our Experts</h5>
            </div>
            
            </div>
            <div className="grid35" >
            <div className="div">
            <div style={{height:'150px',width:'150px',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'20px', marginBottom:'300px'}}><b style={{fontSize:'xx-large'}}>2</b>
            </div>
            <h2>Engage with Our Experts</h2>
            <h5>Engage with Our Experts</h5>
            <h5>Engage with Our Experts</h5>
            </div>
            
            </div>
        </div>    

     <div style={{marginTop:'140px',paddingBottom:'40px'}} className="heading7"><p style={{fontSize:'50px'}}>FAQs</p></div>
     <div><img className="img9" src={bgelement4} style={{maxWidth:'45vw',position:'absolute', marginTop:'-30%',marginLeft:'-70%',zIndex:'-1'}}></img> 
     </div>   
     <div><img className="img9" src={bgelement4} style={{maxWidth:'30vw',position:'absolute', marginTop:'100px',marginLeft:'15%',zIndex:'-1'}}></img> 
      </div> 
      <div className="faq">
         <div className="in" placeholder="Enter Your Number to Get Started"></div>
         <div className="in" placeholder="Enter Your Number to Get Started"></div>
         <div className="in" placeholder="Enter Your Number to Get Started"></div>
          <div className="in" placeholder="Enter Your Number to Get Started"></div>
         </div>   

         <div style={{marginTop:'200px'}} className="heading7"><p style={{fontSize:'50px'}}>Talk With Our Expert And Get A Job</p></div>
         
         <div style={{marginTop:'10px'}} className="heading7"><p style={{fontSize:'50px'}}>Get Your Doubts Solved</p></div>
         
     <div className="bottom">
    <button style={{marginTop:'50px'}}  className="bt"><p>Contact</p></button>
    </div>

    </div>
  );
}

export default App;
