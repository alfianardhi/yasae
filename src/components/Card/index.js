import React from 'react'
import Button from 'components/Button'
import { PropTypes as T } from 'prop-types'
export default function Card(props) {
  const { title, description, image, discount, unit, price, actualPrice, action, actionReverse, disabled } = props

  return (
    <div className='px-3 w-2/4 mb-4 md:w-3/12 xl:w-2/12'>
      <div className='rounded-md p-4 pb-4 relative bg-white shadow'>
        <div className='rounded-md overflow-hidden card-shadow product-thumb w-full h-48'>
          <img className='w-full h-full object-cover object-center' src={image} alt={title} />
          <span className='absolute top-5 left-4 px-2 py-1 bg-orange-400 text-white text-xs rounded-sm block'>{`${discount}%`}</span>
        </div>
        <div className='product-content w-full'>
          <span className='cata-product text-xs text-gray-400'>{description}</span>
          <h6 className='product-title font-medium text-base mt-1.5'>{title}</h6>
          <p className='quantity'>{`${unit} gram`}</p>
          <div className='price text-base text-green-500 mt-0.5'>
            {`Rp ${price.toLocaleString('id')}`} <del>{`Rp ${actualPrice.toLocaleString('id')}`}</del>
          </div>
        </div>
        <div className='product-button mt-4 w-full'>
          <Button type='button' className='w-full bg-green-400 py-2 px-5 text-white capitalize rounded hover:bg-green-500 flex-none transition duration-200'>
            Buy Now
          </Button>
          <div className='button-number hidden w-full container flex justify-center'>
            <Button type='button' className='bg-green-400 h-10 w-10 flex items-center justify-center text-white capitalize rounded-full hover:bg-green-500 flex-none transition duration-200'>
              <span>-</span>
            </Button>
            <div className='number-button mx-3 flex item-center justify-center mt-2'>0</div>
            <Button type='button' className='bg-green-400 h-10 w-10 flex items-center justify-center text-white capitalize rounded-full hover:bg-green-500 flex-none transition duration-200'>
              <span>+</span>
            </Button>
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
