import React, { useRef } from 'react'
import { ScrollParallax } from 'react-just-parallax'
import { curve, bg, avartar } from '../assets'
import Button from './Button'
import Section from './Section'
import Loading from './Loading'
import { heroIcons } from '../constants'
import Notification from './Notification'
import { Gradient } from './designs/Gradient'
import { BackgroundCircles, BottomLine } from './designs/BackgroundCircles'
import CompanyLogos from './CompanyLogos'

const Hero = () => {
    const parallaxRef = useRef(null);

  return (
    <Section
    className='pt-[12rem] -mt-[5.25rem]'
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
    >
        <div className='max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative' ref={parallaxRef}>
            <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'>
                <h1 className='font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mb-6 text-black'>Connecting Real Estate Buyers, Sellers&nbsp;and Agents&nbsp; 
                <span className="inline-block relative">
                    Globally{" "}
                    <img
                        src={curve}
                        className="absolute top-full left-0 w-full xl:-mt-2"
                        width={624}
                        height={28}
                        alt="Curve"
                    />
                    </span>
                </h1>
                <p className='text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8 max-w-3xl mx-auto text-[#252134] font-normal'>
                myCrib revolutionizes real estate ecosystem by connecting buyers, sellers, and agents globally.

                It empowers buyers to find dream homes, sellers to showcase properties, and agents to link with clients effortlessly.

                This platform creates a dynamic network, transcending traditional boundaries in one seamless space.
                </p>
                <Button href="https://mycrib.app" white className={`mt-4`}>
                    Get Started
                </Button>
            </div>
            <div className='realtive max-w-[23rem] mx-auto md:max-w-5xl xl:mb-4'>
                <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
                    <div className='bg-[#0E0C15] relative rounded-[1rem]'>
                        <div className='h-[1.4rem] bg-[#43435C] rounded-t-[0.9rem]'/>
                        <div className='aspect-[33/40] rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490] overflow-hidden'>
                            <img
                            src={bg}
                            className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                            width={1024}
                            height={490}
                            alt="AI"/>

                            <Loading className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"/>

                            <ScrollParallax isAbsolutelyPositioned>
                                <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-[#474060]/40 backdrop-blur border border-white/10 rounded-2xl xl:flex">
                                    {heroIcons.map((icon, index) => (
                                    <li className="p-5" key={index}>
                                        <img src={icon} width={24} height={25} alt={icon} />
                                    </li>
                                    ))}
                                </ul>
                            </ScrollParallax>

                            <ScrollParallax isAbsolutelyPositioned>
                                <Notification
                                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                                    title="Nice Backyard"
                                />
                            </ScrollParallax>
                        </div>
                    </div>

                    <Gradient />
                </div>
                <div className='opacity-[.06] absolute -top-[54%} left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[50%]'>
                    <img
                    src={avartar}
                    className='w-full'
                    width={1440}
                    height={1800}
                    alt="hero"
                    />
                </div>

                <BackgroundCircles />
            </div>
            <CompanyLogos className="hidden md:block relative z-10 mt-20" />
        </div>
        <BottomLine />
    </Section>
  )
}

export default Hero