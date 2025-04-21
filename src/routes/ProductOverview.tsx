import styles from '@/styles/css/Inspect.module.css';
import inspectImage from '@/assets/images/Inspect-image.svg';
import CatalogDataContainer from '@/features/products/CatalogData';
import Unique from '@/sections/Unique';

type ProductInformationProps = {
  dcTitle: string;
  dcPrice: string;
  dcT: string;
  dcG1: string;
  dcG2: string;
  dcG3: string;
  dcHeight: string;
  dcWidth: string;
  dcDepth: string;
};

//change to productid-section-right name instead of dctext
function ProductDetails({
  dcTitle,
  dcPrice,
  dcT,
  dcG1,
  dcG2,
  dcG3,
  dcHeight,
  dcWidth,
  dcDepth,
}: ProductInformationProps) {
  return (
    <div className=''>
      <div className='flex flex-col justify-start items-start px-[1.5em] py-[2em] gap-[0.6em]'>
        <div className='flex flex-col justify-start items-start gap-[1em]'>
          <h1 className='text-[1em] font-clash font-normal'>{dcTitle}</h1>
          <h1 className='text-[1.2em] font-clash font-normal'>{`£ ${dcPrice}`}</h1>
        </div>

        <div className='flex flex-col justify-start items-start gap-4 py-[1.5em]'>
          <h2 className='text-[1em] font-clash font-normal'>Product description</h2>
          <p className='text-[1em] font-regular font-clash'>{dcT}</p>
          <ul className='pl-[2em]'>
            <li className='list-disc font-clash text-[0.9em]'>{dcG1}</li>
            <li className='list-disc font-clash text-[0.9em]'>{dcG2}</li>
            <li className='list-disc font-clash text-[0.9em]'>{dcG3}</li>
          </ul>
        </div>

        <div className='w-full flex flex-col justify-start items-start gap-4'>
          <h1 className='text-[1em] font-clash font-normal'>Dimensions</h1>

          <div className='w-full flex justify-start items-start'>
            <div className='w-full flex flex-col justify-start items-start border-none py-[5px] gap-[0.5em]'>
              <p className='text-center text-[1em] font-clash font-normal'>Height</p>
              <p className='font-satoshi text-[0.8em] text-center font-normal'>{dcHeight}cm</p>
            </div>

            <div className='w-full flex flex-col justify-start items-start border-none py-[5px] gap-[0.5em] border-l border-[#ebe8f4] pl-[0.5em]'>
              <p className='text-center text-[1em] font-clash font-normal'>Width</p>
              <p className='font-satoshi text-[0.8em] text-center font-normal'>{dcWidth}cm</p>
            </div>

            <div className='w-full flex flex-col justify-start items-start border-none py-[5px] gap-[0.5em] border-l border-[#ebe8f4] pl-[0.5em]'>
              <p className='text-center text-[1em] font-clash font-normal'>Depth</p>
              <p className='font-satoshi text-[0.8em] text-center font-normal'>{dcDepth}cm</p>
            </div>
          </div>
        </div>

        <div className={styles['quantity-c']}>
          <div className={styles['quantity-head-c']}>
            <h2 className={styles['quantity-sb']}>Quantity</h2>
          </div>

          <div className={styles['quantity-m-c']}>
            <button className={styles['quantity-subtract']}>-</button>
            <h2 className={styles['quantity-number']}>1</h2>
            <button className={styles['quantity-add']}>+</button>
          </div>

          <div className=''>
            <button className='bg-[#2a254b] border-none cursor-pointer py-[1em] text-[0.8em] font-satoshi font-normal text-center text-[#f9f9f9]'>Add to cart</button>
          </div>
        </div>

        {/* <CatalogDataContainer /> */}

        {/* <Unique /> */}
      </div>
    </div>
  );
}

function ProductOverview() {
  const titleValue = 'The Dandy Chair';
  const dctValue = 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.';

  return (
    <>
    {/* Mobile */}
      <div className='md:none'>
        <div className='flex'>
          <img src={inspectImage} alt="product-image" className='w-full h-full' />
        </div>

        <ProductDetails
          dcTitle={titleValue}
          dcPrice={'250'}
          dcT={dctValue}
          dcG1={'Premium Material'}
          dcG2={'Handsome upholstery'}
          dcG3={'Quality timeless classic'}
          dcHeight={'110'}
          dcWidth={'75'}
          dcDepth={'50'}
        />

        <CatalogDataContainer />

        <Unique />
      </div>

      <div className='hidden md:block'>
        <div className='md:w-full md:flex'>
          <div className='w-2/4'>
          <div className="h-full bg-[url('/src/assets/images/Inspect-image.svg')] bg-cover bg-no-repeat bg-center" />
          </div>

          <div className='h-[100%] w-2/4'>
            <ProductDetails
              dcTitle={titleValue}
              dcPrice={'250'}
              dcT={dctValue}
              dcG1={'Premium Material'}
              dcG2={'Handsome upholstery'}
              dcG3={'Quality timeless classic'}
              dcHeight={'110'}
              dcWidth={'75'}
              dcDepth={'50'}
            />
          </div>
        </div>

        <CatalogDataContainer />

        <Unique />

        <div className='bg-[#f9f9f9] flex justify-center items-center gap-[2em] p-[3em]'>
          <div className='bg-white py-[3em] px-[8em] flex flex-col justify-center items-center'>
            <div className='flex w-[80%] flex-col justify-center items-start gap-[1em]'>
              <h4 className='text-[1.6em] font-clash font-normal text-nowrap text-center self-center'>Join the club and get the benefits</h4>

              <p className='text-[0.7em] font-satoshi font-normal text-center pb-[2em]'>
                Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up
                stores and more
              </p>
            </div>

            <div className='w-full pt-[3em] pb-[1em] flex justify-center items-center'>
              <input type="text" className='bg-[#f9f9f9] py-[1em] px-[1.5em] placeholder:py-[1em] placeholder:px-[1.5em]' placeholder="your@email.com" />
              <div><button className='w-full bg-[#2a254b] text-white font-satoshi font-normal py-[1em] px-[2em] cursor-pointer'>Sign Up</button></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ProductOverview, ProductDetails };
