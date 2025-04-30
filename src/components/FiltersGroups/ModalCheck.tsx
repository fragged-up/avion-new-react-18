// import { useState } from 'react';
// import chevronLeft from '@/assets/icons/chevronLeft.svg';
// import Color from './Color';
// import fsIcon from '@/assets/icons/fsIcon.svg';
// import { ColorOptions } from './Color';
// import Cc from './Cc';
// const ModalCheck = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [resultNumbers, setResultNumbers] = useState<null | number>(null);
//   const ColorOptions: ColorOptions[] = [
//     { color: 'red', label: 'red', selected: false, amount: 9 },
//     { color: 'green', label: 'green', selected: false, amount: 3 },
//     { color: 'yellow', label: 'yellow', selected: false, amount: 6 },
//   ];
//   const openModal = () => {
//     setIsOpen(true);
//   };
//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="w-full">
//       <div className="flex justify-between items-start max-w-[95%] mx-auto">
//         <div className="inline-flex justify-start items-center">
//           <button
//             onClick={openModal}
//             className="bg-slate-100 px-3 flex justify-start items-center font-satoshi text-lg text-nowrap py-3"
//           >
//             All Filters
//             <img src={fsIcon} alt="all-filters" className="w-6 h-6 mx-4" />
//           </button>
//         </div>

//         <div className="flex justify-end items-end w-full gap-4">
//           <button
//             onClick={openModal}
//             className="p-3 bg-slate-100 font-satoshi text-lg text-nowrap"
//           >
//             <p>Sort By</p>
//           </button>
//           <button
//             onClick={openModal}
//             className="p-3 bg-slate-100 font-satoshi text-lg text-nowrap"
//           >
//             <p>Filter By</p>
//           </button>
//         </div>
//       </div>
//       <div className="bg-blue-600 flex justify-center items-center py-[200px]">
//         <Cc />
//       </div>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-end justify-center bg-gray-800 lg:bg-white bg-opacity-50 lg:right-auto lg:w-[45%]">
//           <div className="h-[90%] w-full overflow-auto rounded-t-2xl bg-white p-8 slide-animation lg:h-full lg:rounded-none ">
//             {/* <SelectDropDown label={'brand'} options={['s', 'm', 'l']} onSelect={closeModal} /> */}

//             <div className="my-12 flex flex-col gap-6">
//               <Color colorOptions={ColorOptions} />
//             </div>

//             <div className="flex flex-col items-center justify-center gap-4">
//               <button
//                 onClick={openModal}
//                 className="w-full rounded-xl bg-black px-2 py-3 font-satoshi text-base text-white"
//               >
//                 Show Results
//                 {/* {`Show Results ${resultNumbers !== null ? resultNumbers : ''}`} */}
//               </button>

//               <button
//                 // @ts-ignore
//                 // this option currently not exist .. onClick={() => handleCleanUp()}
//                 className={`w-full rounded-xl px-2 py-3 font-satoshi text-base text-white ${resultNumbers !== null ? 'bg-gray-400' : 'bg-gray-100'}`}
//               >
//                 Clear All
//               </button>
//             </div>
//           </div>

//           <div className="absolute left-[5%] top-[2%] mb-24 border-2 border-green-500">
//             <img src={chevronLeft} onClick={closeModal} className="w-10 h-10" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ModalCheck;
