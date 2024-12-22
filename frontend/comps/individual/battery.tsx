import React from 'react'
import { Laptop } from '../../types/types'


const Battery = ({product}:{product : Laptop}) => {
  return (
    <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
    <p className="text-sm">
      <span className="font-semibold">Battery Cell Type : </span>
      <span>{product?.battery?.[0]?.batterycelltype}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Number of Cells : </span>
      <span>{product?.battery?.[0]?.numberofcells}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">
        Battery Energy Content :{" "}
      </span>
      <span>{product?.battery?.[0]?.batteryenergycontent}</span>
    </p>
  </div>
  )
}

export default Battery