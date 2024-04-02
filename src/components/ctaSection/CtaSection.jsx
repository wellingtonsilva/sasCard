import React from 'react'
import "./CtaSection.scss"
import PhoneImg from './../../assets/cta-phone.png'
import { Wrapper } from '../wrapper/Wrapper'
  export const CtaSection = () => {
    return (
      <section className='cta'>
        <Wrapper className="cta__container">
            <div className="cta__left">
              <img src={PhoneImg} alt="" />
            </div>
            <div className="cta__right">
              <h3>Take control of your finance today</h3>
              <p>
                {" "}
                One-click Apps & Integrations to help you supercharge your teams workflow. Attended overcame repeated it is perceived Marianne in.
              </p>
              <form action="">
                <input 
                  type="email"
                  placeholder='Enter Your E-mail'
                  className='email'
                />
                <input type="submit" value="Submit" className='button-primary' />
              </form>
            </div>
        </Wrapper>
      </section>
    )
  }
  