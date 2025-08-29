import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/landat.jpeg'
import qrcode from '../../../../imagestwo/latqr-code.png'

function Lat() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >LAND ACQUISITION TRIBUNAL</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>Hon. Dr. Orina Nabil Mokaya, PhD</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. George Kuseyo Supeyo</li>
                        <li className='list_member'>Hon. Ruth Okal</li>
                        
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://tinyurl.com/5ar3jd7u"   target="_blank"> https://tinyurl.com/5ar3jd7u </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-lat@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 133A of the Land Act 2012, Laws of Kenya.</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed of three members inclusive of the Chairperson.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- The Tribunal hears and determines appeals against decisions of the National Land Commission in matters relating to the process of compulsory acquisition.</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
<Link className="button-link" to="https://sites.google.com/view/landacquisitiontribunal?usp=sharing                                                            "   target="_blank"> Click to See The Judgments </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re Towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-lat@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Lat
