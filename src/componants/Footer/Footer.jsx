import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innnerWidth flexCenter f-container">

            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo.png" alt="" width={120} />
                <span className='secondaryText'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor?
                </span>
            </div>

             {/* right side */}
             <div className="flexColStart f-right">
                <span className='primaryText'>
                    Information
                </span>
                <span className='secondaryText'>145 New Youk</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Property</span>
                    <span>Products</span>
                    <span>About Us</span>
                </div>
            </div>

        </div>
    </section>
    )
}

export default Footer