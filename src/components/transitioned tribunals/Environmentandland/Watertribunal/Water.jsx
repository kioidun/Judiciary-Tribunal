import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/watertap.jpg'
import qrcode from '../../../../imagestwo/waterqrcode.jpeg'

function Water() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >WATER TRIBUNAL</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>Hon. Dr. Maxwell Owuor Miyawa</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Eng. Ayora Ondieki Dominic
</li>
                         <li className='list_member'>Hon. Eng. George Phillip Oyamo Othieno</li>
                          <li className='list_member'>Hon. Abdi Ali Mohamed</li>
                           <li className='list_member'>Hon. Amos Ndunda Mutuku</li>
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://shorturl.at/jlvxS"   target="_blank"> https://shorturl.at/jlvxS </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-watertr@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 55 and 119 of the Water Act Cap 372, Laws of Kenya.</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed of only the Chairperson.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- Appeals from any person or institution against decisions or orders of the Cabinet Secretary, Water Resource Authority and Regulatory Board.</li>
                        <li>-Any dispute concerning water resources or water services where there is a business contract.</li>
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/watertribunal/home"   target="_blank"> Click to See The Judgments </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re Towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-watertr@court.go.ke
</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Water
