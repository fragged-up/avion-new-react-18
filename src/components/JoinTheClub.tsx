export default function JoinTheClub() {
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-4 md:gap-6'>
        <h4 className='mt-[3rem] font-clash text-xl font-normal text-[#2A254B] md:text-center md:text-[2.25rem]'>
          Join the club and get the benefits
        </h4>
        <p className='font-satoshi text-sm font-normal text-[#2A254B] md:text-center md:text-base'>
          Sign up for our newsletter and receive exclusive offers on new{' '}
          <br className='hidden md:block' />
          ranges, sales, pop up stores and more
        </p>
      </div>
      <div className='mt-[4rem] flex h-[3.5rem] w-full items-stretch md:mx-auto md:mb-[3.375rem] md:mt-[4.5rem] md:h-[3.625rem] md:max-w-[29.5rem]'>
        <input
          type='email'
          className='w-[65.5%] border-2 border-gray-300 placeholder-gray-500 placeholder:text-center focus:border-4 focus:border-[#2A254B]'
          placeholder='your@email.com'
        />
        <button className='w-[34.5%] bg-[#2A254B] p-3.5 text-center text-base font-normal text-white'>
          Sign Up
        </button>
      </div>
    </div>
  );
}
