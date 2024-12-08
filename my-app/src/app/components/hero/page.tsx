import Image from "next/image"
const Hero = () => {
    return (
        <div className="pl-[15.625%] pr-[15.6%]">
            <div className="bg-[#F0F2F3] h-[850px] w-full rounded-b-[48px]
      flex items-center gap-[130px]">
                <div className="ml-[50px] leading-[66px] mt-[239px] mb-[284px]">
                    <h2 className="font-inter text-[14px] text-[#272343]
             tracking-[2]">
                        Welcome to chairy
                    </h2>
                    <h1 className="font-inter font-bold text-[60px]
                    text-[#272343] mt-6 mb-[49px]">
                        Best Furniture<br />Collection for your interior.
                    </h1>
                    <button className="flex text-white font-inter text-base 
            font-semibold h-[52px] w-[160px] px-[20px] py-[11px] bg-[#029FAE]
            items-center gap-4 rounded-[8px]">
                        <p>Shop Now</p>
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 1.5L17 6M17 6L12.5 10.5M17 6H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <Image src="/chair.png" height={364} width={454}
                alt="chair.png" className="mr-[10px]"
                />
            </div>
        </div>
    )
}

export default Hero
