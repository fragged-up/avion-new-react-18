import { useState } from 'react';

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
  onClick?: (action: any) => Promise<void> | Promise<any> | any;
};

const Sort: React.FC<SortProps> = ({ options, selectedOption, sortHeader, onChange, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [reqAction,setReqAction] = useState<any>();

  const handleRadioChange = (value: string) => {
    onChange(value);
  };

  const handleSortAction = async (action: any) => {
    await onClick?.(action);
  };

  return (
    <div className="flex w-full flex-col">
      <div
        className="flex cursor-pointer items-center justify-between px-6 py-3 hover:bg-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-satoshi text-base" style={{ textDecoration: isOpen ? 'underline black' : 'none' }}>
          {sortHeader}
        </p>

        <img
          src={drsvg}
          alt="drop-down-icon"
          className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {isOpen && (
        <ul className="w-full space-y-2 px-6 py-2">
          {options.map((option, index) => (
            <li key={index} className="flex w-full items-center justify-between space-x-3">
              <label htmlFor={`sort-${index}`} className="cursor-pointer text-sm">
                {option.label}
              </label>

              <input
                type="radio"
                id={`sort-${index}`}
                name="sort"
                className="h-4 w-4 accent-black"
                checked={selectedOption === option.value}
                onChange={() => handleRadioChange(option.value)}
                onClick={() => handleSortAction}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
