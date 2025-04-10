import React from 'react'
import { lulwanda } from '../assets'

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
        <h5 className='font-light text-xs tracking-tagline uppercase text-gray-900 text-center'>Helping buyers find their dream homes and properties</h5>
        <ul className='flex'>
            <li className='flex items-center justify-center flex-1 h-[8.5rem] gap-5'>
            <img
        src={lulwanda}
        width={134} height={28}
        className=''/>
        <img
        src={lulwanda}
        width={134} height={28}
        className=''/>
        <img
        src={lulwanda}
        width={134} height={28}
        className=''/>
        <img
        src={lulwanda}
        width={134} height={28}
        className=''/>
            </li>
        </ul>
        
    </div>
  )
}

export default CompanyLogos