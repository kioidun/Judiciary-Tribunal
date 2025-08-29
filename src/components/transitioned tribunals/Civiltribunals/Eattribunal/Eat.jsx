import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/schoolkids.jpg'
import qrcode from '../../../../imagestwo/eat_qr-code.png'

function Eat() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >Education Appeals Tribunal</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>None</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>None</li>
                    </ul>   
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                        <h4>None</h4>
                    {/* <Link className='link-teams-color' to=""   target="_blank">N/A</Link>  */}
                    <h2>Contact</h2>
                <h3 >Email:-edutr@court.go.ke</h3>
                    </div>
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 93 of Basic Education Act No. 14 of 2013 (Revised 2017), Laws of Kenya.</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed of 7 members.</h3>
           <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- Discrimination in relation to colour, gender, age, tribe, disability and religion among others.</li>
                        <li>- Denial of examinations/examination certificates.</li>
                        <li>- Denial of admission to school.</li>
                        <li>- Hindrances to learning (unfair exclusion of learners).</li>
                        <li>- Examination malpractices.</li>
                        <li>- Deregistration of school.</li>
                        <li>- Corporal punishment.</li>
                        <li>- Gender based violence (bulling).</li>
                        <li>- Encroaching, grabbing and settling in school land.</li>
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/>  
                
                 <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/eduappealtribunal?usp=sharing"   target="_blank"> Click to See The Judgments </Link> 
                </div>  
                <h2>Location</h2>
                <h3>Kenya Re Towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-edutr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Eat
