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
  {id:1, image:PopularLucy, title:'The Lucy Lamp', price:399,},
  {id:2, image:PopularRastic, title:'Rustic Vase Set', price:155,},
  {id:3, image:PopularLucy, title:'The Lucy Lamp', price:399,},
  {id:4, image:PopularRastic, title:'Rustic Vase Set', price:155,},
]

export const BaseProducts = [
  {id:1, image:dDandy, title:"The Dandy Chair", price:250 },
  {id:2, image:dRustic, title:"Rustic Vase Set", price:155 },
  {id:3, image:dSilky, title:"The Silky Vase", price:125 },
  {id:4, image:dLucy, title:'The Lucy Lamp', price:399 },
  {id:5, image:dFlights, title:"Falled Fl Lights", price:840},
  {id:6, image:dVase, title:"Ceramic Origin", price:435 },
  {id:7, image:dSm, title:"Vintage Chair", price:250 },
  {id:8, image:dOrangeLucy, title:"Classic Orange", price:750 },
  {id:9, image:dDandy, title:"The Dandy Chair", price:250 },
  {id:10, image:dRustic, title:"Rustic Vase Set", price:155 },
  {id:11, image:dSilky, title:"The Silky Vase", price:125 },
  {id:12, image:dLucy, title:'The Lucy Lamp', price:399 },
]
