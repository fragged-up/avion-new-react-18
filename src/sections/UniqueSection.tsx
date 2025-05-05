import styles from '@/styles/css/Content-m.module.css';
import checkMark from '@/assets/icons/checkMark.svg';
import recycleIcon from '@/assets/icons/recycleIcon.svg';
import purchaseIcon from '@/assets/icons/purchaseIcon.svg';
import transitDelivery from '@/assets/icons/transitDelivery.svg';


type UniqueProps = {
  icon:string | React.ReactSVGElement;
  title:string;
  description:string;

}


// @ts-ignore

// function UniqueRefactor({icon,title,description}:UniqueProps){
//   return (
//   <div className='w-[80] flex flex-col justify-center items-start gap-4'>
//   <img src={icon} alt="icon-title" className='w-5 h-5 ' />
//   <h2 className='text-[0.9em] font-clash font-normal'>{title}</h2>
//   <p className='text-[0.7em] font-satoshi font-normal'>{description} </p>
// </div>
// )
// }

const api = [
  {
    icon: "transitDelivery",
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard"
  },
  {
    icon: "checkMark",
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftsmanship"
  },
  {
    icon: "purchaseIcon",
    title: "Unbeatable prices",
    description: "For our materials and quality you won’t find better prices anywhere"
  },
  {
    icon: "recycleIcon",
    title: "Recycled packaging",
    description: "We use 100% recycled packaging to ensure our footprint is manageable"
  }
];





export default function UniqueSection() {
  return (
    <>
      <div className={styles['unique-w']}>
        {/* (unique-w)  className='min-width[767px]:hidden'  */}
        <div className={styles['section-content-1']}>
          {/* (section-content-1) className='py-[1em]'  */}
          <div className={styles['head-block-1-container']}>
            {/* (head-block-container) className='w-[80%] mt-[2em] mb-[1em] flex justify-statt items-start' */}
            <h1 className={styles['head-block-1']}>
              {/* (head-block-1) className='font-clash font-normal text-start text-[1.2em] self-start' */}
              What makes our brand <br /> different
            </h1>
          </div>

          <div className={styles['ct-1']}>
            <img src={transitDelivery} alt="" className={styles['ct-1-ic']} />
            <h2 className={styles['ct-1-sb']}>Next day as standard</h2>
            <p className={styles['ct-1-pr']}>
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div className={styles['ct-1']}>
            <img src={checkMark} alt="" className={styles['ct-1-ic']} />
            <h2 className={styles['ct-1-sb']}>Made by true artisans</h2>
            <p className={styles['ct-1-pr']}>
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>

          <div className={styles['ct-1']}>
            <img src={purchaseIcon} alt="" className={styles['ct-1-ic']} />
            <h2 className={styles['ct-1-sb']}>Unbeatable prices</h2>
            <p className={styles['ct-1-pr']}>
              For our materials and quality you won’t find better prices anywhere
            </p>
          </div>

          <div className={styles['ct-1']}>
            <img src={recycleIcon} alt="" className={styles['ct-1-ic']} />
            <h2 className={styles['ct-1-sb']}>Recycled packaging</h2>
            <p className={styles['ct-1-pr']}>
              We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </div>
        </div>

        <div className={styles['unique-section-2']}>
          {/* (unique-section-2) className='py-[3em] flex flex-col justify-center items-center gap-[2em]' */}
          <div className={styles['join-c']}>
            {/* (join-c)  className='w-[80%] flex flex-col justify-center items-center' */}
            <h4 className={styles['join-sb']}>Join the club and get the benefits</h4>
            {/* (join-sb) className='text-[1em] font-clash font-normal text-start' */}
            <p className={styles['join-pr']}>
              {/* (join-pr) className='text-[0.875em] font-satoshi font-normal text-start' */}
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up
              stores and more
            </p>
          </div>

          <div className={styles['unique-join-in-c']}>
          {/* (unique-join-in-c)  className='w-full flex justify-center items-center' */}
            <span className={styles['unique-span']}>
              {/* (unique-span) className='w-full flex justify-center' */}
              <input
                type="text"
                className={styles['unique-join-in']}
                placeholder="your@email.com"
              />
              {/* (unique-join-in) className='bg-[#f9f9f9] py-[1em] px-[1.5em] placholder:py-[1em] px-[1.5em]' */}
              <button className={styles['unique-join-button']}>Sign Up</button>
              {/* (unique-join-button)  className='bg-[#2a254b] text-white cursor-pointer font-satoshi font-normal text-center py-[1em] px-[2em]' */}
            </span>
          </div>
        </div>
      </div>

      <div className={styles['desk-unique']}>
        {/* (desk-unique) min-width:767px: className='w-full block py-[5rem]' */}
        <div className={styles['desk-blocked-head']}>
             {/* (desk-blocked-head) min-width:767px: className='w-full flex justify-center items-center pb-[5rem]' */}
          <h1 className={styles['desk-head-block-1']}>What makes our brand different</h1>
           {/* (desk-head-block-1) min-width:767px: className='font-clash font-normal text-center text-[1.4em]' */}
        </div>

        <div className={styles['desk-ct-w']}>
          <div className={styles['desk-unique-ct-1']}>
            <img src={transitDelivery} alt="" className={styles['desk-ct-1-ic']} />
            <h2 className={styles['desk-ct-1-sb']}>Next day as standard</h2>
            <p className={styles['desk-ct-1-pr']}>
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div className={styles['desk-unique-ct-1']}>
            <img src={checkMark} alt="" className={styles['desk-ct-1-ic']} />
            <h2 className={styles['desk-ct-1-sb']}>Made by true artisans</h2>
            <p className={styles['desk-ct-1-pr']}>
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>

          <div className={styles['desk-unique-ct-1']}>
            <img src={purchaseIcon} alt="" className={styles['desk-ct-1-ic']} />
            <h2 className={styles['desk-ct-1-sb']}>Unbeatable prices</h2>
            <p className={styles['desk-ct-1-pr']}>
              For our materials and quality you won’t find better prices anywhere
            </p>
          </div>

          <div className={styles['desk-unique-ct-1']}>
            <img src={recycleIcon} alt="" className={styles['desk-ct-1-ic']} />
            <h2 className={styles['desk-ct-1-sb']}>Recycled packaging</h2>
            <p className={styles['desk-ct-1-pr']}>
              We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </div>
        </div>

        <div className={styles['desk-content-4']}>

          <div className={styles['desk-w-4']}>
            <div className={styles['desk-join-c']}>
              <h4 className={styles['desk-join-sb']}>Join the club and get the benefits</h4>
              <p className={styles['desk-join-pr']}>
                Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up
                stores and more
              </p>
            </div>

            <div className={styles['desk-join-in-c']}>
              <input type="text" className={styles['desk-join-in']} placeholder="your@email.com" />
              <button className={styles['desk-join-button']}>Sign Up</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}


