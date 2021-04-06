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
          <div>Experienced sales professionals looking to switch into top companies</div></div>
        <div >
           <img className="img5" src={who2} style={{position:'absolute', marginTop:'-9rem',marginLeft:'6rem',zIndex:'-1'}}></img> 
          <div>College graduates who are looking for sales job in top companies</div></div>
        <div >
           <img className="img6" src={who3} style={{position:'absolute', marginTop:'-10rem',marginLeft:'5rem',zIndex:'-1'}}></img> 
          <div>Experienced professionals looking to switch into Sales profile</div></div>
        </div>
            
        </div>
    )
}

export default Coursefor
