import Image from "next/image";
const ContactPageBanner = () => {
    const divsData=[
        {
            title: 'High Quality',
            image: '/trophy1.svg',
            text: 'crafted from top materials',
            imageAlt: 'Trophy Icon'
        },
        {
            title: 'Warranty Protection',
            image: '/guranteeLogo.svg',
            text: 'Over 2 years',
            imageAlt: 'Gurantee Icon'
        },
        {
            title: '24/7 Support',
            image: '/customerSupport.svg',
            text: 'Dedicated Support',
            imageAlt: 'Clock Icon'
        }
    ]
  return (
    <div className='w-[1056px] flex gap-[105.6px] items-center mt-[80px] bg-[#F4F4F4] h-[250px] px-[52.8px]'>
      {
        divsData.map((divInfo, index) => {
            return (
                <div className='flex gap-3 relative' key={index}>
                <Image src={divInfo.image} height={40} width={40} alt={divInfo.imageAlt} className="absolute top-0 left-0"/>
                <div className="ml-[50px]">
                    <h3 className="font-poppins font-medium text-2xl">{divInfo.title}</h3>
                    <p className="font-inter text-base">{divInfo.text}</p>
                </div>
                </div>
            )
            })
      }
    </div>
  )
}

export default ContactPageBanner
