import React from 'react'
import { Laptop } from '../../types/types'


const Pandm = ({product}:{product:Laptop}) => {
  return (
    <div className="flex flex-col gap-2 pl-2  py-2 ">
    <p className="text-sm">
      <span className="font-semibold text-teal-500 text-lg">Name : </span>
      <span className="font-semibold text-white">{product.processor?.processorname}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold text-teal-500 text-lg">SSD : </span>
      <span className="font-semibold text-white">
        {product.processor.ssd ? (
          <span>Yes</span>
        ) : (
          <span>No</span>
        )}
      </span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">RAM : </span>
      <span className="font-semibold text-white">{product.processor?.ram}</span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Type : </span>
      <span className="font-semibold text-white">{product.processor?.ramtype}</span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Processor Variant : </span>
      <span className="font-semibold text-white">{product.processor?.processorVariant}</span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Graphic Processor : </span>
      <span className="font-semibold text-white">{product.processor?.graphicProcessor}</span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Number of Cores : </span>
      <span className="font-semibold text-white">{product.processor?.numberOfCores}</span>
    </p>
    <p className="">
      <span className="font-semibold text-teal-500 text-lg">Storage Type : </span>
      <span className="font-semibold text-white">{product.processor?.storageType}</span>
    </p>
  </div>
  )
}

export default Pandm