import React from 'react'
import { Laptop } from '../../types/types'


const Os = ({product}:{product:Laptop}) => {
  return (
    <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
    <p className="text-sm">
      <span className="font-semibold">OS : </span>
      <span>{product.os?.[0].os}</span>
    </p>
    <p>
      <span className="font-semibold">OS Architecture: </span>
      <span>{product.os?.[0].osarchitecture}</span>
    </p>
  </div>
  )
}

export default Os