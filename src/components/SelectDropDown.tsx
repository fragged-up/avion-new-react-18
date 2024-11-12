import { useState } from 'react';

import dropdownIcon from '@/assets/images/cart-down.svg';

interface SelectDropDownProps {
  options: string[];

  label: string;

  onSelect: (selected: string) => void | Promise<void>;
}

export default function SelectDropDown({ options, label, onSelect }: SelectDropDownProps) {
  const [showOptions, setShowOptions] = useState(false);

  const [selectedOption, setSelectedOption] = useState(label);

  const toggleOptions = () => setShowOptions(!showOptions);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);

    setShowOptions(false);

    onSelect(option); // Trigger the onSelect callback with the selected option
  };

  return (
    <div className='relative w-full md:w-auto'>
      <ul className='w-full rounded-md bg-[#f9f9f9] shadow-sm transition-all duration-200'>
        {/* Dropdown Trigger */}

        <li
          className='flex cursor-pointer items-center justify-center px-4 py-4 font-satoshi text-base font-normal text-main-clr hover:shadow-md focus:ring-1 focus:ring-gray-300'
          onClick={toggleOptions}
        >
          <span>{selectedOption}</span>

          <img src={dropdownIcon} alt='Dropdown Icon' className='ml-2 h-4 w-4' />
        </li>

        {/* Dropdown Options */}

        {showOptions && (
          <ul className='z-10 mt-2 w-full rounded-md bg-gray-100 py-2 shadow-lg'>
            {options.map(option => (
              <li
                key={option}
                className='mx-2 my-1 w-full cursor-pointer rounded-md px-4 py-3 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900'
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </ul>
    </div>
  );
}
