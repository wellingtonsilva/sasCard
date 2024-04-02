import React from 'react'
import "./FeatureSection.scss"
import Img1 from './../../assets/feature-1.svg'
import Img2 from './../../assets/feature-2.svg'
import Img3 from './../../assets/feature-3.svg'
import Img4 from './../../assets/feature-4.svg'
import Img5 from './../../assets/feature-5.svg'
import Img6 from './../../assets/feature-6.svg'

import { Wrapper } from '../wrapper/Wrapper'
export const FeatureSection = () => {
  return (
    <section className='features'>
        <Wrapper>
            <div className='features__text'>
              <h3>Explore our amazing features</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
            <div className="features__container">

              <div className='features__features dark-feature'>
                <img src={Img1} alt="" />
                <h4 className='dark-feature-title'>
                  Free Enrollment
                </h4>
                <p>
                  Engaged was tje evident pleased husband. Ye goodness felicity does disposal dwelling no.
                </p>
              </div>

              <div className='features__features white-feature'>
                <img src={Img2} alt="" />
                <h4 className='white-feature-title'>
                  Fast and easy registration
                </h4>
                <p>
                  Engaged was tje evident pleased husband. Ye goodness felicity does disposal dwelling no.
                </p>
              </div>

              <div className='features__features dark-feature'>
                <img src={Img3} alt="" />
                <h4 className='dark-feature-title'>
                 Crypto Support
                </h4>
                <p>
                  Engaged was tje evident pleased husband. Ye goodness felicity does disposal dwelling no.
                </p>
              </div>

              <div className='features__features white-feature'>
                <img src={Img4} alt="" />
                <h4 className='white-feature-title'>
                  Hidden Fees
                </h4>
                <p>
                  Engaged was tje evident pleased husband. Ye goodness felicity does disposal dwelling no.
                </p>
              </div>

              <div className='features__features dark-feature'>
                <img src={Img5} alt="" />
                <h4 className='dark-feature-title'>
                  Auto matic card lock/unlock
                </h4>
                <p>
                  Engaged was tje evident pleased husband. Ye goodness felicity does disposal dwelling no.
                </p>
              </div>

              <div className='features__features white-feature'>
                <img src={Img6} alt="" />
                <h4 className='white-feature-title'>
                  24/7 Customer Support
                </h4>
                <p>
                  Engaged was tje evident pleased husband. Ye goodness felicity does disposal dwelling no.
                </p>
              </div>

            </div>
        </Wrapper>
    </section>
  )
}
