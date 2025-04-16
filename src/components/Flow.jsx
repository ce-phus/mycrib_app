import React from 'react'
import Section from './Section'
import { logo, logo3, check } from '../assets'
import { flowApps, flowContent, flowText } from '../constants'
import Button from "./Button"
import { LeftCurve, RightCurve } from './designs/Flow'
import { Future } from './Future'
import Pricing from './Pricing'

const Flow = () => {
  return (
    <Section
    crosses
    className={`text-black`}>
        <div className='max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] lg:flex'>
          <div className='max-w-[25rem]'>
            <h2 className='text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight'>Revolutionizing Real Estate Ecosytem with myCrib</h2>

            <ul className='max-w-[22rem] mb-10 md:mb-14'>
              {flowContent.map((item)=> (
                <li className='mb-3 py-3' key={item.id}>
                  <div className='flex items-center'>
                    <img
                    src={check} height={24}
                    alt='check'/>
                    <h6 className='font-light text-[0.875rem] leading-6 md:text-base mt-2 text-[#252134] ml-5'>{item.title}</h6>
                  </div>
                </li>
              ))}
            </ul>

            <Button>Try it now</Button>
          </div>

          <div className='lg:ml-auto xl:w-[38rem] mt-4'>
            <p className='font-light text-[0.875rem] leading-6 md:text-base mt-2 text-[#252134] md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>
              {flowText}
            </p>

            <div className='relative left-1/2 flex w-[22rem] aspect-square border border-gray-400 rounded-full -translate-x-1/2 scale:75 md:scale-100'>
              <div className='flex w-60 aspect-square border m-auto border-gray-400 rounded-full'>
                <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                  <div className='flex items-center justify-center w-full h-full bg-black rounded-full'>
                    <img
                    src={logo3}
                    width={48}
                    height={48}
                    alt='logo'
                    />
                  </div>
                </div>
              </div>

              <ul>
                {flowApps.map((app, index)=> (
                  <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}>
                    <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-[#15131D] border border-white/15 rounded-xl -rotate-${
                      index * 45
                    }`}>
                      <img
                      src={app.icon}
                      height={app.height}
                      width={app.width}
                      alt={app.title}
                      className='m-auto'/>
                    </div>
                  </li>
                ))}
              </ul>
              <LeftCurve />
            <RightCurve />
            </div>
          </div>
        </div>
        <div className='mt-47 bg-[#0E0C15] xl:mx-10 lg:mx-7.5 mx-5 pb-47'>
          <Future />
          <Pricing />
        </div>
    </Section>
  )
}

export default Flow