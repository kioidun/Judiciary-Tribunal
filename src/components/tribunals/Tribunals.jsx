import React from 'react'
import Header from '../../components/headertwo/Header'
import HeaderImage from '../../components/resources/images/about-stones.jpg'
import { Link } from 'react-router-dom'
import { tribunals } from '../../components/resources/data/data'
import './tribunals.css'

const Tribunals = () => {
  return (
    <div>
      <Header title='Tribunals' image={HeaderImage}>
        Tribunals are quasi- Judicial Bodies Established by Various Acts of
        Parliament and Mandated to Hear and Determine Disputes Arising from
        Their Areas of Specialization.
      </Header>

      <section className="plans">
        <div className="plans_container">
          {tribunals.map(({ id, name, description, url }) => (
            <div key={id} className='tribunal_plan'>
              <Link 
                to={url} 
                onClick={() => window.scrollTo(0, 0)} 
                className="tribunal_link"
              >
                <h3>{name}</h3>
                {description && <h5>{description}</h5>}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Tribunals
