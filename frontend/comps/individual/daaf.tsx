import React from 'react'
import { Laptop } from '../../types/types'


const Daaf = ({product}:{product : Laptop}) => {
  return (
    <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
    <p className="text-sm">
      <span className="font-semibold">Screen Size : </span>
      <span>{product?.displayAudio?.[0]?.screenSize}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Screen Type : </span>
      <span>{product?.displayAudio?.[0]?.screenType}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Screen Resolution : </span>
      <span>{product?.displayAudio?.[0]?.screenResolution}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Touch Screen : </span>
      {product?.displayAudio?.[0]?.touchScreen ? (
        <span>Yes</span>
      ) : (
        <span>No</span>
      )}
    </p>
    <p className="text-sm">
      <span className="font-semibold">Internal Mic : </span>
      <span>{product?.displayAudio?.[0]?.internalMic}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Speakers : </span>
      <span>{product?.displayAudio?.[0]?.speakers}</span>
    </p>
  </div>
  )
}

export default Daaf