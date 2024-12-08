import { categoryProducts } from "../../../../categoryProducts";
import { categoryProduct } from "../../../../categoryProducts";
import Link from "next/link";
const TopCategories = () => {
    return (
      <div className='flex flex-col mt-[140.5px] pl-[15.625%] pr-[15.625%] gap-10'>
        <h3 className='font-inter font-semibold text-[32px]'>
        Top Categories</h3>
        <div className="grid grid-cols-3 gap-3">
        {
            categoryProducts.map((product:categoryProduct,index:number)=>{
                return(
                    <div key={index}>
                        <Link href="">
                        <div className="h-[339.2px] w-[339.2px] flex bg-cover
                    rounded-[14px] flex-col justify-end"
                        style={{backgroundImage:`url(${product.imgUrl})`}}>
                            <div className="flex w-full h-[68px] bg-[rgba(0,0,0,0.7)] 
                            rounded-b-[14px]">
                            <div className="flex flex-col gap-1 m-3">
                            <p className="text-white font-inter
                             text-[20px] font-semibold">{product.title}</p>
                            <p className="font-inter text-white 
                            text-[14px]">{product.products} products</p>
                            </div>
                            </div>
                    </div>
                    </Link>
                    </div>
                )
            })
        }
        </div>
      </div>
    )
  }
  
export default TopCategories;
  