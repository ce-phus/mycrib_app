import React from 'react'
import { loading } from '../assets'

const Loading = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-[#0E0C15]/70 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      Getting Listings...
    </div>
  )
}

export default Loading