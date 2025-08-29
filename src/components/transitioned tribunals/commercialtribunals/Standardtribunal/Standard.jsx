import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/standardcounterfittwo.jpeg'
import qrcode from '../../../../imagestwo/standardqrcode.jpeg'

function Standard() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >STANDARDS TRIBUNAL</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>Hon. Gladys Muthoni Mburu</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Peter Mungai</li>
                        <li className='list_member'>Hon. Moses Sande Makhandia</li>
                        <li className='list_member'>Hon. Adrian Onginjo Opiyo</li>
                        <li className='list_member'>Hon. Evans Lagat</li>
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://bit.ly/3N1ugri"   target="_blank"> https://bit.ly/3N1ugri </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-standardstr@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 16A of the Standards Act Cap 496 Laws of Kenya.</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed of five members inclusive of the Chairperson. The Minister shall appoint a legal officer from the Attorney General’s chambers as the Secretary of the Tribunal.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- Hear appeals from any person aggrieved by a decision of the Kenya Bureau of Standards (KEBS) or the National Standard Council including. <br/>
                        • Orders on cancellation and suspension of permits under
Section 10A of the Standard Act.
<br/>
• Standards Levy Orders made by the Minister under
Section 10B and 10 of the Standards Act.
<br/>
• Decisions and/or directives of the Council pursuant to the
power conferred to it by the Act.
<br/>
• Decisions and/or orders for destruction of goods under
the Standards Act.
                        
                        
                        </li>
                        <li>- Act as a point of reference to the Managing Director of Kenya Bureau of Standards by giving directions to the Director on matters involving a point of law or matters of unusual importance or complexity upon reference to it by the Director.</li>
                        <li>- Hear appeals from any accredited conformity assessment body that is dissatisfied and aggrieved by any decisions made by the Kenya Accreditation Service (KENAS).</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/standards-decisions/home"   target="_blank"> Click to See The Judgments </Link> 
                </div>
                <h2>Location</h2>
                <h3>KIRDI Block ‘D’, door ‘10’ Popo Road, Belle Vue, Off Mombasa Road, South C, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-standardstr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Standard
