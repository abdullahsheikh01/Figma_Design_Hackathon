import ProductSection from "../productSection/page";
import { ProductSection1 } from "../../../../productsData";
const FeaturedProducts = () => {
  return (
    <div className='flex flex-col mt-6 pl-[15.625%] pr-[15.625%] gap-10'>
      <h3 className='font-inter font-semibold text-[32px]'>
        Featured Products</h3>
        <ProductSection products={ProductSection1} cols="4"/>
    </div>
  )
}

export default FeaturedProducts;
