import React from 'react'
import "./Footer.scss"
import { Wrapper } from '../wrapper/Wrapper'
import PlayStore from './../../assets/footer-playstore.png'
import AppStore from './../../assets/footer-appstore.png'
import Logo from './../../assets/footer-logo.svg'
export const Footer = () => {
  return (
    <footer className='footer'>
        <Wrapper>
            <div className='footer__text'>
                <h3>The future of strategic</h3>
                <p>Does he part last in? Merits ye if Mr narrow points. Melancholy particularly Devonshire alterarion its favorable appearance up.</p>
            </div>
            <div className='footer__stores'>
                <a href="javascript:void()">
                    <img src={PlayStore} alt="" />
                </a>
                <a href="javascript:void()">
                    <img src={AppStore} alt="" />
                </a>
            </div>
            <div className="footer__logo">
                <img src={Logo} alt="" />
            </div> 

            <ul className='footer__links'>
                <li>Services</li>
                <li>Pricing</li>
                <li>Careers</li>
                <li>Privacy  Policy</li>
                <li>FAQs</li>
            </ul>
        </Wrapper>
    </footer>
  )
}
