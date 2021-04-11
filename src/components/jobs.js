import React from 'react'
import howto1 from '../img/howto-1.svg';
import howto2 from '../img/howto-2.svg';
import howto3 from '../img/howto-3.svg';
import howto4 from '../img/howto-4.svg';

function Jobs() {
    return (
        <div className="jobs" >
             <div className="heading3" ><p>How to get a Sales Job in 4 easy steps</p></div>

<div className="grid1" >
<div className="grid11">
    <div className="div" >
        <div style={{position:'sticky'}} className="divv"  ><p >1</p></div>
        <img style={{position:'sticky'}} className="howto1" src={howto1}></img>
        </div><div className="div1"><p>Enroll in the Program</p></div></div>
<div className="grid22" ><div className="div" ><div style={{position:'sticky'}}className="divv"><p >2</p></div><img className="howto2" src={howto2}></img></div><div className="div1" ><p>Engage with Our Experts</p></div></div>
<div className="grid33"><div className="div" ><div style={{position:'sticky'}} className="divv"><p >3</p></div><img className="howto3" src={howto3}></img></div><div className="div1"><p>Excel in our Assessments</p></div></div>
<div className="grid44"><div className="div"><div style={{position:'sticky'}} className="divv"><p >4</p></div><img className="howto4" src={howto4}></img></div><div className="div1"><p>Earn the Job</p></div></div>
</div>

            
        </div>
    )
}

export default Jobs
