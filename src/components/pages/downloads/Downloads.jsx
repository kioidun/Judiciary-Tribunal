import React, {useEffect} from 'react'
import Header from '../../headertwo/Header'
import './downloads.css'
import news from '../../../imagestwo/regmanual.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {downloads} from '../../resources/data/data'

function Downloads() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  return (
    <>
      <Header className="img-news" title='Downloads' image={news} >
      Latest Tribunals Downloads
      </Header>
      <section data-aos="fade-up" data-aos-duration='2500' className="downloads">
      {downloads.map(({id,image,heading,date,download})=>{
            return(
        <div className='downloads-section'>
              <div className='pdf-section'>
              <img src={image}/>
              </div>
              <div className='pdf-text'>
             <h2>{heading}</h2>
              </div>
              {/* <div className='pdf-date'>
              <h2>{date}</h2>
              </div> */}
              <div className='pdf-button'>
              <a href={download} target='_blank'><button>Download</button></a>
              </div>
           </div>
              )
            })}
        </section>
        </>
  )
}

export default Downloads