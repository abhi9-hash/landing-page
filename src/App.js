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
import test from './img/test.png';
import mainbg from './img/main-bg.svg';
import who1 from './img/who-1.svg';
import who2 from './img/who-2.svg';
import who3 from './img/who-3.svg';
import 'semantic-ui-css/semantic.min.css';
import {  Form, Container, Header} from 'semantic-ui-react';
import {Button,Modal, Nav, Navbar} from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import ur from './url'
import Carousel from 'react-elastic-carousel';
import Navhead from './components/header.js' 
import Herosection from './components/herosection';
import Jobs from './components/jobs';
import About from './components/about';


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
      <Navhead/>
     <Herosection/>
     <Jobs/>
     <About/>

       
        
          <img style={{marginRight:'40vw',marginLeft:'-40vw',marginTop:'-60vh',width:'40vw', zIndex:'-1'}} 
          src={bgelement4}></img>
        <div className="heading6" style={{width:'100vw'}}>
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginLeft:'-40vw',marginTop:'100px'}} src={bgelement6}>
          </img>
          
          <p style={{fontSize:'7.5vh',marginTop:'-500px', marginBottom:'80px', marginLeft:'-20px'}}> Our Plans </p>
        
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginTop:'-300px'}} src={bgelement5}>
          </img>
          
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginLeft:'20vw',marginTop:'-100px'}} src={bgelement4}></img>
        
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginTop:'-300px'}} src={bgelement1}></img></div>
        
        <div className="grid3" id="plans">
        <div className="grid1-3">
          <div className='top'>
            <p>Anyone who is looking for a.</p>
            <p>Personnels actively looking for job role</p>
            <p>Personnels actively looking for job role</p> </div>
            <div className="free">
              <p>Free</p>
              </div>
              </div>
              <div className="grid2-3">
          <div className='top'>
            <p>Anyone who is lookib role to take.</p>
            <p>Personnels actively looking for job role</p> 
            <p>Personnels actively looking for job role</p></div>
            <div className="free">
              <p>Free</p>
              </div>
              </div>
              <div className="grid3-3">
          <div className='top'>
            <p>Anyone who isure which job role to take.</p>
            <p>Personnels actively looking for job role</p>
            <p>Personnels actively looking for job role</p> </div>
            <div className="free">
              <p>Free</p>
              </div>
              </div>
       </div>
     
     
     <div className="button"> <button onClick={handleShow} className="bt"><p>Register</p></button>
     
     <Modal  
        style={{ backgroundColor:'transparent',color:'transparent', borderRadius:'50px',color:'transparent' }}
      show={show} onHide={handleClose} size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              className="modal"

              >
                 <Modal.Header closeButton >
          <Modal.Title >Register</Modal.Title>
        </Modal.Header> 
        <Modal.Body> 
          {     <Container fluid className="container">
        <Form className="form">
          <Form.Field>
          <label style={{textAlign:'center',fontSize:'30px'}}>Register</label>
            <label style={{textAlign:'center'}}>Name</label>
            <input style={{ color: "#c4957", borderRadius:'50px', borderColor:'transparent' }} placeholder='Enter your name' onChange={(e)=>(setdata({...data,name:e.target.value}))} />
          </Form.Field>
          <Form.Field>
            <label style={{textAlign:'center'}}>Number</label>
            <input style={{ color: "#c4957", borderRadius:'50px', borderColor:'transparent' }} placeholder='Enter your contact number' onChange={(e)=>(setdata({...data,number:e.target.value}))} />
          </Form.Field>
         
        </Form>
      </Container>
}</Modal.Body>
        <Modal.Footer style={{ color: "#c4957", borderRadius:'50px', borderColor:'transparent', textAlign:'center' }}>
        <button 
          className="bt"
          onClick={(e)=>{
            handleClose();
            submitHandler(e);

          }} type="submit">
            Submit
          </button>
        </Modal.Footer>
        
        
      </Modal>
      </div>


     <div className="heading6" id="details"><p style={{fontSize:'7.5vh', marginTop:'20vh'}}>BDE Course Details</p></div>
       
        <div className="grid4" style={{zIndex:'1'}} >
        {/* <div className="grid1-4"><div><p>Anyone who is looking for a job but not sure which job role to take. Personnels actively looking for job role</p><span><ul><li><div></div> </li><li></li><li></li><li></li></ul></span></div></div>
        <div className="grid2-4" ><div><p>Students about to start their professional journey. Personnels actively looking for job role</p><span><ul><li></li><li></li><li></li><li></li></ul></span></div></div>
        <div className="grid3-4"><div><p>Personnels actively looking for job role. Personnels actively looking for job role</p><span><ul><li>  </li><li> </li><li> </li><li> </li></ul></span></div></div>
        <div className="grid4-4"><div><p>Personnels actively looking for job role. Personnels actively looking for job role</p><span><ul><li></li><li></li><li></li><li></li></ul></span></div></div>
            */}

       <div className="grid1-4"><img width="100" height="100" src={CD1}></img></div>
        <div className="grid2-4" ><img width="100" height="100"  src={CD2}></img></div>
        <div className="grid3-4"><img width="100" height="100"  src={CD3}></img></div>
        <div className="grid4-4"><img width="100" height="100"  src={CD4}></img></div>
           
        </div>
        <div className="header1" style={{position:'absolute', width:'90vw',zIndex:'-1', marginTop:'0vh'}} >
        <img className="img1" src={bgelement6} style={{maxHeight:'40vh',maxWidth:'40vw',zIndex:'-1',marginTop:'-200px'}}></img>
        <img className="img3" src={bgelement4} style={{maxHeight:'40vh',maxWidth:'40vw',zIndex:'-1',marginTop:'-200px',marginLeft:'150px'}}></img>
        <img className="img2" src={bgelement6} style={{maxHeight:'40vh',maxWidth:'40vw',zIndex:'-1',marginTop:'-200px'}}></img>
        </div> 
        <div style={{marginTop:'10px'}} className="button"> <button onClick={handleShow} className="bt"><p>Register</p></button></div>
     
      <div className="heading" style={{paddingTop: '100px'}}><p style={{fontSize:'7.5vh'}}>Who Is This Course For?</p></div>
       <div className="grid">
        <div >
          <img className="img4" src={who1} style={{position:'absolute', marginTop:'-80px',marginLeft:'-150px',zIndex:'-1'}}></img> 
          <div>Anyone who is looking for a job but not sure which job role to take.</div></div>
        <div >
           <img className="img5" src={who2} style={{position:'absolute', marginTop:'-130px',marginLeft:'150px',zIndex:'1'}}></img> 
          <div>Students about to start their professional journey</div></div>
        <div >
           <img className="img6" src={who3} style={{position:'absolute', marginTop:'-150px',marginLeft:'80px',zIndex:'-1'}}></img> 
          <div>Personnels actively looking for job role</div></div>
        </div>
       <div style={{marginTop:'40px',paddingBottom:'40px'}} className="heading5"><p style={{fontSize:'7.5vh'}}> Testimonials</p></div>
       <div><img className="img7" src={bgelement5} style={{maxWidth:'30vw',position:'absolute', marginTop:'-180px',marginLeft:'-650px',zIndex:'-1'}}></img> 
        <img className="img8" src={bgelement3} style={{maxWidth:'30vw',position:'absolute', marginTop:'-500px',zIndex:'-1',marginLeft:'-700px'}}></img> 
        </div>

         <div className="cr" style={{
         
  width:'95%', margin:'0 auto',height:'80vh'}}>
        <Carousel className="carousel" style={{
         
         width:'95%', margin:'0 auto',height:'80vh'}} >
              <item>
            <div style={{width:'80%', height:'100%', margin:'0 auto',}}>
              <img width='80%' height='85%' style={{ borderRadius:'50px',marginTop:'20px'}} src={test}></img>
            </div>
          </item>
          <item>
            <div style={{width:'80%', height:'100%', margin:'0 auto',}}>
              <img width='80%' height='85%' style={{ borderRadius:'50px',marginTop:'20px'}} src={test}></img>
            </div>
          </item>
          <item>
            <div style={{width:'80%', height:'100%', margin:'0 auto',}}>
              <img width='80%' height='85%' style={{ borderRadius:'50px',marginTop:'20px'}} src={test}></img>
            </div>
          </item>
         </Carousel>
      </div>

      
      <div style={{marginTop:'140px',paddingBottom:'40px'}} className="heading6"><p style={{fontSize:'7.5vh', marginTop:'200px'}}> Meet Our Experts</p></div>
      <div><img className="img9" src={bgelement5} style={{maxWidth:'45vw',position:'absolute', marginTop:'-200px',marginLeft:'7%',zIndex:'-1'}}></img> 
          </div>

     <div className="grid5">
        <div className="grid15" >
          <div className="div">
            <div style={{height:'227px',width:'227px',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'20px', marginBottom:'450px'}}><b style={{fontSize:'xx-large'}}>2</b>
            </div>
            <h2>Engage with Our Experts</h2>
            <h5>Engage with Our Experts</h5>
            <h5>Engage with Our Experts</h5>
            </div>
            
            </div>
            <div className="grid25" >
            <div className="div">
            <div style={{height:'227px',width:'227px',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'20px', marginBottom:'450px'}}><b style={{fontSize:'xx-large'}}>2</b>
            </div>
            <h2>Engage with Our Experts</h2>
            <h5>Engage with Our Experts</h5>
            <h5>Engage with Our Experts</h5>
            </div>
            
            </div>
            <div className="grid35" >
            <div className="div">
            <div style={{height:'227px',width:'227px',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'20px', marginBottom:'450px'}}><b style={{fontSize:'xx-large'}}>2</b>
            </div>
            <h2>Engage with Our Experts</h2>
            <h5>Engage with Our Experts</h5>
            <h5>Engage with Our Experts</h5>
            </div>
            
            </div>
        </div>    

     <div  className="heading8"><p >FAQs</p></div>
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
         

         <div className="foot">
         <div style={{marginTop:'150px'}} className="heading7"><p >Talk With Our Expert And Get A Job<br></br>Get Your Doubts Solved</p></div>
         
        
     <div>
    <button style={{marginTop:'50px'}}  className="bottom"><p>Contact</p></button>
    </div>
    </div>

    </div>
  );
}

export default App;
