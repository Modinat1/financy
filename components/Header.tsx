// import React from 'react'
// import Image from 'next/image'

// type HeaderProps = {
//     hide?: boolean
// }

// const Header = ({hide}: HeaderProps) => {
//   return (

//     <header >
//     <div className='flex justify-between pb-4'>
//         <div className="flex items-center gap-5">
//         {!hide && <h1 className='font-bold text-2xl capitalize'>Hello Modinat</h1>}
        
//         <div className='flex items-center gap-2'>
//         <Image
//         src="/icons/chevrons-right.svg"
//         width={20}
//         height={20}
//         alt='right arrow'
//         />
//         <h2 className='text-[#9F9F9F] text-xs'>May 19, 2023</h2>
//         </div>
//         </div>

//         <div className="flex items-center gap-3">
//         <Image
//         src="/icons/notification.svg"
//         width={20}
//         height={20}
//         alt='notification bell'
//         />

//         <div className="bg-white flex items-center py-2 px-4 rounded-xl">
//         <input className='w-full' type="text" placeholder='Search here' />
//         <Image
//         src="/icons/search.svg"
//         width={20}
//         height={20}
//         alt='search icon'
//         />
//         </div>

//         </div>
//         </div>

//         <hr className='my-2'/>
//     </header>
//   )
// }

// export default Header
'use client'

import React from 'react';
import Image from 'next/image';
import { TbMenuDeep } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from '@/redux/features/HeaderSlice';

type HeaderProps = {
  hide?: boolean;
};

const Header = ({ hide }: HeaderProps) => {
  const dispatch = useDispatch();
  const showSideBar = useSelector((state: any) => state.header.showSideBar);
  return (
    <header>
      <div className="flex justify-between pb-4">
        <div className="flex items-center gap-5">
          {!hide && <h1 className="font-bold text-2xl capitalize">Hello Modinat</h1>}

          <div className="flex items-center gap-2">
            <Image
              src="/icons/chevrons-right.svg"
              width={20}
              height={20}
              alt="right arrow"
            />
            <h2 className="text-[#9F9F9F] text-xs">May 19, 2023</h2>
          </div>
        </div>

        {/* Search and Notification */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Notification Bell */}
          <Image
            src="/icons/notification.svg"
            width={20}
            height={20}
            alt="notification bell"
          />

          {/* Search Input */}
          <div className="bg-white flex items-center py-2 px-4 rounded-xl">
            <input className="w-full" type="text" placeholder="Search here" />
            <Image
              src="/icons/search.svg"
              width={20}
              height={20}
              alt="search icon"
            />
          </div>
        </div>
        {/* burger  */}
        <div className='md:hidden' onClick={() => dispatch(toggleSideBar())}>
        <TbMenuDeep size={30}/>
        </div>
        {/* burger  */}
      </div>

      <hr className="my-2" />
    </header>
  );
};

export default Header;
