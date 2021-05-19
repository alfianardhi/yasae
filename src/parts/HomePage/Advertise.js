import React from 'react'
import Advertise1 from 'assets/images/design/advertise-01.jpg'
import Advertise2 from 'assets/images/design/advertise-02.jpg'
import Advertise3 from 'assets/images/design/advertise-03.jpg'

export default function Advertise() {
    return (
        <section class="py-14 info-box">
      <div class="container mx-auto">
        <div class="flex-none md:flex md:flex-wrap justify-center md:overflow-x-auto">
       
          <div class="w-full relative overflow-hidden mb-7 info-box-item px-3 md:px-4 md:w-3/12 item-center rounded-md">
            <div class="rounded-md">
              <img src={Advertise1} alt="" class="object-cover object-center" />
            </div>
          </div>

          <div class="w-full relative overflow-hidden mb-7 info-box-item px-3 md:px-4 md:w-3/12 item-center rounded-md">
            <div class="rounded-md">
              <img src={Advertise2} alt="" class="object-cover object-center" />
            </div>
          </div>

          <div class="w-full relative overflow-hidden mb-7 info-box-item px-3 md:px-4 md:w-3/12 item-center rounded-md">
            <div class="rounded-md">
              <img src={Advertise3} alt="" class="object-cover object-center" />
            </div>
          </div>

          <div class="w-full relative overflow-hidden mb-7 info-box-item px-3 md:px-4 md:w-3/12 item-center rounded-md">
            <div class="rounded-md">
              <img src={Advertise2} alt="" class="object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
