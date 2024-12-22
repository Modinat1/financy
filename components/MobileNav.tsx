'use client'

import Image from "next/image"
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Footer from "./Footer";
import { LiaTimesSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "@/redux/features/HeaderSlice";

const MobileNav = () => {
    const user = {
        firstName: "Modinat",
        lastName: "Adesola"
    }

    const pathname = usePathname()
    const dispatch = useDispatch()
    return(
        <section className="fixed left-0 top-0 h-screen w-[50%] bg-black flex flex-col py-4 px-6 justify-between items-center z-50">
        
        <LiaTimesSolid onClick={() => dispatch(toggleSideBar())} className="block ml-48 font-extrabold" size={20} color="#ffffff"/>
            
        <nav>
            <div className="space-y-4"></div>
            <Link href="/">
            <Image
            src="/icons/logo.svg"
            width={20}
            height={20}
            alt="financy logo"
            className="w-40 mb-5"
            />
            </Link>

        {/* <div className="space-y-4"></div> */}
        {sidebarLinks.map((link) => {
            const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
            return(
                <Link href={link.route} key={link.route} className={cn("text-white flex gap-3 p-3 2xl:p-4 rounded-sm", {"bg-[#299D91]": isActive})}>
                <Image
                src={link.imgURL}
                width={18}
                height={18}
                alt="navlink"
                className={cn({
                    'brightness-[3] invert-0' : isActive
                })}
                />
            <h3 className={cn("text-xs text-[#929292]", {"!text-[#FFF]": isActive})}>{link.label}</h3>
                </Link>
            )
        })}
        </nav>

        <Link href="/" className="w-full flex gap-3 p-3 2xl:p-4 bg-[#262626]">
        <Image
        src="/icons/logout.svg"
        width={18}
        height={18}
        alt="logout"
        />
        <h3 className="text-[#C5C5C5] text-xs">Logout</h3>
        </Link>

        <Footer firstName={user.firstName} lastName={user.lastName}/>
        </section>
    )
}

export default MobileNav;


