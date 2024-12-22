import React from 'react'
import { Laptop } from '../../types/types'


const Warranty = ({product}:{product : Laptop}) => {
  return (
    <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
    <p className="text-sm">
      <span className="font-semibold">Warranty Details : </span>
      <span>{product?.warranty?.[0]?.warrantyDetails}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Warranty Period : </span>
      <span>{product?.warranty?.[0]?.warrantyPeriod}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Warranty Type : </span>
      <span>{product?.warranty?.[0]?.warrantyType}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Warranty Summary : </span>
      <span>{product?.warranty?.[0]?.warrantySummary}</span>
    </p>
  </div>
  )
}

export default Warranty