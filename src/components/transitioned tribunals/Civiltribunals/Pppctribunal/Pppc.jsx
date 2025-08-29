import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/pppcone.png'
import qrcode from '../../../../imagestwo/pppcqrcode.jpeg'

function Pppc() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename'>PUBLIC PRIVATE PARTNERSHIP PETITION COMMITTEE</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>None</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Irene Moraa Ogamba</li>
                        <li className='list_member'>Hon. Eunice Daritsu Fedha</li>
                       
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://bit.ly/3LsBANR"   target="_blank"> https://bit.ly/3LsBANR </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-ppppctr@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>It is established under Section 75 (1) of the Public Private Partnerships Act No. 14 of 2021.
</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed of a Chairperson and four other persons with such relevant knowledge and experience.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- The Tribunal is mandated to determine appeals from any aggrieved person against the decisions by the committee, Directorate or a contracting Authority under this Act.</li>
                        <li>- The Tribunal has the mandate to review the decisions from an aggrieved person against the Committee, Directorate or a Contracting Authority regarding a tender process or project management.
</li>                   
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                 <img className = "qrcode"src={qrcode}/> 
               
                 <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/ppp-decisions/home"   target="_blank"> Click to See The Judgments </Link> 
                </div> 
                <h2>Location</h2>
                <h3>Kenya Re Towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-ppppctr@court.go.ke
</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Pppc
