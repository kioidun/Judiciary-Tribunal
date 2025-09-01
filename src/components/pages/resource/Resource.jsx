import React from 'react'
import Header from '../../headertwo/Header'
import news from '../../../imagestwo/resources.jpg'
import './resource.css'

function Resource() {
  return (
    <>
    <Header className="img-news" title='Reosurces' image={news} >
    Tribunals Resources
    </Header>
    <section className='resources-section'>
        <h2>RESOURCES PAGE</h2>
    </section>
    </>
  )
}

export default Resource