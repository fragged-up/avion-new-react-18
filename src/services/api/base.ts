import { DandyChair, LucyLamp, PopularLucy, PopularRastic, RusticVase, SilkyVase } from "@/services/api/catalog"
import { dDandy, dRustic, dSilky, dLucy, dFlights, dVase, dSm, dOrangeLucy } from "@/services/api/catalog"
import { LucyCatalog,DandyCatalog,RusticCatalog,SilkyCatalog } from "@/services/api/catalog"
export const CatalogAPI = [
  { id: 1, image: DandyChair, title: 'The Dandy Chair', price: 250,},
  { id: 2,image: RusticVase,title: 'Rustic Vase Set',price: 155, },
  { id: 3, image: SilkyVase, title: 'The Silky Vase', price: 125 },
  { id: 4, image: LucyLamp, title: 'The Lucy Lamp', price: 399 },
];


export const OurPopAPI = [
  {id:1, image:PopularLucy,title:'The Lucy Lamp',price:399,},
  {id:2, image:PopularRastic,title:'The Lucy Lamp',price:155,},
  {id:3, image:PopularLucy,title:'The Lucy Lamp',price:399,},
  {id:4, image:PopularRastic,title:'The Lucy Lamp',price:155,},
]

// export const BaseProducts = [
//   {image:, title:, price: },
//   {image:, title:, price: },
//   {image:, title:, price: },
//   {image:, title:, price: },
//   {image:, title:, price: },
//   {image:, title:, price: },
//   {image:, title:, price: },
//   {image:, title:, price: },
//   {image:, title:, price: },
//   {image:, title:, price: },
//   {image:, title:, price: },
// ]
