import { useState } from 'react';
import { useCallback } from 'react';
import drsvg from '@/assets/icons/dropdown.svg';

export type SortOptions = {
  label: string;
  value: string;
  order: string;
};
export interface SortProps {
  sortLabel?: string | null;
  sortingOptions: SortOptions[];
  selectedOption?: SortOptions | null;
  onChange: (value: string) => void;
  onClick?: (action: any) => Promise<void> | Promise<any> | any;
}

const Sort: React.FC<SortProps> = ({ sortingOptions, selectedOption, sortLabel, onChange, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnChange = (value: string) => {
    onChange(value);
  };

  const handleSortAction = async (action: any) => {
    await onClick?.(action);
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex cursor-pointer items-center justify-between px-6 py-3 hover:bg-gray-600" onClick={() => setIsOpen(!isOpen)}>
        <p className="font-satoshi text-base" style={{ textDecoration: isOpen ? 'underline black' : 'none' }}>
          {sortLabel}
        </p>
        <img src={drsvg} alt="drop-down-icon" className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </div>

      {isOpen && (
        <ul className="w-full space-y-2 px-6 py-2">
          {sortingOptions.map((option, index: number) => (
            <li key={index} className="flex w-full items-center justify-between space-x-3">
              <label htmlFor={`sort-${index}`} className="cursor-pointer text-sm">
                {option.label}
              </label>

              <input
                type="radio"
                id={`sort-${index}`}
                name="sort"
                className="h-4 w-4 accent-black"
                checked={selectedOption?.value === option.value}
                onChange={() => handleOnChange(option.value)}
                onClick={() => handleSortAction(option.order)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
