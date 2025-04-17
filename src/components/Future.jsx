import React from 'react'
import brackets from '../assets/svg/Brackets'
import { roadmap } from '../constants'
import { check2, loading1, grid } from '../assets'
import TagLine from './TagLine'
import { Gradient } from './designs/Roadmap'

export const Future = () => {
  return (
    <div className='max-w-[77.5rem] pt-10 mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] text-white' id="roadmap">
        <div className={`font-light text-xs tracking-tagline uppercase flex items-center justify-center`}>
            {brackets("left")}
            <h1 className='mx-3'>Ready to Get Started</h1>
            {brackets("right")}
            
            
        </div>
        <div className='flex items-center justify-center text-5xl my-5'>
            <h1 className=''>What we are working on</h1>
        </div>

        <div className='relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem] mt-20'>
            {roadmap.map((item)=> {
                const status = item.status === "done" ? "Done" : "In progress";

                return (
                    <div 
                    className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                        item.colorful ? "bg-conic-gradient" : "bg-[#252134]"
                      }`}>
                        <div className='relative p-8 bg-[#0E0C15] rounded-[2.4375rem] overlow-hidden xl:p-15'>
                                <div className='absolute top-0 left-0 max-w-full'>
                                <img
                                className='w-full'
                                src={grid}
                                width={550}
                                height={550}
                                alt='grid'/>
                            </div>
                            <div className='relative z-1'>
                                <div className='flex items-center justify-between max-w-[27rem] mb:8 md:mb-20'>
                                    <TagLine>{item.date}</TagLine>
                                    <div className='flex items-center px-4 py-1 bg-white rounded text-[#0E0C15]'>
                                        <img
                                        className='mr-2.5'
                                        src={item.status === "done" ? check2 : loading1}
                                        width={16}
                                        height={16}/>
                                        <div className='fonr-light text-xs uppercase'>
                                            {status}
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-10 -my-10 -mx-1 mt-1'>
                                    <img
                                    className='w-full '
                                    src={item.imageUrl}
                                    width={620}
                                    height={426}
                                    alt={item.title}
                                    />
                                </div>
                                <h4 className='text-[2rem] leading-normal mb-4'>{item.title}</h4>
                                <p className='font-light text-[0.875rem] leading-6 md:text-base text-['>{item.text}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Gradient />
        </div>
    </div>
  )
}
