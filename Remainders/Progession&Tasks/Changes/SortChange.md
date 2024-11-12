## SortComponent Updated Change 
## Why Changed is Commited in ReasonForChanges/SortReason.md 

<!-- import { useState, useCallback } from 'react';
import React from 'react';
import drsvg from '@/assets/icons/dropdown.svg';

type SortOption = {
  label: string;
  value: string;
};

type SortProps = {
  options: SortOption[];
  selectedOption: string | null;
  sortHeader?: string | null;
  onChange: (value: string) => void;
  sortAction?: () => void;
};

const Sort: React.FC<SortProps> = React.memo(({
  options,
  selectedOption,
  sortHeader,
  onChange,
  sortAction,
}: SortProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleRadioChange = useCallback((value: string) => {
    onChange(value);
  }, [onChange]);

  return (
    <div className='flex w-full flex-col'>
      <div
        className='flex cursor-pointer items-center justify-between px-6 py-3 hover:bg-gray-600'
        onClick={toggleDropdown}
      >
        <p
          className='font-satoshi text-base'
          style={{ textDecoration: isOpen ? 'underline black' : 'none' }}
        >
          {sortHeader}
        </p>
        <img
          src={drsvg}
          alt='drop-down-icon'
          className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {isOpen && (
        <ul className='w-full space-y-2 px-6 py-2'>
          {options.map((option) => (
            <li key={option.value} className='flex w-full items-center justify-between space-x-3'>
              <label htmlFor={`sort-${option.value}`} className='cursor-pointer text-sm'>
                {option.label}
              </label>
              <input
                type='radio'
                id={`sort-${option.value}`}
                name='sort'
                checked={selectedOption === option.value}
                onChange={() => handleRadioChange(option.value)}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  sortAction?.();
                }}
                className='h-4 w-4 accent-black'
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default Sort; -->