import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/copyrighttribunal.jpg'
import qrcode from '../../../../imagestwo/copyrightqrcode.jpeg'

function  Copyright() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >Copyright Tribunal</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>Hon. Elizabeth Mkamboi Lenjo</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Helen Kiende Mungania</li>
                        <li className='list_member'>Hon. Wilfred Ogot Lusi</li>
                        <li className='list_member'>Hon. Caroline Apiyo Omaya</li>
                        <li className='list_member'>Hon. Joseph Ndungu Kihanya</li>
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                    <Link className='link-teams-color' to="https://bit.ly/3QCFTae"   target="_blank"> https://bit.ly/3QCFTae </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-copyright@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>The Copyright Tribunal is established under section 48 of the Copyright Act, Cap 130, Laws of Kenya</h3>
            <h2>Members of the Tribunal</h2>
            <h3>It is composed of not less than three and not more than five persons.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- Dispute over registration of copyright.</li>
                        <li>- Appeals from any person aggrieved by a decision of the Kenya Copyright Board. <br/> i. Refusal to grant a certificate of registration to a collective
management organization. <br/> ii. Imposition of unreasonable terms of conditions by the
Board for grant of a certificate of registration. <br/> iii. Unreasonable refusal by a collective management
organization to grant a licence in respect of a copyright
work. <br/> iv. Imposition of unreasonable terms or conditions by a
collective management organization for the grant of a
licence in respect of a copyright work.  </li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/batlady/home"   target="_blank"> Click to See The Judgments </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re Towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-copyright@court.go.ke
</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Copyright
