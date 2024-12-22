import React from 'react'
import { Laptop } from '../../types/types'


const Pandm = ({product}:{product:Laptop}) => {
  return (
    <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
    <p className="text-sm">
      <span className="font-semibold">Name : </span>
      <span>{product.processor?.[0]?.processorname}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">SSD : </span>
      <span>
        {product.processor?.[0].ssd ? (
          <span>Yes</span>
        ) : (
          <span>No</span>
        )}
      </span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">RAM : </span>
      <span>{product.processor?.[0].ram}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Type : </span>
      <span>{product.processor?.[0].ramtype}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Processor Variant : </span>
      <span>{product.processor?.[0].processorVariant}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Graphic Processor : </span>
      <span>{product.processor?.[0].graphicProcessor}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Number of Cores : </span>
      <span>{product.processor?.[0].numberOfCores}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Storage Type : </span>
      <span>{product.processor?.[0].storageType}</span>
    </p>
  </div>
  )
}

export default Pandm