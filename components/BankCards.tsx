import Image from 'next/image'
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from './Button';
import Link from 'next/link';

const BankCards = () => {
    const cardTypes = [
    {
        id: 1,
        cardType: "credit card",
        cardName: "master card",
        cardIcon: "/icons/Mastercard.svg",
        cardNo: "3388 4556 8860 8***",
        accountBalance: 25000
    },
    {
        id: 2,
        cardType: "checking",
        cardName: "AB Bank Ltd",
        cardIcon: "/icons/visa.svg",
        cardNo: "3388 4556 8860 8***",
        accountBalance: 25000
    },
    {
        id: 3,
        cardType: "savings",
        cardName: "Brac Bank Ltd",
        cardIcon: "/icons/Mastercard.svg",
        cardNo: "133 456 886 8***",
        accountBalance: 25000
    },
    {
        id: 4,
        cardType: "credit card",
        cardName: "master card",
        cardIcon: "/icons/Mastercard.svg",
        cardNo: "698 456 866 2***",
        accountBalance: 25000
    },
    {
        id: 5,
        cardType: "Loan",
        cardName: "city bank Ltd",
        cardIcon: "/icons/Mastercard.svg",
        cardNo: "363 456 896 6***",
        accountBalance: 25000
    },
    {
        id: 6,
        cardType: "credit card",
        cardName: "master card",
        cardIcon: "/icons/Mastercard.svg",
        cardNo: "3388 4556 8860 8***",
        accountBalance: 25000
    },
    {
        id: 7,
        cardType: "credit card",
        cardName: "master card",
        cardIcon: "/icons/Mastercard.svg",
        cardNo: "3388 4556 8860 8***",
        accountBalance: 25000
    },

]
  return (
    <div className='grid grid-cols-3 gap-4'>
    {cardTypes.map((card) => {
        const {id, cardType, cardName, cardIcon, cardNo, accountBalance} = card
        return(
            <div key={id} className='bg-[#FFFFFF] shadow-md rounded-md p-4'>
                {/* Card title begins */}
                <div className='flex items-center justify-between'>
                    <h3  className='capitalize text-xs text-[#878787]'>{cardType}</h3>
                    <div className='flex gap-1'>
                        <h4 className='capitalize text-xs text-[#878787]'>{cardName}</h4>
                        <Image
                        src={cardIcon}
                        width={30}
                        height={30}
                        alt={cardName}
                        />
                    </div>
                </div>
                <hr className='my-2'/>
                {/* Card title ends */}

                {/* card no */}
                <div className='leading-3 my-3'>
                <h3 className='font-bold text-sm'>{cardNo}</h3>
                <small className='capitalize text-[#878787] text-xs'>Account Number</small>
                </div>

                {/* account Balance */}
                <div className='leading-3 my-3'>
                <h3 className='font-bold text-sm'>${accountBalance}</h3>
                <small className='capitalize text-[#878787] text-xs'>total amount</small>
                </div>
            
            <div className='flex justify-between items-center'>
                <small className='text-[#299D91] text-xs'>Remove</small>
                <Link href="/balanceDetails">
                <Button
                text="Details"
                icon= {<MdKeyboardArrowRight color='#FFFFFF' size={20}/>}
                />
                </Link>
            </div>

            </div>
    )
    })}
    </div>
  )
}

export default BankCards