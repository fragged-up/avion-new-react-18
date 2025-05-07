// import QuantitySelector from '@/components/ui/QuantitySelector';
// import  { Container, Img, Heading, Paragraph, Section } from '@/components/ui/Semantic';

// type CartItemProps = {
//   cartItem:any | any[]
//   onIncrease: (id: string ) => void;
//   onDecrease: (id: string ) => void;
// };

// export default function CartItem({cartItem,onIncrease,onDecrease}: CartItemProps) {
//   const { _id, productImage, name,  productPrice } = cartItem;
//   let quantity = cartItem.quantity || 1;


//   return (
//     <Section className="flex justify-start items-start gap-2.5 pr-5">
//       <Container className="flex">
//         <Img src={productImage} alt="cart-item" className="w-full max-w-[100%] h-auto" />
//       </Container>

//       <div className="flex flex-col justify-start items-start gap-4">
//         <Heading level='h6' className="text-[1em] font-clash">{name}</Heading>
//         <Paragraph className="text-[0.8em] font-satoshi font-thin">{cartItem?.productDescription?.descOne}</Paragraph>
//         <Paragraph className="text-[0.8em] font-satoshi font-thin">{`£ ${productPrice}`}</Paragraph>

//         <QuantitySelector
//           item={cartItem}
//           quantity={quantity}
//           onInc={() => onIncrease(_id)}
//           onDec={() => onDecrease(_id)}
//         />
//       </div>
//     </Section>
//   );
// }

import QuantitySelector from '@/components/ui/QuantitySelector';
import { Container, Img, Heading, Paragraph, Section } from '@/components/ui/Semantic';
import smallImage from '@/assets/images/your-product-small.jpg'; // Example imports
import mediumImage from '@/assets/images/your-product-medium.jpg';
import largeImage from '@/assets/images/your-product-large.jpg';

type CartItemProps = {
  cartItem: any | any[];
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
};

export default function CartItem({ cartItem, onIncrease, onDecrease }: CartItemProps) {
  const { _id, productImage, name, productPrice } = cartItem;
  let quantity = cartItem.quantity || 1;



  return (
    <Section className="grid grid-cols-2 grid-rows-1 gap-2.5">
      <Container className="flex">
        <Img
          src={productImage}
          alt="cart-item"
          className="w-full max-w-[100%] h-auto max-h-[180px]"
        />
      </Container>

      <div className="flex flex-col justify-stretch items-start gap-4">
        <Heading level='h6' className="text-[1em] font-clash">{name}</Heading>
        <Paragraph level='p3' className="text-[0.8em] md:text-base lg:text-base font-satoshi font-thin">{cartItem?.productDescription?.descOne}</Paragraph>
        <Paragraph level='p4' className="text-[0.8em] md:text-base lg:text-base  font-satoshi font-thin">{`£ ${productPrice}`}</Paragraph>

        <QuantitySelector
          className="self-center"
          item={cartItem}
          quantity={quantity}
          onInc={() => onIncrease(_id)}
          onDec={() => onDecrease(_id)}
        />
      </div>
    </Section>
  );
}
