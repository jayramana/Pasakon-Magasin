import React from 'react'
import { Laptop } from '../../types/types'


const Daaf = ({product}:{product : Laptop}) => {
  return (
    <div className="flex flex-col gap-2 pl-2  py-2 ">
    <p className="">
      <span className="font-semibold text-lg text-teal-500">Screen Size : </span>
      <span className='text-white font-semibold'>{product?.displayAudio?.screenSize}</span>
    </p>
    <p className="">
      <span className="font-semibold text-lg text-teal-500">Screen Type : </span>
      <span className='text-white font-semibold'>{product?.displayAudio?.screenType}</span>
    </p>
    <p className="">
      <span className="font-semibold text-lg text-teal-500">Screen Resolution : </span>
      <span className='text-white font-semibold'>{product?.displayAudio?.screenResolution}</span>
    </p>
    <p className="">
      <span className="font-semibold text-lg text-teal-500">Touch Screen : </span>
      {product?.displayAudio?.[0]?.touchScreen ? (
        <span className='text-white font-semibold'>Yes</span>
      ) : (
        <span className='text-white font-semibold'>No</span>
      )}
    </p>
    <p className="">
      <span className="font-semibold text-lg text-teal-500">Internal Mic : </span>
      <span className='text-white font-semibold'>{product?.displayAudio?.internalMic}</span>
    </p>
    <p className="">
      <span className="font-semibold text-lg text-teal-500">Speakers : </span>
      <span className='text-white font-semibold'>{product?.displayAudio?.speakers}</span>
    </p>
  </div>
  )
}

export default Daaf