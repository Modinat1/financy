'use client'

import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { useSelector } from "react-redux";

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) 
    {
      
      const showSideBar = useSelector((state: any) => state.header.showSideBar);
    return (
      <main className="relative flex w-full font-inter">

      <div
       className='hidden md:flex'>
      <Sidebar />
      </div>

      {/* <div className={`${showSideBar ? "flex" : "hidden"} md:hidden`}>
        <MobileNav/>
      </div> */}
       {/* Mobile Navigation */}
       <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transform transition-transform duration-300 ease-in-out ${
          showSideBar ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } md:hidden`}
      >
        <MobileNav />
      </div>

          <div className="w-full min-h-screen bg-[#F4F5F7] md:w-[80%] md:ml-[20%] flex flex-col p-4">
          {children}
          </div>

      </main>
    );
  }
