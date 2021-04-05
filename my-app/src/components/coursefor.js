import React from 'react'
import who1 from '../img/who-1.svg';
import who2 from '../img/who-2.svg';
import who3 from '../img/who-3.svg';

function Coursefor() {
    return (
        <div>
            <div className="heading" style={{paddingTop: '100px'}}><p >Who Is This Course For?</p></div>
       <div className="grid">
        <div >
          <img className="img4" src={who1} style={{position:'absolute', marginTop:'-5rem',marginLeft:'-10rem',zIndex:'-1'}}></img> 
          <div>Anyone who is looking for a job but not sure which job role to take.</div></div>
        <div >
           <img className="img5" src={who2} style={{position:'absolute', marginTop:'-9rem',marginLeft:'6rem',zIndex:'-1'}}></img> 
          <div>Students about to start their professional journey</div></div>
        <div >
           <img className="img6" src={who3} style={{position:'absolute', marginTop:'-10rem',marginLeft:'5rem',zIndex:'-1'}}></img> 
          <div>Personnels actively looking for job role</div></div>
        </div>
            
        </div>
    )
}

export default Coursefor
