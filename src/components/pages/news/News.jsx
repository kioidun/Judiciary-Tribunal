import React from 'react'
import Header from '../../headertwo/Header'
import news from '../../../imagestwo/report.jpg'
import './news.css'

function News() {
  return (
    <>
    <Header className="img-news" title='Reports' image={news} >
    Tribunals News
    </Header>
    <section className='resources-section'>
        <h2>REPORTS PAGE</h2>
    </section>
    </>
  )
}

export default News