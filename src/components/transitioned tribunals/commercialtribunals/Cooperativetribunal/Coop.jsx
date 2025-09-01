import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/cooperativeimage.jpg'
import qrcode from '../../../../imagestwo/coopqrcode.jpeg'

function Coop() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >Co-operative Tribunal</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3></h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Mwatsama Janet Mjeni-(Deputy Chairperson)</li>
                        <li className='list_member'>Hon. Paul Otieno Aol</li>
                        <li className='list_member'>Hon. Michael Chesikaw</li>
                        <li className='list_member'>Hon. Fridah Lotuiya</li>
                        <li className='list_member'>Hon. Beatrice Sawe</li>
                        <li className='list_member'>Hon. Phillip Gichuki</li>
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://cutt.ly/DhBmEEq"   target="_blank"> https://cutt.ly/DhBmEEq </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-coptr@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>This Tribunal is established under Section 77 of the Cooperative Societies Act No. 490 (Revised in 2012), Laws of Kenya.</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed of seven members inclusive of a Chairperson and a Deputy Chairperson.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- The tribunal shall have unlimited geographical and pecuniary jurisdiction in matters of co-operative disputes among members, past members and persons claiming through members, past members and deceased members; or between members, past members or deceased members, and the society, its committee or any officer of the society, or between the society and any other co-operative society.
</li>
                        
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/cooperative-decisions/home"   target="_blank"> Click to See The Judgments </Link> 
                </div>
                <h2>Location</h2>
                <h3>Re-insurance Plaza, Taifa Road-Nairobi CBD, 11th & 12th Floor</h3>
                <h2>Contact</h2>
                <h3>Email:-coptr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Coop
