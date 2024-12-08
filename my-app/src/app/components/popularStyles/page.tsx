import Image from "next/image";
import { popularProducts } from "../../../../popularProducts";
import { popularProduct } from "../../../../popularProducts";
const PopularStyles = () => {
  return (
    <div className="flex gap-0 px-[15.625%] mt-[229px]">
      <div className="flex justify-center">
        <p className="popular_text font-poppins text-[34px]">
          Explore new and popular styles</p>
      </div>
      <div className="grid grid-cols-2">
      <div>
      <Image src="/popularChair1.svg"
      alt="Orange Chair"
      height={518.4} width={518.4}
      className="rounded-none"
      />
      </div>
      <div className="grid grid-cols-2 grid-rows-2">
        {
          popularProducts.map(
            (product:popularProduct,index:number)=>{
              return(
                <Image src={product.imgUrl}
                alt={product.title}
                width={250}
                height={250}
                key={index}
                />
              )
            }
          )
        }
      </div>
      </div>
    </div>
  )
}

export default PopularStyles;
