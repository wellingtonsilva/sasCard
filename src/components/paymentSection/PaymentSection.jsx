import React from 'react'
import "./PaymentSection.scss"
import { Wrapper } from "../wrapper/Wrapper"
import PhoneImg from './../../assets/payment-phone.png'
import CardImg from './../../assets/payment-card.png'
import TickImg from './../../assets/payment-tick.svg'

export const PaymentSection = () => {
  return (
    <section className='payment'>
        <Wrapper className="payment__container">
            <div className='payment__left'>
              <h3>Enjoy online payment with your smart digital card</h3>
              <p>But her ready least set lived spite solid. September how men saw tolerably two behavior arranging.
                She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward.
              </p>

              <div className="payment__text">
                <img src={TickImg} alt="" />
                <div>
                  <h4>Track your payment method</h4>
                  <p>Supposing so be resolving breakfast am or perfectly. It drew a hill from me.</p>
                </div>
              </div>

              <div className="payment__text">
                <img src={TickImg} alt="" />
                <div>
                  <h4>Easy online Transaction</h4>
                  <p> he moonlights difficult-engrossed, sportsmen. Interested has all Devonshire difficulty gay assistance joy</p>
                </div>
              </div>

            </div>

              <div className="payment__right">
                <img src={PhoneImg} alt="" className='img-1' />
                <img src={CardImg} alt="" className='img-2' />
                <div className='payment__partners'>
                  <h4>3500</h4>
                  <div>Trusted Partners</div>
                </div>
                <div className='payment__users'>
                  <h4>1M</h4>
                  <div>Active users</div>
                </div>
              </div>

        </Wrapper>
    </section>
  )
}
