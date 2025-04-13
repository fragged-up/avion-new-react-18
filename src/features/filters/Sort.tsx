import { useState } from 'react';
import { useCallback } from 'react';
import drsvg from '@/assets/icons/dropdown.svg';
import { SortOptions } from '@/types/optionsTypes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/stores/core/store';

import { toggleSort } from '@/stores/modal/slice';

export interface SortProps {
  sortLabel?: string | null;
  sortingOptions: SortOptions[];
  currSelection?: SortOptions | null;
  onChange?: (value: string) => void;
  onClick?: (action: any) => Promise<void> | Promise<any> | any;
}

const Sort: React.FC<SortProps> = ({
  sortingOptions,
  currSelection,
  sortLabel = 'Sort By',
  onChange,
  onClick,
}) => {
  const dispatch = useDispatch();
  const { isSortOpen } = useSelector((state: RootState) => state.modal);
  const handleSortOpen = () => {
    dispatch(toggleSort(!isSortOpen));
  };

  const handleOnChange = (value: string) => {
    onChange?.(value);
  };

  const handleSortAction = async (action: any) => {
    await onClick?.(action);
  };

  return (
    <div className="flex w-full flex-col">
      <div
        className="flex cursor-pointer items-center justify-between px-6 py-3 "
        onClick={handleSortOpen}
      >
        <p
          className="font-satoshi text-base"
          style={{ textDecoration: isSortOpen ? 'underline black' : 'none' }}
        >
          {sortLabel}
        </p>
        <img
          src={drsvg}
          alt="drop-down-icon"
          className={`h-6 w-6 transition-transform ${isSortOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {isSortOpen && (
        <ul className="w-full space-y-2 px-6 py-2">
          {sortingOptions.map((option, index: number) => (
            <li
              key={index}
              className="flex w-full items-center justify-between space-x-3"
            >
              <label
                htmlFor={`sort-${index}`}
                className="cursor-pointer text-sm"
              >
                {option.label}
              </label>

              <input
                type="radio"
                id={`sort-${index}`}
                name="sort"
                className="h-4 w-4 accent-black"
                checked={currSelection?.value === option.value}
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
