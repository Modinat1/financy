import Link from "next/link";
import Image from "next/image";

const Footer = ({firstName, lastName}: User) => {
    return(
        <footer className="w-full flex gap-3">
        <Image
        src="icons/profile_pic.svg"
        width={30}
        height={30}
        alt="profile picture"
        />

            <div className="text-xs">
            <h3 className="text-white">{firstName} {lastName}</h3>
            <Link href="/">
            <small className="text-[#C5C5C5] ">view profile</small>
            </Link>
            </div>
          
        </footer>
    )
}

export default Footer;