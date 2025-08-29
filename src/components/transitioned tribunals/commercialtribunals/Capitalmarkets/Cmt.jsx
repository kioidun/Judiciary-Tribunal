import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/capitalexchange.jpg'
import qrcode from '../../../../imagestwo/cmtqrcode.jpeg'

function Cmt() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >CAPITAL MARKETS TRIBUNAL</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>Hon. Paul Lilan</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Dr. Constance Gikonyo</li>
                        <li className='list_member'>Hon. Godwin Wangongu</li>
                        <li className='list_member'>Hon. Paul Wanga</li>
                        <li className='list_member'>Hon. Josephine A. Eboko </li>
                    </ul>

                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://shorturl.at/etwHZ"   target="_blank"> https://shorturl.at/etwHZ </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-cmt@court.go.ke</h3>
                    </div>
              
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Capital Markets Tribunal is established under Section 35A of the Capital Market Act No. 17 of 2012, Laws of Kenya.</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed of five members inclusive of the Chairperson.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>The Tribunal hears and determines appeals from any person aggrieved by any directions or decisions given by the Capital Markets Authority or by the Investor Compensation Fund Board relating to:</li>
                        <li>- Refusing to grant a license.</li>
                        <li>- Imposing limitations or restrictions on a licence.</li>
                        <li>- Suspending or revoking a licence.</li>
                        <li>- Refusing to approve a public offer to securities.</li>
                        <li>- Refusing to admit a security to the official list of a securities exchange.</li>
                        <li>- Suspending trading of a security on a securities exchange.</li>
                        <li>- Requiring the removal of a security from the official list of a securities exchange.</li>
                        <li>- Refuse to grant compensation to an investor who has suffered pecuniary loss resulting from failure of a licenced stock broker or dealer.</li>
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/capmrkttribunal?usp=sharing"   target="_blank"> Click to See The Judgments </Link> 
                </div>
                <h2>Location</h2>
                <h3>Embankment Plaza, 5th Floor Longonot Road, Upper Hill</h3>
                <h2>Contact</h2>
                <h3>Email:- cmt@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}
export default Cmt
