import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/financialcenter.jpg'
import qrcode from '../../../../imagestwo/sportsqrcode.jpeg'

function Fct() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >FINANCIAL CENTER TRIBUNAL</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>Hon. Obonyo Moses Buyuka</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Michoma Beth Kemunto</li>
                        <li className='list_member'>Hon. Debra Ajwang</li>
                        <li className='list_member'>Hon. Kithinji Sylvia</li>
                        <li className='list_member'>Hon. Karumba Kinyua</li>
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://shorturl.at/etwHZ"   target="_blank"> https://shorturl.at/etwHZ </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-fct@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 35 of the Nairobi International Financial Centre Act No. 25 of 2017, Laws of Kenya.</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed of five members inclusive of the Chairperson.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- The Tribunal hears and determines appeals against any decisions or orders of the Nairobi International Financial Centre Authority.</li>
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                {/* <img className = "qrcode"src={qrcode}/>  */}
                <h4>N/A</h4>
                {/* <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/sportstribunaldecisions?usp=sharing"   target="_blank"> Click to See The Judgements </Link> 
                </div> */}
                <h2>Location</h2>
                <h3>Kenya Re Towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-fct@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Fct
