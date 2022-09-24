import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkdin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Boy from '../../img/boy.png'

function Intro() {
    return (
        <div className="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hey! I am</span>
                    <span>Shakil Ahmmed Robin</span>
                    <span>Software Developer
                        & Programming enthusiastic</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icon">
                    <a href="https://www.w3schools.com/tags/att_a_href.asp"><img src={Github} alt="" /></a>
                    <img src={Linkdin} alt="" />
                    <img src={Instagram} alt="" />
                </div>


            </div>
            <div className="i-right">
            <img src={Boy} alt="" />
                
            </div>

        </div>
    )
}

export default Intro