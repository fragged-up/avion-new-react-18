interface CatalogProps {
  _id?: string;
  image: string | any;
  title: string;
  price: number;
  sizes?: string[];
  onClick?: () => void;
}

export function CatalogCard({ image, title, price, sizes }: CatalogProps) {
  return (
    <div className='flex flex-col justify-start items-start gap-[16px] max-w-[375px]'>
      <div className='flex'>
        <img src={image} alt={`${image}-photo`}     loading="lazy" className='w-full h-full cursor-pointer' />
      </div>
      <h2 className='font-satoshi text-[1.3em] font-light'>{title}</h2>
      <h2 className='font-satoshi text-[1.3em] font-extralight'>{`£ ${price}`}</h2>
      {sizes?.map((size) => (
        <span key={size} className="text-sm border p-1">{size}</span>
      ))}
    </div>
  );
}
