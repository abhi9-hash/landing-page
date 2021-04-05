import React from 'react'
import bgelement4 from '../img/bg-element2.svg';
import bgelement5 from '../img/bg-element3.svg';
import bgelement6 from '../img/bg-element5.svg';
import bgelement1 from '../img/bg-element1.svg';

function Plans() {
    return (
        <div>
        <div className="heading6" style={{width:'100vw'}}>
          
        {/* <img style={{marginRight:'20vw',marginLeft:'-40vw',marginTop:'-30rem',width:'40rem', zIndex:'-1'}} 
          src={bgelement4}></img> */}
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginLeft:'-40vw',marginTop:'7rem'}} src={bgelement6}>
          </img>
          
          <p id="plans" > Our Plans </p>
        
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginTop:'-20rem'}} src={bgelement5}>
          </img>
          
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginLeft:'20vw',marginTop:'-7rem'}} src={bgelement4}></img>
        
        <img style={{width:'30vw', zIndex:'-1',position:'absolute',marginTop:'-20remx'}} src={bgelement1}></img></div>
        
        <div className="grid3" >
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
            
        </div>
    )
}

export default Plans
