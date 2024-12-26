import React from 'react'
import { Laptop } from '../../types/types'

const Connectivity = ({product}:{product : Laptop}) => {
  return (
    <div className="flex flex-col gap-2 pl-2   py-2 ">
    <p className="">
      <span className="font-semibold text-lg text-teal-500">Wireless LAN : </span>
      <span className='font-semibold text-white'>{product?.connectivity?.wirelessLAN}</span>
    </p>
    <p className="">
      <span className="font-semibold text-lg text-teal-500">Bluetooth : </span>
      <span className='font-semibold text-white'>{product?.connectivity?.bluetooth}</span>
    </p>
  </div>
  )
}

export default Connectivity