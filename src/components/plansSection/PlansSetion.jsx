import React from 'react'
import "./PlanSection.scss"
import { Wrapper } from "../wrapper/Wrapper"
import Tick from './../../assets/plans-tick.svg'
import Img1 from './../../assets/plan-1.jpg'
import Img2 from './../../assets/plan-2.jpg'
import Img3 from './../../assets/plan-3.jpg'
export const PlansSetion = () => {
  return (
    <section className='plans'>
        
        <Wrapper>
        <h3>Choose a plan for your budget</h3>
        <div className="plans__container">
            <div className="plans__card">
                <div className="plans__card-left">
                    <div className="plans__card-feature">
                        <img src={Tick} alt="" />
                        <p>Free and without documents</p>
                    </div>
                    <div className="plans__card-feature">
                        <img src={Tick} alt="" />
                        <p>Free and without documents</p>
                    </div>
                    <a href="#" className='button-primary'>
                                Get a card online
                    </a>
                </div>
                <div className='plans__card-right'>
                    <img src={Img1} alt="" />
                    <div className="plans__card-title">
                        <h6>Stand Card</h6>
                        <span>$ 0.00 USD / Mounth</span>
                    </div>
                </div>
            </div>

            <div className="plans__card">
                <div className="plans__card-left">
                    <div className="plans__card-feature">
                        <img src={Tick} alt="" />
                        <p>Free and without documents</p>
                    </div>
                    <div className="plans__card-feature">
                        <img src={Tick} alt="" />
                        <p>Free and without documents</p>
                    </div>
                    <a href="#" className='button-primary'>
                                Get a card online
                    </a>
                </div>
                <div className='plans__card-right'>
                    <img src={Img2} alt="" />
                    <div className="plans__card-title">
                        <h6>Stand Card</h6>
                        <span>$ 0.00 USD / Mounth</span>
                    </div>
                </div>
            </div>

            <div className="plans__card">
                <div className="plans__card-left">
                    <div className="plans__card-feature">
                        <img src={Tick} alt="" />
                        <p>Free and without documents</p>
                    </div>
                    <div className="plans__card-feature">
                        <img src={Tick} alt="" />
                        <p>Free and without documents</p>
                    </div>
                    <a href="#" className='button-primary'>
                                Get a card online
                    </a>
                </div>
                <div className='plans__card-right'>
                    <img src={Img3} alt="" />
                    <div className="plans__card-title">
                        <h6>Stand Card</h6>
                        <span>$ 0.00 USD / Mounth</span>
                    </div>
                </div>
            </div>

            <div className="plans__last-card">
                    <h3>Custom Plan</h3>
                    <a href="#" className='button-outline-2'>
                        Fill out our form for your custom plan
                    </a>
            </div>
        </div> 
        </Wrapper>
    </section>
  )
}
