import { categoryProducts } from "./categoryProducts";
export interface ProductSection{
    products:Products[],
    cols:string
}
export interface Products{
    imgUrl:string,
    label?:"New"|"Sales",
    title:string,
    price:string,
    oldPrice?:string,
    id:number,
}
export const ProductSection1:Products[]=[
    {
        title:"Library Stool Chair",
        imgUrl:"/product1.svg",
        label:"New",
        price:"$20",
        id:1,
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/product2.svg",
        label:"Sales",
        price:"$20",
        id:2,
        oldPrice:"$30",
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/product3.svg",
        price:"$20",
        id:3,
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/product4.svg",
        price:"$20",
        id:4,
    },
];

export const ProductSection2:Products[]=[
    {
        title:"Library Stool Chair",
        imgUrl:categoryProducts[0].imgUrl,
        label:"New",
        price:"$20",
        id:1,
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/gray_chair.svg",
        label:"Sales",
        price:"$20",
        id:2,
        oldPrice:"$30",
    },
    {
        title:"Library Stool Chair",
        imgUrl:"/chairWithPillow.svg",
        price:"$20",
        id:3,
    },
    {
        title:"Library Stool Chair",
        imgUrl:ProductSection1[0].imgUrl,
        price:"$20",
        id:4,
    },
];

export const ProductSection3 : Products[] = [
    ProductSection1[0],
    ProductSection1[1],
    ProductSection1[2],
    ProductSection1[3],
];

export const ProductSection4 : Products[] = [
    {
        title:categoryProducts[1].title,
        imgUrl:categoryProducts[1].imgUrl,
        id:1,
        price:"$20",
        label:"New",
    },
    ProductSection2[1],
    ProductSection2[2],
    {
        title:ProductSection3[0].title,
        imgUrl:ProductSection3[0].imgUrl,
        id:4,
        price:"$20"
    }
];

export const ProductSection5:Products[]=[
    {
        title:categoryProducts[0].title,
        imgUrl:categoryProducts[0].imgUrl,
        id:1,
        price:"$20",
        label:"New",
    },
    ProductSection1[1],
    ProductSection1[2],
    {
        title:categoryProducts[2].title,
        imgUrl:categoryProducts[2].imgUrl,
        id:4,
        price:"$20"
    }
]