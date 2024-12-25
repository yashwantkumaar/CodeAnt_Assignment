import React from 'react'
import img1 from "../assets/img/left.png"

const LeftComp = () => {
  return (
    <div className="w-full h-full bg-white shadow-sm">
      <img src={img1} alt="" className='object-contain w-full h-full' />
    </div>
  )
}

export default LeftComp
