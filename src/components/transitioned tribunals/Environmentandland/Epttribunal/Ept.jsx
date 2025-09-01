import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/powerlinestwo.jpg'
import qrcode from '../../../../imagestwo/eptqrcode.png'

function Ept() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >Energy And Petroleum Tribunal</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>Hon. Kioko Kilukumi,SC</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Doris Mwirigi-(VC)
</li>
<li className='list_member'>Hon. Buge Hatibu Wasioya

</li>
<li className='list_member'>Hon. Feisal Shariff Ibrahim

</li>
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://bit.ly/3oS9Ciy"   target="_blank"> https://bit.ly/3oS9Ciy </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-energytr@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Energy and Petroleum Tribunal is established under Section 25 of the Energy Act, No. 1 of 2019, Laws of Kenya.</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed of seven (7) members, inclusive of the Chairperson.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- Disputes between a licensee and a third party.</li>
                        <li>- Disputes between licensees.</li>
                        <li>- Appeals against decisions of Energy and Petroleum Regulatory Authority and any licensing authority.</li>
                        <li>- Any matter referred to it relating to the energy and petroleum sector arising under the Act.</li>
                      
                  
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/d/13y9Si9aTtg7eBLHXtRRgNl1v2ZKhZFc5/p/18xAuzMq3v6ySCPZpuEnMUG3-F0L4nzBI/edit"   target="_blank"> Click to See The Judgments </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re Towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-energytr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Ept
