import React from 'react'
import Image from 'next/image'
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";

const ExpenseBreakdown = () => {

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
    <>
        <div className="flex items-center justify-between mb-2">
        <h3 className='text-[#878787] text-md'>Expenses Breakdown</h3>
        
         <span className='flex items-center gap-2'>
            <p className='text-xs'>*compare to last month</p>
        </span> 
        </div>

        <div className='bg-[#FFFFFF] grid grid-cols-3 grid-rows-2 px-4 py-2 rounded-md'>
        {expenses.map((expense, index) => {

            const {id, title, percentage, price, icon, arrow} = expense
            const isLastRow = index >= expenses.length - 3; // Adjust based on number of columns
            const isSecondOrThirdColumn = index % 3 !== 0;
            // const isFirstColumn = index % 3 === 0;
            // const isLastColumn = (index + 1) % 3 === 0;
            return(
            // <div key={id} 
            // className="flex justify-between items-center border-b border-l p-5"
            // > 
            <div
            // key={id}
            // className={`flex justify-between items-center p-5 
            //   ${!isLastRow ? "border-b border-gray-200" : ""} 
            //   ${!isFirstColumn && !isLastColumn ? "border-l border-gray-200" : ""}`}
            key={id}
            className={`flex justify-between items-center p-5 
              ${!isLastRow ? "border-b border-gray-200" : ""} 
              ${isSecondOrThirdColumn ? "border-l border-gray-200" : ""}`}
          >
            <div className="flex items-center gap-2">
            <div className='bg-[#F4F4F4] p-2 rounded-sm text-center'>
                <Image
                src={icon}
                width={30}
                height={30}
                alt={title}
                />
            </div>
            <div>
                <h3 className='text-[#666666] text-xs'>{title}</h3>
                <h3 className='text-[#525256] font-bold text-sm'>${price}</h3>

                <div className='flex items-center gap-1'>
                <p className='text-[#9F9F9F] text-xs'>{percentage}%*</p>
                {arrow}
                </div>

            </div>
            </div>
            <GoArrowRight color="#9F9F9F" size={25}/>
            </div>
            )
        })}
       
        </div>
    </>
  )
}

export default ExpenseBreakdown