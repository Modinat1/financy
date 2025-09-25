import React, { useState } from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import Image from 'next/image';
import Button from './Button';
import { CiEdit } from 'react-icons/ci';
import PagesHeader from './PagesHeader';
import DefaultModal from './DefaultModal';

const ExpensesGoalsCategory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const expenses = [
        {
         id: 1,
         title: 'Housing',
         percentage: 15,
         price: 250,
         icon: "/icons/Housing.svg",
         arrow: <IoIosArrowRoundUp color='#4DAF6E' size={20}/>
        },

        {
        id: 2,
        title: 'Food',
        percentage: 0.8,
        price: 350,
        icon: "/icons/Food.svg",
        arrow: <IoIosArrowRoundDown color='#E73D1C' size={20}/>
        },

        {
        id: 3,
        title: 'Transportation',
        percentage: 12,
        price: 50,
        icon: "/icons/Transport.svg",
        arrow: <IoIosArrowRoundDown color='#E73D1C' size={20}/>
        },

        {
        id: 4,
        title: 'Entertainment',
        percentage: 15,
        price: 80,
        icon: "/icons/Movie.svg",
        arrow: <IoIosArrowRoundDown color='#E73D1C' size={20}/>
        },

        {
        id: 5,
        title: 'Shopping',
        percentage: 25,
        price: 420,
        icon: "/icons/Shopping.svg",
        arrow: <IoIosArrowRoundUp color='#4DAF6E' size={20}/>
        },

        
        {
        id: 6,
        title: 'Others',
        percentage: 23,
        price: 650,
        icon: "/icons/Others.svg",
        arrow: <IoIosArrowRoundUp color='#4DAF6E' size={20}/>
        },
       
    ]
    
  return (
    <section className="mt-5">
        {/* <PagesHeader pageTitle="Expenses Breakdown by Category"/> */}
        <h3 className="text-[#8B8B8B] text-md mb-2">Expenses Breakdown by Category</h3>
    <div className='w-full md:grid grid-cols-3 grid-rows-2 gap-4'>
        {expenses.map((expense) => {
            const {title, percentage, price,icon} = expense
            return(
                <div className='bg-[#ffffff] flex items-center justify-between rounded-lg p-4 mb-3 md:mb-0'>
                    <div className="flex gap-3 items-center">
                    <div className='bg-[#F4F4F4] rounded-md p-2'>
                        <Image
                        src={icon}
                        width={30}
                        height={30}
                        alt={title}
                        />
                    </div>

                    <div>
                        <h3 className='text-[#A8A8A8] text-sm'>{title}</h3>
                        <h2 className='text-[#191919] font-extrabold text-md'>${price}</h2>
                    </div>
                    </div>

                    {/* <div> */}
                    <Button onClick={handleOpenModal} text='Adjust' icon={<CiEdit color="#47ABA0" size={20}/>} className="block font-bold text-[#299D91] border-2 border-[#47ABA0] bg-transparent p-2"/>
                    {/* </div> */}
                </div>
            )
        })}
    </div>
    <DefaultModal isOpen={isModalOpen} onClose={handleCloseModal}>
    <form className='w-full mx-auto space-y-4'>
        <div className=''>
            <label className='block text-[#525256] text-sm font-bold mb-2' htmlFor="target_amount">Target Amounts</label>
            <input className='w-full border border-[#878787] rounded-lg px-3 py-2 focus:outline-none' type="text" placeholder='$500000' />
        </div>

        <div className='my-5'>
        <Button className='text-[#ffffff] block mx-auto px-12 py-2' text='Save'/>
        </div>
    </form>
        </DefaultModal> 
    </section>
  )
}

export default ExpensesGoalsCategory