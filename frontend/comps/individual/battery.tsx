import React from 'react'
import { Laptop } from '../../types/types'


const Battery = ({product}:{product : Laptop}) => {
  return (
    <div className="flex flex-col gap-2 pl-2  py-2 ">
    <p className="">
      <span className="font-semibold text-lg text-teal-500">Battery Cell Type : </span>
      <span className='text-white font-semibold'>{product?.battery?.batterycelltype}</span>
    </p>
    <p className="">
      <span className="font-semibold text-lg text-teal-500">Number of Cells : </span>
      <span className='text-white font-semibold'>{product?.battery?.numberofcells}</span>
    </p>
    <p className="">
      <span className="font-semibold text-lg text-teal-500">
        Battery Energy Content :{" "}
      </span>
      <span className='text-white font-semibold'>{product?.battery?.batteryenergycontent}</span>
    </p>
  </div>
  )
}

export default Battery