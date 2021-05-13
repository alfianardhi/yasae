import React from 'react'
import Button from 'components/Button'

export default function Hero() {
  return (
    <section className='flex item-center hero'>
      <div className='w-full absolute z-20 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center hero-caption bg-white'>
        <h6 className='my-1 text-lg tracking-wide'>Organic and fresh food</h6>
        <h1 className='text-3xl md:text-4xl leading-tight font-semibold mb-6'>
          Get freshly groceries <br className='' />
          on your doorstep.
        </h1>
        <div className='shop-btn'>
          <Button type='link' link='#shop-now' className='bg-green-400 py-2.5 px-6 text-white capitalize rounded hover:bg-green-500 inline-block flex-none transition duration-200'>
            shop now
          </Button>
        </div>
      </div>
      <div className='w-full inset-0 md:relative md:w-1/2 hero-image'>
        <img className='hidden md:block' src='images/content/hero-image.jpg' alt='yasae hero' />
      </div>
    </section>
  )
}
