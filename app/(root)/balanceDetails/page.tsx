import Button from '@/components/Button'
import Header from '@/components/Header'
import PagesHeader from '@/components/PagesHeader'
import TransactionHistoryTable from '@/components/TransactionHistoryTable'
import { DivideCircle } from 'lucide-react'
import React from 'react'

const BalanceDetails = () => {
    const details = [
        {
            id: 1,
            bankName: "AB Bank Ltd."
        }
    ]

    const transactions = [
        { date: "17 Apr, 2023", status: "Complete", type: "Credit", receipt: "BC52d5DKDJS", amount: 250, category: "revenue" },
        { date: "18 Apr, 2023", status: "Pending", type: "Debit", receipt: "AJ72k5KFJS", amount: 150, category: "expenses" },
        { date: "19 Apr, 2023", status: "Complete", type: "Credit", receipt: "ZZ25d5DKDJS", amount: 300, category: "revenue" },
        { date: "20 Apr, 2023", status: "Failed", type: "Debit", receipt: "XY32d5PKS", amount: 200, category: "expenses" },
    ];
  return (
    <section>
        <Header hide/>
        <PagesHeader pageTitle='Account Details'/>

        <div className='bg-[#ffffff] rounded-md p-4'>

        <ul className='grid grid-cols-3 gap-6 grid-rows-2 mb-3'>

            <li>
                <h5 className='capitalize text-[#878787] text-xs'>Bank Name</h5>
                <h3 className='text-sm text-[#525256] font-bold'>AB Bank Ltd.</h3>
            </li>

            <li>
                <h5 className='capitalize text-[#878787] text-xs'>Account Type</h5>
                <h3 className='text-sm text-[#525256] font-bold'>Checking</h3>
            </li>

            <li>
                <h5 className='capitalize text-[#878787] text-xs'>balance</h5>
                <h3 className='text-sm text-[#525256] font-bold'>$25,056.00</h3>
            </li>

            <li>
                <h5 className='capitalize text-[#878787] text-xs'>branch name</h5>
                <h3 className='text-sm text-[#525256] font-bold'>Park street branch</h3>
            </li>

            <li>
                <h5 className='capitalize text-[#878787] text-xs'>account number</h5>
                <h3 className='text-sm text-[#525256] font-bold'>133 456 886 8***</h3>
            </li>

        </ul>

        <div className='flex items-center mt-6 gap-6'>
            <Button
            text='Edit Details'
            />

            <small className='capitalize font-medium'>remove</small>
        </div>

        </div>

        <div className='my-3'>
        <PagesHeader pageTitle='Transaction History'/>
        <div className='bg-[#FFFFFF] rounded-lg p-4'>
        <TransactionHistoryTable transactions={transactions}/>

        {/* <Button
        text="Load More"
        className='mx-auto'
        /> */}
        </div>
        </div>
        
    </section>
  )
}

export default BalanceDetails