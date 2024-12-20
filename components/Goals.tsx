import React from 'react'
import Image from 'next/image'

const GoalsBox = () => {
  return (
    <>
        <div className='flex items-start gap-1 mb-2'>
        <Image
         src="/icons/award.svg"
         width={20}
         height={20}
         alt='target achieved'
        />

        <div className='leading-3'>
            <small className='text-xs text-[#878787]'>Target Achieved</small>
            <h3 className='font-bold text-sm'>$12,500</h3>
        </div>
    </div>
    
    <div className='flex items-start gap-1'>
        <Image
         src="/icons/target.svg"
         width={20}
         height={20}
         alt='month target'
        />

        <div className='leading-3'>
            <small className='text-xs text-[#878787]'>This month Target</small>
            <h3 className='font-bold text-sm'>$20,500</h3>
        </div>
    </div>
    </>

  )
}

export default GoalsBox