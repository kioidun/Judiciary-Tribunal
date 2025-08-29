import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import image from '../../../../imagestwo/kra.jpg'
import qrcode from '../../../../imagestwo/tatqrcode.jpeg'

function Tat() {
  return (
    <>
    <div className='jurisdiction_image'>
        <img src={image} />
    </div>
    <section className="jurisdiction_plans">
        <div className='jurisdiction_container-left_box'>
            <h2 className='tribename' >TAX APPEALS TRIBUNAL</h2>
            <h2 className='tribenames'> Chairperson</h2>
            <h3>Hon. Robert Mugambi Mutuma</h3>
            <h2 className='tribenamess'>Current Members</h2>
            
                    <ul className="list_members">
                        <li className='list_member'>Hon. Elisha Njeru</li>
                        <li className='list_member'>Hon. Bernadette Muthira Gitari</li>
                        <li className='list_member'>Hon. Ogaga Gloria Awuor</li>
                        <li className='list_member'>Hon. Ololchike Sankale Spenser</li>
                        <li className='list_member'>Hon. Diriye Abdullahi Mohamed</li>
                        <li className='list_member'>Hon. Terer Boniface Kibiy</li>
                        <li className='list_member'>Hon. Vikiru Timothy Bunyali</li>
                        <li className='list_member'>Hon. Dr. Komolo Erick Onyango</li>
                        <li className='list_member'>Hon. Makau Martin Mutiso James</li>
                        <li className='list_member'>Hon. Ng’ang’a Eunice Njeri</li>
                        <li className='list_member'>Hon. Muga Christine Anyango</li>
                        <li className='list_member'>Hon. Mweso Sichale</li>
                        <li className='list_member'>Hon. Dominic Kipkemoi Rono</li>
                        <li className='list_member'>Hon. Jimmy Musembi Malla</li>
                        <li className='list_member'>Hon. Caroline Namalwa Wesonga</li>
                        <li className='list_member'>Hon. Billy Graham Okumu Mijungu</li>
                    </ul>
              
                    <h2>Permanent Tribunal Virtual Court Links</h2>
                    <div className='link-teams'>
                        <h4>Mentions Link</h4>
                    <Link className='link-teams-color' to="https://tinyurl.com/4v776ssp"   target="_blank"> https://tinyurl.com/4v776ssp </Link> 
                    <h4>Panel 1 Link</h4>
                    <Link className='link-teams-color' to="https://tinyurl.com/bdhxtt68"   target="_blank"> https://tinyurl.com/bdhxtt68 </Link> 
                    <h4>Panel 2 Link</h4>
                    <Link className='link-teams-color' to="https://tinyurl.com/2humxn4n"   target="_blank"> https://tinyurl.com/2humxn4n </Link> 
                    <h4>Panel 3 Link</h4>
                    <Link className='link-teams-color' to="https://tinyurl.com/4ntwru72"   target="_blank"> https://tinyurl.com/4ntwru72 </Link> 
                    <h4>Panel 4 Link</h4>
                    <Link className='link-teams-color' to="https://tinyurl.com/4azcutr4"   target="_blank"> https://tinyurl.com/4azcutr4 </Link> 
                    <h2>Contact</h2>
                <h3 >Email:-taxappealstr@court.go.ke or taxtribunalcbc@gmail.com</h3>
                    </div>
        </div>
        <div className="jurisdiction_container-right_box">
            <h1>Establishment</h1>
            <h3>This Tribunal is established under Section 3 of the Tax Appeals Tribunal Act No. 40 of 2013, Laws of Kenya.</h3>
            <h2>Members of the Tribunal</h2>
            <h3>A Chairperson, and not less than fifteen (15) but not more than twenty (20) other members with not less than five (5) and not more than nine (9) who shall be Advocates of the High Court of Kenya.</h3>
           
            <h2>Jurisdiction</h2>
            
                     <ul >

                        <li>- The Tribunal hears and determines appeals from a person who disputes the decision(s) of the Commissioner (Kenya Revenue Authority) on a tax matter(s) arising under the tax laws.</li>
                       
                        
                    </ul>
        
                <h2>Scan to see Judgments</h2>
                <img className = "qrcode"src={qrcode}/> 
                <div className='button-top'>
                <Link className="button-link" to="https://sites.google.com/view/taxappealstribunal/home"   target="_blank"> Click to See The Judgments </Link> 
                </div>
                <h2>Location</h2>
                <h3>Kenya Re Towers, Upper Hill Ground Floor, Nairobi</h3>
                <h2>Contact</h2>
                <h3>Email:-taxappealstr@court.go.ke or taxtribunalcbc@gmail.com</h3>
               <button className='efiling'> <Link to="https://efiling.court.go.ke/" target="_blank">Click to File a Case</Link></button>
                
        </div>
        
    </section>
</>
  )
}

export default Tat
