import React from 'react'
import { Laptop } from '../../types/types'


const Warranty = ({product}:{product : Laptop}) => {
  return (
    <div className="flex flex-col gap-2 pl-2 py-2 ">
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Warranty Details : </span>
      <span className='text-white font-semibold'>{product?.warranty?.warrantyDetails}</span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Warranty Period : </span>
      <span className='text-white font-semibold'>{product?.warranty?.warrantyPeriod}</span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Warranty Type : </span>
      <span className='text-white font-semibold'>{product?.warranty?.warrantyType}</span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Warranty Summary : </span>
      <span className='text-white font-semibold'>{product?.warranty?.warrantySummary}</span>
    </p>
  </div>
  )
}

export default Warranty