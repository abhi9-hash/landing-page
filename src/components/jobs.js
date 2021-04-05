import React from 'react'
import howto1 from '../img/howto-1.svg';
import howto2 from '../img/howto-2.svg';
import howto3 from '../img/howto-3.svg';
import howto4 from '../img/howto-4.svg';

function Jobs() {
    return (
        <div className="jobs" id="about">
             <div className="heading3"><p>How To Get Jobs In 4 Easy Steps</p></div>

<div className="grid1" >
<div className="grid11">
    <div className="div">
        <div style={{height:'8vh',width:'8vh',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute', marginLeft:'11rem',boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.12)', marginBottom:'12rem',}}><p style={{fontSize:'xxx-large'}}>1</p></div>
        <img className="howto1" src={howto1}></img>
        </div><div className="div1"><p>Enroll in the Program</p></div></div>
<div className="grid22" ><div className="div"><div style={{height:'8vh',width:'8vh',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute',  marginLeft:'11rem',boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.12)', marginBottom:'12rem'}}><p style={{fontSize:'xxx-large'}}>2</p></div><img className="howto2" src={howto2}></img></div><div className="div1" ><p>Engage with Our Experts</p></div></div>
<div className="grid33"><div className="div"><div style={{height:'8vh',width:'8vh',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute',   marginLeft:'11rem',boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.12)', marginBottom:'12rem'}}><p style={{fontSize:'xxx-large'}}>3</p></div><img className="howto3" src={howto3}></img></div><div className="div1"><p>Excel in our Assessments</p></div></div>
<div className="grid44"><div className="div"><div style={{height:'8vh',width:'8vh',borderRadius:'50%',backgroundColor:'white', display:'flex',justifyContent:'center', alignItems:'center',position:'absolute',  marginLeft:'11rem',boxShadow: '0 7px 2px 0 rgba(0, 0, 0, 0.12)', marginBottom:'12rem'}}><p style={{fontSize:'xxx-large'}}>4</p></div><img className="howto4" src={howto4}></img></div><div className="div1"><p>Earn the Job</p></div></div>
</div>

            
        </div>
    )
}

export default Jobs
