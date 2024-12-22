'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import Charts from './Charts'
import { BsChevronRight } from "react-icons/bs";
import MasterCard from './MasterCard';
import Goals from './Goals';
import UpComingBills from './UpComingBills';
import DefaultModal from './DefaultModal';
import EdiitTargetAmountForm from './EdiitTargetAmountForm';

const TotalBalance = ({title, price}: TotalBalanceProps) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className='w-full pt-4'>

        <div className="flex items-center justify-between pb-2">
        <h3 className='text-[#878787] text-md'>{title}</h3>
        {title === "Upcoming Bills" &&
         <span className='flex items-center gap-2'>
            <p className='capitalize text-xs text-[#878787]'>view all</p>
            <BsChevronRight size={10}/>
        </span> } 
        </div>
        
        <div className='bg-white rounded-lg p-3'>    
        <div className={`flex items-center justify-between pb-2 ${
                title === "Upcoming Bills" ? "" : "border-b-2 border-[#F3F3F3]"}`}
        >
             {/* Price and the edit pen begins */}
            <div className='flex items-center gap-2'>
            <h2 className='font-bold text-[#191919] text-lg'>{price ? `$${price}` : null}</h2>
            {title === "Goals" ?
               <div className='bg-[#F4F4F4] p-2 rounded-sm' onClick={handleOpenModal}>
               <Image
               src="/icons/edit.svg"
               width={10}
               height={10}
               alt='edit '
               />
           </div> : ""
            }
            </div>
            {/* Price and the edit pen ends */}

            {title === "Total Balance" && <small>All Accounts</small>}
            {title === "Goals" && <small>May, 2023</small>}
            
            </div>

            {/* Total Balance Card begins */}
            {title === 'Total Balance' &&
            <div className='my-3'>
            <MasterCard/>
            </div>
            }

            {title === 'Total Balance' &&
            <div className='flex justify-between items-center'>
            <div className='flex items-center gap-1'>
            <Image
                src="/icons/chevron-right.svg"
                width={15}
                height={15}
                alt='right arrow'
            />
            <small>Previous</small>
            </div>

            <div className='flex items-center gap-1'>
            <small>Next</small>
            <Image
                src="/icons/chevron-left.svg"
                width={15}
                height={15}
                alt='left arrow'
            />
            </div>
        </div>
        }
        {/* Total Balance Card ends */}

        {/* Goals Card begins */}
        {title === 'Goals' &&
        <div className='flex items-center justify-between'>
       
        <div className='flex-1'>
        <Goals/>
        </div>

        <div className='flex-1'>
        <Charts/>
        </div>

        </div>
         }
 
        {/* Goals Card ends */}

         {/* Upcoming Bills begins */}
        {title === "Upcoming Bills" && (
        <>
        <UpComingBills/>
        </>
        )}
        {/* Upcoming Bills ends */}        

        </div>
        <DefaultModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <EdiitTargetAmountForm/>
        </DefaultModal> 
    </div>
  )
}

export default TotalBalance





























