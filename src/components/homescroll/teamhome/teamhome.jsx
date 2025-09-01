 import React,{useEffect} from 'react'
import knowyourt from '../../resources/images/qr-code.jpg'
import { Link } from 'react-router-dom'

 import './teamhome.css'
 import Aos from 'aos'
import 'aos/dist/aos.css'

function Teamhome() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
return(
    <section data-aos='fade-up' data-aos-duration='2500' className='all-tribunals-section'>
         <h1 >The Tribunals</h1>
        <div className='all-tribunals'>
          
        <div  className='image_tribunal'>
            <img src={knowyourt}/>
        </div>
      <div  className='info_tribunal'>
         
            <p>There are over 38 Tribunals in Kenya established under various Acts of Parliament. The Registrar of Tribunals oversees a secretariat that manages the operations of 26 Tribunals, which have transitioned to the Judiciary, with more expected to follow<br></br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit explicabo tempora harum fuga quasi deserunt odit similique cum sapiente repudiandae, natus labore maxime beatae facilis magnam corrupti ea sint esse?<br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ex ad in aliquam natus? Officiis quasi vitae fugiat aperiam ratione, provident alias facere, possimus, impedit corporis qui nulla perspiciatis? Aut, earum ab, libero facere quia accusamus nihil a, nam odio nemo nesciunt ea in dolores iste tempore quidem incidunt praesentium.</p>
            <div className='button-top'>
             <Link className="button-link" to="https://tinyurl.com/knowyourtribunals"   target="_blank"> Click to Know your Tribunal </Link> 
             </div>
        </div>
       
        </div>
    </section>
)}

 export default Teamhome