import ProductSectionComp from "../ProductSection";
import { ProductSection1 } from "../../../../productsData";
import { ProductSection2 } from "../../../../productsData";
const OurProducts = () => {
  return (
    <div className='mt-[173px] px-[15.625%]'>
      <div className='flex justify-center '>
      <h3 className='font-inter font-semibold text-[32px]'>
      Our Products</h3>
      </div>
      <div className='mt-[73px] grid grid-rows-2 mb-[134px]'>
        <ProductSectionComp products={ProductSection1}/>
        <ProductSectionComp products={ProductSection2}/>
      </div>
    </div>
  )
}

export default OurProducts;
