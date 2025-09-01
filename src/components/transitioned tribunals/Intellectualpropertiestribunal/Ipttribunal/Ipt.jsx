import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/iptmanufacturing.jpg'
import qrcode from '../../../../imagestwo/iptqrcode.jpeg'

function Ipt() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >INDUSTRIAL PROPERTY TRIBUNAL</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>None</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Betty Chepngetich Bii</li>
                        <li className='list_member'>Hon. Michael Muchemi Ndegwa</li>
                        <li className='list_member'>Hon. Djae Nyabuti</li>
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://bit.ly/3tCmhYX"   target="_blank"> https://bit.ly/3tCmhYX </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-ipttr@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 113 of the Industrial Property Act, 2001, Laws of Kenya.</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed of 7 members.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- The Tribunal has appellate jurisdiction which involves hearing appeals from the decisions of the Managing Director of the Kenya Industrial Property Institute (KIPI) regarding different areas of intellectual property namely patents, industrial designs, utility models, technovations and semiconductor technologies.</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/iptdecisions/home"   target="_blank"> Click to See The Judgments </Link> 
                </div>
                <h2>Click to View Judgements</h2>
                <h2>Location</h2>
                <h3>Weights & Measures Building, Popo road, off Mombasa Road, South C</h3>
                <h2>Contact</h2>
                <h3>Email:-ipttr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Ipt
