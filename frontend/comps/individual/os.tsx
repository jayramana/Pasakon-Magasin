import React from 'react'
import { Laptop } from '../../types/types'


const Os = ({product}:{product:Laptop}) => {
  return (
    <div className="flex flex-col gap-2 pl-2  py-2 ">
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">OS : </span>
      <span className='text-white font-semibold'>{product.os?.os}</span>
    </p>
    <p>
      <span className="font-semibold text-teal-500 text-lg">OS Architecture: </span>
      <span className='text-white font-semibold'>{product.os?.osarchitecture}</span>
    </p>
  </div>
  )
}

export default Os