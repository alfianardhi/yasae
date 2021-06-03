import React from 'react'
import Advertise1 from 'assets/images/design/advertise-01.jpg'
import Advertise2 from 'assets/images/design/advertise-02.jpg'
import Advertise3 from 'assets/images/design/advertise-03.jpg'

export default function Advertise() {
  return (
    <section className='py-14 info-box'>
      <div className='container mx-auto'>
        <div className='flex-none md:flex md:flex-wrap justify-center md:overflow-x-auto'>
          <div className='w-full relative overflow-hidden mb-7 info-box-item px-3 md:px-4 md:w-3/12 item-center rounded-md'>
            <div className='rounded-md'>
              <img src={Advertise1} alt='' className='object-cover object-center' />
            </div>
          </div>

          <div className='w-full relative overflow-hidden mb-7 info-box-item px-3 md:px-4 md:w-3/12 item-center rounded-md'>
            <div className='rounded-md'>
              <img src={Advertise2} alt='' className='object-cover object-center' />
            </div>
          </div>

          <div className='w-full relative hidden md:block overflow-hidden mb-7 info-box-item px-3 md:px-4 md:w-3/12 item-center rounded-md'>
            <div className='rounded-md'>
              <img src={Advertise3} alt='' className='object-cover object-center' />
            </div>
          </div>

          <div className='w-full relative hidden md:block overflow-hidden mb-7 info-box-item px-3 md:px-4 md:w-3/12 item-center rounded-md'>
            <div className='rounded-md'>
              <img src={Advertise2} alt='' className='object-cover object-center' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
