import React from "react";
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6";
import './navbaricon.css'

function Navbaricons() {
  return (
    <>
    <div className="navbaricons">
      <ul className="navbaricons_ul">
        <li className="navbaricons_li">
         
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="navbaricons_li">
        
          <a
            href="https://www.facebook.com/Tribunals-Secretariat-110292528397473/?ref=pages_you_manage"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebookF />
          </a>
        </li>
        <li className="navbaricons_li">
          
          <a
            href="https://twitter.com/ortsecretariat?s=11&t=28HbU7ZjlcXsn_Ca9C4Ajw"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaXTwitter />
          </a>
        </li>
        <li className="navbaricons_li">
          <a
            href="https://instagram.com/ort_secretariat?igshid=MzMyNGUyNmU2YQ=="
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Navbaricons;
