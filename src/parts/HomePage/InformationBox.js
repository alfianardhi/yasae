import React from 'react'
import InfoImg from 'assets/images/design/info.svg'
import CCImg from 'assets/images/design/credit-card.svg'

export default function InformationBox() {
    return (
        <section className="py-14 info-box">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center md:overflow-x-auto">
            <div className="w-full relative overflow-y mb-7 info-box-item px-3 md:px-4 md:w-4/12 item-center rounded-md">
              <div className="flex flex-start rounded-md px-3 md:px-8 py-8 relative bg-white shadow">
                <div className="w-16 info-icon">
                  <img src={InfoImg} alt="" className="object-cover object-center" />
                </div>
                <div className="pl-5 info-content">
                  <h6 className="text-green-500 text-lg font-medium mb-1">First Delevary</h6>
                  <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do.</p>
                </div>
              </div>
            </div>
  
            <div className="w-full relative overflow-y mb-7 info-box-item px-3 md:px-4 md:w-4/12 item-center rounded-md">
              <div className="flex flex-start rounded-md px-3 md:px-8 py-8 relative bg-white shadow">
                <div className="w-16 info-icon">
                  <img src={CCImg} alt="" className="object-cover object-center" />
                </div>
                <div className="pl-5 info-content">
                  <h6 className="text-green-500 text-lg font-medium mb-1">Easy Payment</h6>
                  <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do.</p>
                </div>
              </div>
            </div>
  
            <div className="w-full relative overflow-y mb-7 info-box-item px-3 md:px-4 md:w-4/12 item-center rounded-md">
              <div className="flex flex-start rounded-md px-3 md:px-8 py-8 relative bg-white shadow">
                <div className="w-16 info-icon">
                  <img src={CCImg} alt="" className="object-cover object-center" />
                </div>
                <div className="pl-5 info-content">
                  <h6 className="text-green-500 text-lg font-medium mb-1">Place order</h6>
                  <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
