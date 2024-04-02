import React from 'react'
import "./CompanySection.scss"
import { Wrapper } from '../wrapper/Wrapper'
import Company1 from './../../assets/company-1.svg'
import Company2 from './../../assets/company-2.svg'
import Company3 from './../../assets/company-3.svg'
import Company4 from './../../assets/company-4.svg'
import Company5 from './../../assets/company-5.svg'
import Phone from './../../assets/companies-phone.png'
import Appstore from './../../assets/appstore.svg'
import Playstore from './../../assets/playstore.svg'
import Bg from './../../assets/companies-bg.png'
export const CompanySection = () => {
  return (
    <section className='company'>
        <Wrapper>
            <h4>Trusted by over 30,000 companies</h4>
            <div className='company__companies'>
                <img src={Company1} alt="" />
                <img src={Company2} alt="" />
                <img src={Company3} alt="" />
                <img src={Company4} alt="" />
                <img src={Company5} alt="" />
            </div>
            <div className='company__container'>
                <div className='company__left'>
                    <img src={Phone} alt="" className='img-1' />
                    <div className='img-2'>
                        <img src={Appstore} alt=""  />
                    </div>
                    <div className='img-3'>
                        <img src={Playstore} alt="" />
                    </div>
                </div>
            </div>

            <div className="company__right">
                <h3>SasCard work precess</h3>
                <p>We so entreaties cultivated astonished is. Offered chiefly farther of my no colonel shyness.
                    Such on help ye some door if in
                </p>
                <div className="company__points-container">
                    <div className='company__point'>
                        <div className='company__point-icon'>
                            <div>1</div>
                        </div>
                        <div className='company__point-text'>
                            Download & Register App
                        </div>
                    </div>
                    <div className='company__point'>
                        <div className='company__point-icon'>
                            <div>2</div>
                        </div>
                        <div className='company__point-text'>
                           Personal information & form submit
                        </div>
                    </div>
                    <div className='company__point'>
                        <div className='company__point-icon'>
                            <div>3</div>
                        </div>
                        <div className='company__point-text'>
                            Approved & a digital card
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
        <img src={Bg} alt="" className='company__bg' />
    </section>
  )
}
