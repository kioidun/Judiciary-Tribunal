import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/camattwo.jpg'
import qrcode from '../../../../imagestwo/camattwoqrcode.png'

function Camat() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >Communication And Multimedia Appeals Tribunal</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>Hon. Rosemary Wacera Kuria</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                    <li className='list_member'>Hon. Vivienne Atieno</li>
                        <li className='list_member'>Hon.  Ruth Adhiambo Okowa</li>
                        <li className='list_member'> Hon. Patience Nyange</li>
                        <li className='list_member'>Hon. Timothy Tororey</li>
                        <li className='list_member'>Hon. Dr. Samson Wambua Kitonyi</li>
                        <li className='list_member'>Hon. Tiberius Nyangau Manyura
</li>
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://bit.ly/3tLRSFM%20"   target="_blank"> https://bit.ly/3tLRSFM%20 </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-camat@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Tribunal is established under Section 102 of the Kenya Information and communication Act No. 2 of 1998, Laws of Kenya</h3>
            <h2>Members of the Tribunal</h2>
            <h3>The Tribunal shall consist of not more than seven members inclusive of the Chairperson.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>-Complaints from an aggrieved person against any publications or conduct of a journalist or media enterprise.</li>
                        <li>-Appeals from an aggrieved person against decisions and/or actions of the Media council or the Communications Authority of Kenya.</li>
                        <li>-Complaints by any citizen who is aggrieved by an action or decision of licensees who are telecommunications service providers under the Kenya Information and Communications Act.</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/d/1YiML2R4R9Z4B-wrlk00V1BcGaF7xKRkZ/p/1XOCBr4yZtMmqk72sOGN_uruXHbk5Mf9D/edit"   target="_blank"> Click to See The Judgments </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re Towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-camat@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Camat
