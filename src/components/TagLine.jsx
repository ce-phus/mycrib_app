import React from 'react'
import brackets from '../assets/svg/Brackets'

const TagLine = ({ children, className }) => {
  return (
    <div className={`flex font-light text-xs uppercase ${className || ""}`}>
        {brackets("left")}
            <div className='mx-3 text-[#ADA8C3]'>{children}</div>
        {brackets('right')}
    </div>
  )
}

export default TagLine