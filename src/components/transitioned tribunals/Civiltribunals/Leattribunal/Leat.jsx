import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/legalandeducation.jpg'
import qrcode from '../../../../imagestwo/leatqrcode.png'

function Leat() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' > LEGAL EDUCATION APPEALS TRIBUNAL</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3> Hon. Juliana Wamaitha Njiriri</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'> Hon. Vincent Godana Yatani</li>
                        <li className='list_member'>Hon. Felix Otieno Oketch</li>
                        <li className='list_member'>Hon. Moses Sitati Munoko</li>
                        <li className='list_member'>Hon. Joshua Mbinda Ngulu</li>
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://t.ly/pdo1O"   target="_blank">https://t.ly/pdo1O</Link> 
                    <h2>Contact</h2>
                <h3 >Email:-leat@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 29(1) of the Legal Education Act No.27 of 2012, [ Rev. 2015] Laws of Kenya.</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed of; a Chairperson, one person who shall be an Advocate of the High Court of Kenya of at least seven years standing, three persons who demonstrate legal competence and a Registrar who shall be an advocate of the High Court with at least five years’ experience.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- The Tribunal hears appeals made to it by any aggrieved person against the decisions of the Council of Legal Education or any committee or officer of the Council or any matter relating to the Legal Education Act. Appeals from a decision of the Council to.
                       <br/> . Refuse to grant a license. <br/>
                        . Impose conditions. <br/>
                        . Isolation and quarantine based on HIV status. <br/>
                        . Suspend or revoke a license. <br/>
                        </li>
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/leatdecision/home"   target="_blank"> Click to See The Judgments </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re Towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-leat@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Leat
