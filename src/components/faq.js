import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import bgelement4 from '../img/bg-element2.svg';

function Faq() {
    return (
        <div>
            
     <div  className="heading8"><p >FAQs</p></div>
     <div><img className="img9" src={bgelement4} style={{maxWidth:'45vw',position:'absolute', marginTop:'-30%',marginLeft:'-70%',zIndex:'-1'}}></img> 
     </div>   
     <div><img className="img9" src={bgelement4} style={{maxWidth:'30vw',position:'absolute', marginTop:'100px',marginLeft:'15%',zIndex:'-1'}}></img> 
      </div> 
      <div className="faq">

    


         <div className="in" placeholder="Enter Your Number to Get Started">
         Are classes live or recorded ?

         <DropdownButton id="dropdown-basic-button" variant="basic" size="lg">
  <Dropdown.Item > <p className="in1">All our classes during the course will be live and<br></br> delivered by experts in a very fun and interactive way.</p>
        </Dropdown.Item>
</DropdownButton>
             
         </div>
         <div className="in" placeholder="Enter Your Number to Get Started">Will Job assistance be continued even after our course ends ?<DropdownButton id="dropdown-basic-button" variant="basic" size="lg">
  <Dropdown.Item > <p className="in1">Job assistance is continued till you are placed in any<br></br> company either from our platform or from any other medium</p>
        </Dropdown.Item>
</DropdownButton></div>
        
         <div className="in" placeholder="Enter Your Number to Get Started">Will there be any kind of deductions in the Assured moneyback plan ?<DropdownButton id="dropdown-basic-button" variant="basic" size="lg">
  <Dropdown.Item > <p className="in1">There is absolutely zero deduction if we are not able to<br></br> land you a job in 6 months from your course. There is only <br></br>one condition from our side that you don't miss any class.</p>
        </Dropdown.Item>
</DropdownButton></div>
         <div className="in" placeholder="Enter Your Number to Get Started">In which Job roles can I be placed ?<DropdownButton id="dropdown-basic-button" variant="basic" size="lg">
  <Dropdown.Item ><p className="in1">We prepare you for any kind of sales job like Business<br></br> development executive, Inside sales , Customer Relationship <br></br> manager, Field sales executive etc. </p>
        </Dropdown.Item>
</DropdownButton></div>
          <div className="in" placeholder="Enter Your Number to Get Started">What are the prerequisites for the course ?<DropdownButton id="dropdown-basic-button" variant="basic" size="lg">
  <Dropdown.Item  ><p className="in1">There are no specific requirements.<br></br> You Just need passion, commitment for 15 days,<br></br> internet connection and a laptop/phone to attend classes.</p>
        </Dropdown.Item>
</DropdownButton></div>
         </div> 
            
        </div>
    )
}

export default Faq
