import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/bprtshops.jpg'
import qrcode from '../../../../imagestwo/bprtqrcode.jpeg'

function Bprt() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >Business Premises Rent Tribunal</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>Hon. Cyprian Mugambi Nguthari
</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Chege Charles Gakuhi</li>
                        <li className='list_member'>Hon. James Wahome Ndegwa</li>
                        <li className='list_member'>Hon. Patricia May</li>
                        <li className='list_member'>Hon. Andrew Muma</li>
                        <li className='list_member'>Hon. Gad Chemoiyai</li>
                       
{/* 
                        <li className='list_member'>Hon. Jackson Rop
</li> */}
                        <li className='list_member'>Hon. Mike M. Makori
</li>
                        <li className='list_member'>Hon. Joyce Akinyi Osodo</li>
                      
                        <li className='list_member'>Hon. Patrick Kiprotich Kitur</li>
                        <li className='list_member'>Hon. Joyce W. Murigi</li>
                    </ul>
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                        <h4>Court 1- Hon Mugambi </h4>
                    <Link className='link-teams-color' to="https://t.ly/6F8Zx"   target="_blank">  https://t.ly/6F8Zx </Link> 
                    <h4>Court No. 2-Hon. Gakuhi Chege </h4>
                    <Link className='link-teams-color' to="https://t.ly/X4yXm"   target="_blank"> https://t.ly/X4yXm </Link> 
                    <h4>Court No. 3-Hon. Patricia May </h4>
                    <Link className='link-teams-color' to="https://bit.ly/3yMH78p"   target="_blank"> https://bit.ly/3yMH78p </Link> 
                    <h4>Court No. 4-Hon. Andrew Muma </h4>
                    <Link className='link-teams-color' to="https://t.ly/1sywW"   target="_blank">https://t.ly/1sywW</Link> 
                    <h4>Court No.5- Hon Wahome Ndegwa and Hon Joyce Murigi</h4>
                    <Link className='link-teams-color' to="https://tinyurl.com/yc5m9z53"   target="_blank"> https://tinyurl.com/yc5m9z53 </Link> 
                    <h4>Court No. 6- Hon. Patrick Kitur </h4>
                    <Link className='link-teams-color' to="https://tinyurl.com/3dhebvas"   target="_blank"> https://tinyurl.com/3dhebvas </Link> 
                    <h4>Court No. 8- HON.Gad Chemoiyai</h4>
                    <Link className='link-teams-color' to="https://t.ly/3xbxy"   target="_blank"> https://t.ly/3xbxy </Link> 
                    <h4>Court No. 10- Hon. Makori Mike</h4>
                    <Link className='link-teams-color' to="https://t.ly/N5FvP"   target="_blank">https://t.ly/N5FvP </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-bprttr@court.go.ke</h3>
                    </div>
            
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>Business Premises Rent Tribunal is established under section 11 of the Landlord and Tenants (Shops, Hotels & Catering Establishments) Act, Cap.301 Laws of Kenya.
</h3>
            <h2>Members of the Tribunal</h2>
            <h3> It consist of a person or persons appointed as such by the Cabinet Secretary, and shall exercise such jurisdiction as is conferred on it by or under this Act, over such area as shall be specified in such appointment.
</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- To protect the Tenant from arbitrary eviction and exploitation.</li>
                        <li>- To ensure that the Landlord gets returns from his investments.</li>
                        <li>- Timely hearing and determination of tenancy disputes in controlled tenancies.</li>
                        <li>- To create a conducive environment for business to thrive.</li>
                        <li>- To handle termination of tenancies in business premises under controlled tenancies.</li>
                        <li>- To issue orders for levying distress in business premises under controlled tenancies.</li>
                     
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/batgirl/home"   target="_blank"> Click to See The Judgments </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re Towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-bprttr@court.go.ke</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Bprt
