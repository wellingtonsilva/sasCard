import {useState} from 'react'
import "./Navbar.scss"
import { Wrapper } from "../wrapper/Wrapper"
import Logo from './../../assets/logo.svg'
import {FaBars} from "react-icons/fa"
export const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className='navbar'>
        <Wrapper className="navbar__container">
          <a href="" className='navbar__logo' onClick={() => setShowNav(false)}>
            <img src={Logo} alt="SasCard" />
          </a>
          <ul className={`navbar__links ${showNav ? 'show-nav' : ''}`}>
            <li>
              <a href="#" onClick={() => setShowNav(false)}>Home</a>
            </li>
            <li>
              <a href="#" onClick={() => setShowNav(false)}>About</a>
            </li>
            <li>
              <a href="#" onClick={() => setShowNav(false)}>Pricing</a>
            </li>
            <li>
              <a href="#" onClick={() => setShowNav(false)}>Blog</a>
            </li>
          </ul>

          <a href="#" className="button-primary navbar__btn">
            Sign Up
          </a>

          <div 
            className={`navbar__menubar ${showNav ? 'bg-color' : ''}`}
            onClick={() => setShowNav(!showNav)}
          > 
                <FaBars />
          </div>
        </Wrapper>
    </div>
  )
}
