import React from 'react';
import ClipPath from '../assets/svg/ClipPath';
import Section from './Section';
import { homeUI } from '../assets';
import { benefitCard1 } from '../assets';
import { GradientIcons, Gradient } from './designs/Gradient';
import Button from './Button';

const Works = () => {
  return (
    <Section id="features">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-1 xl:max-w-[100.5rem]">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 xl:gap-20">
          <div className="bg-conic-gradient z-1 p-0.5 relative w-full lg:w-[122%] md:w-[100%] md:h-[26rem] h-[16rem] lg:h-[20rem] xl:h-[35rem] rounded-3xl overflow-hidden top-0">
          <div className='h-[1.4rem] bg-[#2E2A41] rounded-t-[0.9rem]'>
            <div className='flex justify-end'>
                <div className='rounded-full w-3 h-3 bg-yellow-500 mt-1 mx-2'/>
                <div className='rounded-full w-3 h-3 bg-green-500 mt-1 mx-2'/>
                <div className='rounded-full w-3 h-3 bg-red-500 mt-1 mx-2'/>
            </div>
          </div>
            <img src={homeUI} className="inset-0 object-cover top-5"/>
            
            <GradientIcons />
          </div>
          <div className='space-y-4'>
            <h1 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight text-black font-medium">How does myCrib Work?</h1>

            <p className='font-normal xl:text-xl text-gray-700 tracking-wide'>
                myCrib is a user-friendly platform that connects users to their ideal homes, buyers to sellers and agents, and landlords to tenants.
            </p>

            <Button href="https://mycrib.app">
                Visit myCrib
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Works;