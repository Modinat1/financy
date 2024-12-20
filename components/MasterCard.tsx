import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";

const MasterCard = () => {
  return (
    <div className='bg-[#299D91] rounded-md p-5 w-full'>

        <div className="flex justify-between items-center">

        <div>
        <p className='text-[#BFE2DE] text-sm'>Account Type</p>
        <h3 className='text-[#FFFFFF] text-md font-bold'>Credit Card</h3>
        </div>

        <Image
        src="/icons/Mastercard.svg"
        width={40}
        height={40}
        alt='master card'
        />
        </div>

        <div className='flex items-center justify-between'>
            <p className='text-sm text-[#BFE2DE]'>●●●● ●●●● ●●●● 2598</p>

            <div className='flex justify-between items-center gap-3'>
            <h3 className='font-bold text-[#FFFFFF] text-md'>$25000</h3>
            <div className='bg-[#FFFFFF] w-5 h-5 rounded-full'> <MdArrowOutward className='mx-auto' color='#299D91'/> </div>
            </div>

        </div>
    </div>
  )
}

export default MasterCard