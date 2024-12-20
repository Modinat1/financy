import React from 'react'
import Image from 'next/image'

const UpComingBills = () => {
  return (
    <div className='bg-[#FFFFFF]'>
            <div className="flex justify-between items-center my-5">
            <div className="flex items-center gap-2">
            <div className='bg-[#F4F4F4] p-2 rounded-lg text-center'>
                <h3 className='text-[#666666] text-xs'>May</h3>
                <h2 className='text-[#191919] text-xl font-extrabold'>15</h2>
            </div>
            <div>
                <h3 className='text-[#666666] text-sm'>Figma</h3>
                <h3 className='text-[#525256] font-bold text-md'>Figma - Monthly</h3>
                <p className='text-[#9F9F9F] text-xs'>Last Charge - 14 May, 2022</p>
            </div>
            </div>
            <div className='border border-[#525256] font-bold rounded-sm px-3 py-1 text-[#525256]'>$150</div>
            </div>

            <hr className='my-3'/>
            {/* -------------------------- */}
            <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
            <div className='bg-[#F4F4F4] p-2 rounded-lg text-center'>
                <h3 className='text-[#666666] text-xs'>June</h3>
                <h2 className='text-[#191919] text-xl font-extrabold'>16</h2>
            </div>
            <div>
                <Image src='/icons/Adobe.svg' height={60} width={60} alt='logo'/>
                {/* <h3 className='text-[#666666] text-sm'>Adobe</h3> */}
                <h3 className='text-[#525256] font-bold text-md'>Adobe - Yearly</h3>
                <p className='text-[#9F9F9F] text-xs'>Last Charge - 17 Jun, 2023</p>
            </div>
            </div>
            <div className='border border-[#525256] font-bold rounded-sm px-3 py-1 text-[#525256]'>$559</div>
            </div>
        </div>
  )
}

export default UpComingBills