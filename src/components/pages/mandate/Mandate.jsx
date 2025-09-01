import React from 'react'
import Header from '../../headertwo/Header'
import news from '../../../imagestwo/nationalexamination.jpg'
import vision from '../../../imagestwo/oursvision.png'
import mission from '../../../imagestwo/ourmission.png'
import mandate from '../../../imagestwo/ourstory.png'
import './mandate.css'

function Mandate() {
  return (
    <>
    <Header className="img-news" title='Our Mandate' image={news} >
    Tribunals Mandate
    </Header>
    <section className='section-mandate'>
        <div className='section-mandate-grid'>
            <div className='section-mandate-mandate'>
                <img src={vision}/>
                <h2>Vision</h2>
                <p>An Independent institution of excellence in the delivery of justice to all</p>
            </div>
            <div className='section-mandate-mandate'>
            <img src={mission}/>
                <h2>Judiciary Mission</h2>
                <p> To Administer justice in a fair, timely,accountable and accesible manner, uphold the rule of law,advance indigenous jurisprudence and protect the constitution</p>
                </div>
                <div className='section-mandate-mandate'>
                <img src={mandate}/>
                <h2> Secretariat Mission</h2>
                <p> To efficiently coordinate tribunals for an effective and responsive justice system</p>
                </div>
               
        </div>
    </section>

    </>
  )
}

export default Mandate