import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/hivandaidstwo.jpg'
import qrcode from '../../../../imagestwo/hivqrcode.png'

function Hat() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >HIV AND AIDS TRIBUNAL</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>Hon. Carolyne Mboku</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Nelson Wanyonyi Osiemo</li>
                        <li className='list_member'>Hon. Brian Ouko Yogo</li>
                        <li className='list_member'>Hon. Irene Njahira Mukui (Dr.)</li>
                        <li className='list_member'>Hon. Walter Godfrey Jaoko (prof.)</li>
                        <li className='list_member'>Hon. Solomon Musani (Dr.)</li>
                        <li className='list_member'>Hon. Jane Ngoiri Nganda</li>
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://bit.ly/3wfIbDR"   target="_blank"> https://bit.ly/3wfIbDR </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-hivtr@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 25 of the HIV and AIDS Prevention and Control Act No 14 of 2006 [Rev. 2012] Laws of Kenya.</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed The Chairperson and four other members</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- Complaints arising out of any breach of the provisions of the Act.</li>
                        <li>- Complaints from discrimination on account of one’s HIV status including discrimination in employment, workplace, schools and educational institutions.</li>
                        <li>- Restriction on in country travels including entry and exit, abode and lodging based on HIV status.</li>
                        <li>- Isolation and quarantine based on HIV status.</li>
                        <li>- Denial, related inhibition or exclusion from elective position based on HIV status.</li>
                        <li>- Denial of access to credit.</li>
                        <li>- Mandatory testing.</li>
                        <li>- Denial of accident, medical and life insurance.</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/hatjudgements?usp=sharing"   target="_blank"> Click to See The Judgments </Link> 
                </div>
                <h2>Location</h2>
                <h3>Re-insurance Plaza, 12th Floor, Nairobi.</h3>
                <h2>Contact</h2>
                <h3>Email:-hivtr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Hat
