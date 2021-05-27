import React from 'react'
import { PropTypes as T } from 'prop-types'

export default function Card(props) {
  const { title, description, image, discount, unit, price, actualPrice, action, actionReverse, disabled } = props

  return (
    <div className='px-3 w-2/4 mb-4 md:w-3/12 xl:w-2/12'>
      <div className='rounded-md p-4 pb-4 relative bg-white shadow'>
        <div className='rounded-md overflow-hidden card-shadow product-thumb w-full h-48'>
          <img className='w-full h-full object-cover object-center' src='/images/content/mustard-green.png' alt='product 1' />
          <span className='absolute top-5 left-4 px-2 py-1 bg-orange-400 text-white text-xs rounded-sm block'>30%</span>
        </div>
        <div className='product-content w-full'>
          <span className='cata-product text-xs text-gray-400'>Baby Pak Choy Conven</span>
          <h6 className='product-title font-medium text-base mt-1.5'>Baby Pak Choy</h6>
          <p className='quantity'>250 gram</p>
          <div className='price text-base text-green-500 mt-0.5'>
            $2.00 <del>$5.00</del>
          </div>
        </div>
        <div className='product-button mt-4 w-full'>
          <button className='w-full bg-green-400 py-2 px-5 text-white capitalize rounded hover:bg-green-500 flex-none transition duration-200'>Buy Now</button>
          <div className='button-number hidden w-full container flex justify-center'>
            <button className='bg-green-400 h-10 w-10 flex items-center justify-center text-white capitalize rounded-full hover:bg-green-500 flex-none transition duration-200'>
              <span>-</span>
            </button>
            <div className='number-button mx-3 flex item-center justify-center mt-2'>0</div>
            <button className='bg-green-400 h-10 w-10 flex items-center justify-center text-white capitalize rounded-full hover:bg-green-500 flex-none transition duration-200'>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: T.string.isRequired,
  description: T.string.isRequired,
  image: T.string.isRequired,
  discount: T.number,
  unit: T.string,
  price: T.number.isRequired,
  actualPrice: T.number,
  action: T.func,
  actionReverse: T.func,
  disabled: T.bool
}
