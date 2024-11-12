import { useState } from 'react';

import drsvg from '@/assets/icons/dropdown.svg';

type FilterOption = {
  label: string;

  value: string;
};

type FilterProps = {
  options: FilterOption[];

  selectedOptions: string[];

  filterHeader?: string;

  onChange: (updatedOptions: string[]) => void;
};

export default function Filter({ options, selectedOptions, filterHeader, onChange }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (value: string) => {
    const updatedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter(item => item !== value)
      : [...selectedOptions, value];

    onChange(updatedOptions);
  };

  return (
    <div className='flex w-full flex-col'>
      <div
        className='flex cursor-pointer items-center justify-between px-6 py-3'
        onClick={() => setIsOpen(!isOpen)}
      >
        <p
          className='font-satoshi text-base'
          style={{ textDecoration: isOpen ? 'underline black' : 'none' }}
        >
          {filterHeader}
        </p>

        <img
          src={drsvg}
          alt='drop-down-icon'
          className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {isOpen && (
        <ul className='w-full px-6 py-2'>
          {options.map((option, index) => (
            <li key={index} className='flex w-full items-center justify-between'>
              <label htmlFor={`filter-${index}`} className='cursor-pointer text-sm'>
                {option.label}
              </label>

              <input
                type='checkbox'
                id={`filter-${index}`}
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
                className='h-4 w-4'
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
