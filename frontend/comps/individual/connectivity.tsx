import React from 'react'
import { Laptop } from '../../types/types'

const Connectivity = ({product}:{product : Laptop}) => {
  return (
    <div className="flex flex-col gap-2 pl-2 border-b-2 py-2 ">
    <p className="text-sm">
      <span className="font-semibold">Wireless LAN : </span>
      <span>{product?.connectivity?.[0]?.wirelessLAN}</span>
    </p>
    <p className="text-sm">
      <span className="font-semibold">Bluetooth : </span>
      <span>{product?.connectivity?.[0]?.bluetooth}</span>
    </p>
  </div>
  )
}

export default Connectivity