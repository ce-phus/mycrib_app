import React from 'react'
import PricingList from './PricingList'
import { LeftLine, RightLine } from './designs/Pricing'
import { stars, smallSphere, smallsphere1 } from '../assets'
import Section from "./Section"

const Pricing = () => {
  return (
    <div
    className="overflow-hidden pt-20" id="pricing">
        <div className='max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2'>
            <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
                <img
                src={smallsphere1}
                className='relative z-1'
                width={255}
                height={255}
                alt="Sphere"/>
                <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <img
                    src={stars}
                    className="w-full"
                    width={950}
                    height={400}
                    alt="Stars"
                    />
                </div>
            </div>

            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-white xl:text-4xl lg:text-2xl text-xl font-medium'>Get Started with myCrib</h1>
            </div>
            <div className='relative'>
                <PricingList />
                <LeftLine />
                <RightLine />
            </div>
        </div>
    </div>
  )
}

export default Pricing