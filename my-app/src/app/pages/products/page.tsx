import ProductSectionn from "@/app/components/productSection/page";
import { ProductSection3 } from "../../../../productsData";
import { ProductSection4 } from "../../../../productsData";
import { ProductSection5 } from "../../../../productsData";
import ProductsHero from "@/app/components/products_hero/page";
import Footer from "@/app/components/footer/page";
const Products = () => {
  return (
    <div>
        <div className="pl-[15.625%] pr-[15.6%] flex flex-col mt-[57px]">
      <h2 className="font-inter font-semibold text-[32px] text-[#272343]">All Products</h2>
      <div className="flex flex-col gap-20">
        <ProductSectionn products={ProductSection3} cols="4"/>
        <ProductSectionn products={ProductSection4} cols="4"/>
        <ProductSectionn products={ProductSection5} cols="4"/>
      </div>
    </div>
    <ProductsHero/>
    <Footer/>
    </div>
  )
}

export default Products
