import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/examkids.jpg'
import qrcode from '../../../../imagestwo/neatqrcode.jpeg'

function Neat() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >NATIONAL EXAMINATION APPEALS TRIBUNAL</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>Hon. Mutuma Wyne Kenneth,PhD</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Fred Nyambane Oanda</li>
                        <li className='list_member'>Hon. Virginia Wahome</li>
                        <li className='list_member'>Hon. Mary Lomojo</li>
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://shorturl.at/etwHZ"   target="_blank"> https://shorturl.at/etwHZ </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-neat@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 40B of the Kenya National Examination Council Act No. 29 of 2012, Laws of Kenya.</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed of five members inclusive of the Chairperson.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- The Tribunal hears and determines appeals against a decision of the Council to withhold, nullify or cancel examinations prepared and administered by the Council.</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                 <img className = "qrcode"src={qrcode}/> 
                 <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/neatribunal/home"   target="_blank"> Click to See The Judgments </Link> 
                </div> 
                <h2>Location</h2>
                <h3>Kenya Re towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-neat@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Neat
