import React from 'react'
import {Link} from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import Logo from '../resources/images/logo.png'
import './footer.css'


const Footer = () => {
  return (
   <footer>
    <div className="container footer_container">
        <article>
            <Link to='/' className='logo'> 
                <img src={Logo} alt='footer logo'/>
            </Link>
            <p>
            The Judiciary derives its mandate from the Constitution of Kenya, Article 159. 
            It exercises judicial authority given to it, by the people of Kenya and delivers justice according to the Constitution and other laws. The Judiciary is expected to handle disputes in a just manner, with a view to 
            protecting the rights and liberties of all, thereby facilitating the attainment of the ideal rule of law.
            </p>
            <div className='footer_socials'>
                {/* <a href="https://linkedin.com" target="_blank" rel='noreferrer noopener'>
                    <FaLinkedin/>
                </a> */}
                <a href="https://www.facebook.com/share/178MopryWg/?mibextid=wwXIfr" target="_blank" rel='noreferrer noopener' alt='facebook'>
                    <FaFacebookF/>
                </a>
                <a href="https://twitter.com/ortsecretariat?s=11&t=28HbU7ZjlcXsn_Ca9C4Ajw" target="_blank" rel='noreferrer noopener' alt='twitter'>
                    <AiOutlineTwitter/>
                </a>
                <a href="https://www.instagram.com/judiciary_tribunals?igsh=cTFmN3gyZWR3Yzdy" target="_blank" rel='noreferrer noopener' alt='instagram'>
                    <AiFillInstagram/>
                </a>
            </div>
        </article>
        <article className='our_partners'>
            <h4>OUR PARTNERS</h4>
            <Link to='https://www.ncaj.go.ke/' target="_blank" alt="NCAJ">NCAJ</Link>
            <Link to='https://www.odpp.go.ke/' target="_blank" alt="ODPP">ODPP</Link>
            <Link to='http://kenyalaw.org/kl/' target="_blank" alt="kenya law">Kenya Law</Link>
            <Link to='https://www.statelaw.go.ke/' target="_blank" alt="statelaw">State Law Office</Link>
            <Link to='https://prisons.go.ke/' target="_blank" alt="Kenya Prisons Service">Kenya Prisons Service</Link>
            <Link to='https://kenyapolice.go.ke/' target="_blank" alt="Kenya Police Service">Kenya Police Service</Link>
            <Link to='https://lsk.or.ke/' target="_blank" alt="Law Society Of Kenya">Law Society Of Kenya</Link>
            

        </article>
        <article>
            <h4>Get in touch</h4>
            <Link to="https://www.facebook.com/share/178MopryWg/?mibextid=wwXIfr" target="_blank">Facebook</Link>
            <Link to="https://twitter.com/ortsecretariat?s=11&t=28HbU7ZjlcXsn_Ca9C4Ajw" target="_blank">Twitter</Link>
            <Link to="https://www.instagram.com/judiciary_tribunals?igsh=cTFmN3gyZWR3Yzdy" target="_blank">Instagram</Link>
            <Link to= 'mailto:ortsecretariat@gmail.com' target='_blank' rel='noreferrer noopener'>Email</Link>

        </article>
    </div>
    <div className="footer_copyright">
        <small> &copy; 2025 The Tribunals Of Kenya  All rights reserved</small>

    </div>
   </footer>
  )
}

export default Footer