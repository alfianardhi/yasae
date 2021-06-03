import React from 'react'
import Button from 'components/Button'

export default function Products() {
  return (
    <section className='py-4' id='shop-now'>
      <div className='container mx-auto'>
        <div className='flex flex-start justify-center text-center pl-3 md:justify-start md:text-left mb-4'>
          <h3 className='text-xl md:text-2xl font-medium capitalize'>
            We Recommend You
            <br className='' />
            <span className='font-normal text-base md:text-lg'>The best choice specially for you</span>
          </h3>
        </div>
        <div className='flex flex-wrap justify-start md:overflow-x-auto my-5'>
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

          <div className='px-3 w-2/4 mb-4 md:w-3/12 xl:w-2/12'>
            <div className='rounded-md p-4 pb-4 relative bg-white shadow'>
              <div className='rounded-md overflow-hidden card-shadow product-thumb w-full h-48'>
                <img className='w-full h-full object-cover object-center' src='/images/content/grapes.png' alt='product 1' />
                <span className='absolute top-5 left-4 px-2 py-1 bg-orange-400 text-white text-xs rounded-sm hidden'>0%</span>
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

          <div className='px-3 w-2/4 mb-4 md:w-3/12 xl:w-2/12'>
            <div className='rounded-md p-4 pb-4 relative bg-white shadow'>
              <div className='rounded-md overflow-hidden card-shadow product-thumb w-full h-48'>
                <img className='w-full h-full object-cover object-center' src='/images/content/kiwi.png' alt='product 1' />
                <span className='absolute top-5 left-4 px-2 py-1 bg-orange-400 text-white text-xs rounded-sm block'>45%</span>
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

          <div className='px-3 w-2/4 mb-4 md:w-3/12 xl:w-2/12'>
            <div className='rounded-md p-4 pb-4 relative bg-white shadow'>
              <div className='rounded-md overflow-hidden card-shadow product-thumb w-full h-48'>
                <img className='w-full h-full object-cover object-center' src='/images/content/tomatos.png' alt='product 1' />
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

          <div className='px-3 w-2/4 mb-4 md:w-3/12 xl:w-2/12'>
            <div className='rounded-md p-4 pb-4 relative bg-white shadow'>
              <div className='rounded-md overflow-hidden card-shadow product-thumb w-full h-48'>
                <img className='w-full h-full object-cover object-center' src='/images/content/red-onion.png' alt='product 1' />
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

          <div className='px-3 w-2/4 mb-4 md:w-3/12 xl:w-2/12'>
            <div className='rounded-md p-4 pb-4 relative bg-white shadow'>
              <div className='rounded-md overflow-hidden card-shadow product-thumb w-full h-48'>
                <img className='w-full h-full object-cover object-center' src='/images/content/corn.png' alt='product 1' />
                <span className='absolute top-5 left-4 px-2 py-1 bg-orange-400 text-white text-xs rounded-sm hidden'>0%</span>
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

          <div className='px-3 w-2/4 mb-4 md:w-3/12 xl:w-2/12'>
            <div className='rounded-md p-4 pb-4 relative bg-white shadow'>
              <div className='rounded-md overflow-hidden card-shadow product-thumb w-full h-48'>
                <img className='w-full h-full object-cover object-center' src='/images/content/carrot.png' alt='product 1' />
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

          <div className='px-3 w-2/4 mb-4 md:w-3/12 xl:w-2/12'>
            <div className='rounded-md p-4 pb-4 relative bg-white shadow'>
              <div className='rounded-md overflow-hidden card-shadow product-thumb w-full h-48'>
                <img className='w-full h-full object-cover object-center' src='/images/content/tomatos.png' alt='product 1' />
                <span className='absolute top-5 left-4 px-2 py-1 bg-orange-400 text-white text-xs rounded-sm hidden'>0%</span>
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

          <div className='px-3 w-2/4 mb-4 md:w-3/12 xl:w-2/12'>
            <div className='rounded-md p-4 pb-4 relative bg-white shadow'>
              <div className='rounded-md overflow-hidden card-shadow product-thumb w-full h-48'>
                <img className='w-full h-full object-cover object-center' src='/images/content/grapes.png' alt='product 1' />
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
        </div>
      </div>
      <div className='container mx-auto flex item-center justify-center pt-5'>
        <button className='bg-white text-green-400 py-2.5 px-8 capitalize rounded hover:bg-green-400 hover:text-white transition duration-200'>More Products</button>
      </div>
    </section>
  )
}
