import React from 'react'
import Button from 'components/Button'
import appleStore from 'assets/images/design/apple.png'
import googlePlay from 'assets/images/design/google.png'

export default function Sitemap() {
  return (
    <section className='py-4 bg-white px-8'>
      <div className='container mx-auto'>
        <div className='flex-none md:flex item-center justify-center py-8'>
          <div className='w-full mb-4 md:mt-4 md:mb-0'>
            <h5 className='text-green-400 text-center md:text-left uppercase font-bold text-base'>Get The Best Groceries</h5>
          </div>
          <div className='w-full'></div>
          <div className='w-full flex item-center justify-center md:justify-end'>
            <form action='#'>
              <label className='w-full relative'>
                <input type='text' className='rounded-md pt-3.5 pb-2 pr-16 pl-5 border border-gray-200 bg-white focus:outline-none' placeholder='E-mail Address' />
                <button className='bg-green-400 absolute rounded-md p-3 right-0 text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='current icon icon-tabler icon-tabler-arrow-narrow-right'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                    <line x1='15' y1='16' x2='19' y2='12'></line>
                    <line x1='15' y1='8' x2='19' y2='12'></line>
                  </svg>
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>

      <aside>
        <div className='container mx-auto py-16'>
          <div className='flex flex-wrap item-center justify-center'>
            <div className='w-full md:w-3/12'>
              <h5 className='side-menu-title'>Yasae</h5>
              <p className='side-menu mb-6 w-auto md:w-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teincididunt ut labore et</p>
              <div className='w-auto'>
                <ul id='menu' className='flex item-center items-center'>
                  <li className='mx-3 py-6 md:py-0 text-center'>
                    <Button type='link' link='#' className='hover:text-green-400'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='current icon icon-tabler icon-tabler-brand-facebook'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                        <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3'></path>
                      </svg>
                    </Button>
                  </li>
                  <li className='mx-3 py-6 md:py-0 text-center'>
                    <Button type='link' link='#' className='hover:text-green-400'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-brand-twitter'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                        <path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z'></path>
                      </svg>
                    </Button>
                  </li>
                  <li className='mx-3 py-6 md:py-0 text-center'>
                    <Button type='link' link='#' className='hover:text-green-400'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-brand-instagram'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                        <rect x='4' y='4' width='16' height='16' rx='4'></rect>
                        <circle cx='12' cy='12' r='3'></circle>
                        <line x1='16.5' y1='7.5' x2='16.5' y2='7.501'></line>
                      </svg>
                    </Button>
                  </li>
                  <li className='mx-3 py-6 md:py-0 text-center'>
                    <Button type='link' link='#' className='hover:text-green-400'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-brand-pinterest'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                        <line x1='8' y1='20' x2='12' y2='11'></line>
                        <path d='M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7'></path>
                        <circle cx='12' cy='12' r='9'></circle>
                      </svg>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-full md:w-3/12'>
              <h5 className='side-menu-title'>Useful Links</h5>
              <div className='w-auto'>
                <ul className='side-menu'>
                  <li>
                    <Button type='link' link='/about' className='hover:text-green-400'>
                      About Us
                    </Button>
                  </li>
                  <li>
                    <Button type='link' link='/product' className='hover:text-green-400'>
                      Featured Products
                    </Button>
                  </li>
                  <li>
                    <Button type='link' link='/offers' className='hover:text-green-400'>
                      Offers
                    </Button>
                  </li>
                  <li>
                    <Button type='link' link='/blog' className='hover:text-green-400'>
                      Blog
                    </Button>
                  </li>
                  <li>
                    <Button type='link' link='/faq' className='hover:text-green-400'>
                      Faq
                    </Button>
                  </li>
                  <li>
                    <Button type='link' link='/careers' className='hover:text-green-400'>
                      Careers
                    </Button>
                  </li>
                  <li>
                    <Button type='link' link='/contact' className='hover:text-green-400'>
                      Contact Us
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-full md:w-3/12'>
              <h5 className='side-menu-title'>Product Catalog</h5>
              <div className='w-auto'>
                <ul className='side-menu'>
                  <li>
                    <Button type='link' link='#' className='hover:text-green-400'>
                      Fruits
                    </Button>
                  </li>
                  <li>
                    <Button type='link' link='#' className='hover:text-green-400'>
                      Salads
                    </Button>
                  </li>
                  <li>
                    <Button type='link' link='#' className='hover:text-green-400'>
                      Fish &amp; Seafood
                    </Button>
                  </li>
                  <li>
                    <Button type='link' link='#' className='hover:text-green-400'>
                      Fresh Meat
                    </Button>
                  </li>
                  <li>
                    <Button type='link' link='#' className='hover:text-green-400'>
                      Health Products
                    </Button>
                  </li>
                  <li>
                    <Button type='link' link='#' className='hover:text-green-400'>
                      Butter &amp; Eggs
                    </Button>
                  </li>
                  <li>
                    <Button type='link' link='#' className='hover:text-green-400'>
                      Oil &amp; Vinegars
                    </Button>
                  </li>
                  <li>
                    <Button type='link' link='#' className='hover:text-green-400'>
                      Health Products
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-full md:w-3/12'>
              <h5 className='side-menu-title'>Download Apps</h5>
              <div className='w-auto'>
                <Button type='link' link='#' className='mb-4 inline-block'>
                  <img src={appleStore} alt='app' />
                </Button>
                <Button type='link' link='#' className=''>
                  <img src={googlePlay} alt='app' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}
