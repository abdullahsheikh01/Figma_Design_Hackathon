import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="px-[15.625%] flex h-[74px] w-full items-center 
    justify-between">
        <div>
            <ul className="flex gap-7 text-[#636270] font-inter
             font-medium text-[14px]">
                <Link href="/pages/home">
                <li className="hover:text-[#007580]">Home</li>
                </Link>
                <Link href="">
                <li className="hover:text-[#007580]">Shop</li>
                </Link>
                <Link href="/pages/products">
                <li className="hover:text-[#007580]">Product</li>
                </Link>
                <Link href="">
                <li className="hover:text-[#007580]">Pages</li>
                </Link>
                <Link href="/components/aboutUs">
                <li className="hover:text-[#007580]">About</li>
                </Link>
            </ul>
        </div>
        <Link href="/components/contactUs" className="flex">
            <p className="text-[#272343] font-inter font-medium
                 text-[14px">
                <span className="text-[#636270] font-inter font-medium
                 text-[14px]">
                    Contact: 
                </span> (808) 555-0111
            </p>
        </Link>
    </nav>
  )
}

export default Navbar;
