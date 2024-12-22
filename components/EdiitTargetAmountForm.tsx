import React from 'react'
import Button from './Button'

const EdiitTargetAmountForm = () => {
  return (
    <form className='w-full mx-auto space-y-4'>
        <div className=''>
            <label className='block text-[#525256] text-sm font-bold mb-2' htmlFor="target_amount">Target Amounts</label>
            <input className='w-full border border-[#878787] rounded-lg px-3 py-2 focus:outline-none' type="text" placeholder='$500000' />
        </div>

        <div className='my-3'>
            <label className='block text-[#525256] text-sm font-bold mb-2' htmlFor="target_amount">Present Amounts</label>
            <input className='w-full border border-[#878787] rounded-lg px-3 py-2 focus:outline-none' type="text" placeholder='Write presents amounts here' />
        </div>

        <div className='my-5'>
        <Button className='block mx-auto px-16 py-2' text='Save'/>
        </div>
    </form>
  )
}

export default EdiitTargetAmountForm

