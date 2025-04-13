import checkMark from '@/assets/icons/checkMark.svg';
import recycleIcon from '@/assets/icons/recycleIcon.svg';
import purchaseIcon from '@/assets/icons/purchaseIcon.svg';
import transitDelivery from '@/assets/icons/transitDelivery.svg';
import JoinTheClub from '@/sections/JoinTheClub';

const items = [
  {
    icon: transitDelivery,
    alt: 'transit-icon',
    title: 'Next day as standard',
    description: 'Handmade crafted goods made with real passion and craftmanship',
  },

  {
    icon: checkMark,
    alt: 'checkmark-icon',
    title: 'Made by true artisans',
    description: 'Handmade crafted goods made with real passion and craftmanship',
  },

  {
    icon: purchaseIcon,
    alt: 'purchase-icon',
    title: 'Unbeatable prices',
    description: "For our materials and quality you won't find better prices anywhere",
  },

  {
    icon: recycleIcon,
    alt: 'recycle-icon',
    title: 'Recycled packaging',
    description: 'We use 100% recycled packaging to ensure our footprint is manageable',
  },
];

export default function WhatsMake() {
  return (
    <div className='w-full bg-white pt-6 text-[#2A254B]'>
      {/* Updated width for md (84.72%) */}

      <div className='mx-auto w-[calc(100%-3rem)] md:w-[84.72%]'>
        <div className='pb-[1rem] pt-[1.5rem]'>
          <h2 className='min-w-[17.125rem] font-clash text-xl font-normal tracking-wider md:text-center md:text-2xl'>
            What makes our brand <br className='md:hidden' /> different
          </h2>
        </div>

        {/* Adjust the gap between containers and the layout for mobile and desktop */}

        <div className='mx-auto flex flex-col gap-[2.25rem] py-4 md:mb-[5.375rem] md:mt-[3.125rem] md:flex-row md:gap-[6.32%]'>
          {items.map(item => (
            <div className='flex flex-col' key={item.title}>
              <img
                src={item.icon}
                alt={item.alt}
                className='mb-4 h-6 w-6 md:mb-3' // 16px on mobile, 12px on desktop
              />

              <h3 className='font-clash text-base font-normal md:text-xl lg:text-nowrap'>
                {item.title}
              </h3>

              <p className='mt-3 font-satoshi text-sm font-normal md:mt-2 md:text-base'>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className='pb-9 pt-8'>
          <JoinTheClub />
        </div>
      </div>
    </div>
  );
}
