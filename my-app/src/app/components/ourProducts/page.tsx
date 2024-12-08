import ProductSectionn from "../productSection/page";
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
        <ProductSectionn products={ProductSection1} cols="4"/>
        <ProductSectionn products={ProductSection2} cols="4"/>
      </div>
    </div>
  )
}

export default OurProducts;
