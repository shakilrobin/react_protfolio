import React from 'react'
import Card from '../Card/Card'
import Frontend from '../../img/frontend.png'
import './Services.css'
const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
        <span>I build</span>
            <span>Website</span>
            <spane>
                Simple text for extra testing
                <br/>
                this is data.
            </spane>
            <button className='button s-button'>Download CV</button>

        </div>

        {/* right div */}

        <div className="cards">

          <div style={{left: '34rem'}}>
             <Card emoji={Frontend} heading={'Frontend Development'} details={'React, HTML, CSS, Javscrip, Jquery'} />
          </div>
          <div style={{top:"36rem" ,left: "52rem"}}>
             <Card emoji={Frontend} heading={'Backend Development'} details={'React, HTML, CSS, Javscrip, Jquery'} />
          </div>
          <div style={{top:"46rem" ,left: '70rem'}}>
             <Card emoji={Frontend} heading={'Data Analysis'} details={'React, HTML, CSS, Javscrip, Jquery'} />
          </div>
            

        </div>

    </div>
  )
}

export default Services