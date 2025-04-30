// import { useState, useEffect } from 'react';
// import { toggleSelection } from '@/utils/updateFilter';

// export type ColorOptions = {
//   color: string | any;
//   selected: any;
//   label?: any;
//   amount?: any;
// };
// export type ColorFilters = {
//   colorOptions: ColorOptions[];
// };

// const Color = ({ colorOptions }: ColorFilters) => {
//   const [toggleSelect, setToggleSelect] = useState<any[]>([]);

//   const handleSelected = (color: any) => {
//     return setToggleSelect((prevOption) =>
//       prevOption.includes(color)
//         ? prevOption.filter((op: any) => op !== color)
//         : [...prevOption, color],
//     );
//   };
//   console.log(toggleSelect);

//   // console.log();
//   return (
//     <div className="w-full">
//       <div className="color-container flex items-center gap-x-6">
//         {colorOptions.map((option: ColorOptions, index: any) => (
//           <div
//             className="flex justify-center flex-col items-center gap-y-6"
//             key={`${option.color}-${index}`}
//           >
//             <div
//               className="filter-color"
//               style={{
//                 backgroundColor: option.color,
//                 border: toggleSelect.includes(option.color)
//                   ? '2px solid black'
//                   : 'none',
//               }}
//               onClick={() => handleSelected(option.color)}
//             ></div>
//             <p className="text-center">{option.label}</p>
//             <p className="text-center">{option.amount}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Color;
