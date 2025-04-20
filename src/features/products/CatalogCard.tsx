interface CatalogProps {
  image:string | any;
  title:string;
  price:number;
}

export function CatalogCard({ image, title, price }: CatalogProps) {
  return (
      <div className='flex flex-col justify-start items-start gap-[16px] max-w-[375px]'>
        <div className='flex'>
          <img src={image} alt='catalog-image' className='w-full h-full' />
        </div>
        <h2 className='font-satoshi text-[1.3em] font-light'>{title}</h2>
        <h2 className='font-satoshi text-[1.3em] font-extralight'>{`£ ${price}`}</h2>
      </div>
  );
}
