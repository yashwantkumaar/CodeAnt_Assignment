
import React from 'react'
import { TabsDemo } from './Tabsdemo'
import img1 from "../assets/img/CodeAnt Ai.png"
const RightComp = () => {
  return (
    <div>
      <div className='flex flex-col items-center my-3 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto'>
        <img src={img1} alt="" className="w-3/4 max-w-xs object-contain"/>
        <h1 className='text-2xl sm:text-2xl mb-3 font-bold'>Welcome to CodeAnt AI</h1>
        <TabsDemo />
      </div>
      <div className="flex justify-center items-center my-3 px-2">
        <span>By signing up you agree to <strong>Privacy Policy.</strong></span>
      </div>
    </div>
  )
}

export default RightComp
