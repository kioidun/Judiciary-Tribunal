import React ,{useEffect} from 'react'
import Mainheader from '../../homescroll/mainheader/mainheader'
import Registrarmessage from '../../homescroll/findmore/Findmore'
import Casefilled from '../../homescroll/casesfilled/casefiled'
import Events from '../../homescroll/events/Events'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Home() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
   <>
   <Mainheader data-aos='fade-up' data-aos-duration='2500'/>
    <Registrarmessage data-aos='fade-up' data-aos-duration='2500'/>
    {/* <Casefilled data-aos='fade-up' data-aos-duration='2500'/> */}
    <Events data-aos='fade-up' data-aos-duration='2500'/>
   </>
  )
}

export default Home