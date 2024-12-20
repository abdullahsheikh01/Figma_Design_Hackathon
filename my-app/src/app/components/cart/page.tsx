import { cart } from "@/app/cart";
import Image from "next/image";
const Cart = () => {
  return (
    <div className="pl-[226.4px] pr-[232px] flex gap-[100px]">
        <div className="mt-[89px] mb-[84px]">
            <h4 
            className="font-inter font-medium text-[22px] text-[#111111]">
            Bag</h4>
            <div className="flex-col">
                {
                    cart.map(
                        (product,index)=>{
                            return(
                                <div key={index} className="w-[770.4px] border-b-[1px] border-b-[#757575] flex gap-6
                                pb-8 relative mt-6">
                                    <Image src={product.imgUrl} height={150} width={150}
                                    alt={product.title}
                                    />
                                    <div>
                                        <div className="flex flex-col gap-6">
                                            <h6 className="font-inter text-base text-[#272343]"
                                            >{product.title}</h6>
                                            <div className="font-inter text-[15px] text-[#757575]">
                                                <p>
                                                    Ashen Slate/Cobalt Bliss</p>
                                                <div className="flex gap-16">
                                                    <div>Size L</div>
                                                    <div>Quantity 1</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <Image src="/love.svg" height={24} width={24}
                                                alt="Love Icon"
                                                />
                                                <Image src="/bin.svg" height={24} width={24}
                                                alt="Delete Icon"
                                                />
                                            </div>
                                        </div>
                                        <div className="absolute right-0 top-0">
                                            <p
                                            className="font-inter text-[15px] text-[#111111]"
                                            >MRP: ${product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
        <div className="mt-[94px] flex flex-col w-[280px]">
            <h4 className="font-inter font-medium text-[21px]">Summary</h4>
            <div className="mt-6">
                <div>
                    <div className="border-b-[1px] border-b-[#75757 pb-8">
                    <div className="flex  gap-[100px]">
                        <div className="font-inter text-[15px]">Sub Total</div>
                        <div className="font-inter text-[14px] font-medium text-[#111111]">$198.00</div>
                    </div>
                    <div className="flex  gap-[100px]">
                        <div className="font-inter text-[15px]">Estimated Delivery & Handling</div>
                        <div className="font-inter text-[14px] font-medium text-[#111111]">Free</div>
                    </div>
                    </div>
                    <div className="border-b-[1px] border-b-[#75757 pb-8 mt-5">
                    <div className="flex  gap-[100px]">
                        <div className="font-inter text-[15px]">Total</div>
                        <div className="font-inter text-[14px] font-medium text-[#111111]">Free</div>
                    </div>
                    </div>
                </div>
            </div>
            <button className="mt-8 w-full bg-[#029FAE] h-12 rounded-[30px] font-inter font-medium text-white">
                Member Checkout
            </button>
        </div>
    </div>
  )
};
export default Cart;