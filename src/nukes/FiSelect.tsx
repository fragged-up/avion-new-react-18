import { useState, useEffect } from 'react';
import drsvg from '@/assets/icons/dropdown.svg';
import { FilterOptions } from '@/types/optionsTypes';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected } from '@/features/filters/filtersSlice';
import { RootState } from '@/features/store';

interface FilterProps {
  filterOptions: FilterOptions[];
  cat?: string;
}

const FiSelect: React.FC<FilterProps> = ({ filterOptions }) => {
  const dispatch = useDispatch();
  const { selectedFilters } = useSelector((state: RootState) => state.filters);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [selected, setSelect] = useState<string[]>([]);

  const setOps = (op: any) => {
    dispatch(setSelected(op));
    handleSelected(op);
  };

  const result = selectedFilters.filter((item) => item === selected);
  const handleSelected = (option: any) => {
    setSelect((prev) => {
      const updatedSelection = prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option];

      return updatedSelection;
    });
  };
  const groupedSelections = filterOptions.reduce(
    (acc, option) => {
      if (selectedFilters.includes(option.label)) {
        // Explicit initialization for groupId
        if (!acc[option.groupId]) {
          acc[option.groupId] = [];
        }
        acc[option.groupId]?.push(option.label);
      }
      return acc;
    },
    {} as Record<number, string[]>,
  );

  const toggleOption = (option: string) => {
    const updatedSelection = selectedFilters.includes(option)
      ? selectedFilters.filter((item) => item !== option)
      : [...selectedFilters, option];

    dispatch(setSelected(updatedSelection));
  };
  return (
    <div className="flex w-full flex-col">
      <div
        className="flex cursor-pointer items-center justify-between px-6 py-3 transition-all duration-200 ease-in-out"
        onClick={() => setIsOpened(!isOpened)}
      >
        <div>
          <p
            className="font-satoshi text-base"
            style={{ textDecoration: isOpened ? 'underline black' : 'none' }}
          >
            Filter By
          </p>

          {Object.entries(groupedSelections).map(([groupId, labels]) => (
            <p key={groupId}>
              <strong>Group {groupId}:</strong> {labels.join(', ')}
            </p>
          ))}
        </div>
        <img
          src={drsvg}
          alt="drop-down-icon"
          className={`h-6 w-6 transition-transform ${isOpened ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      {isOpened && (
        <ul className="w-full px-6 py-2">
          {filterOptions.map((option: any, index) => (
            <li
              key={index}
              className="flex w-full items-center justify-between"
            >
              <label
                htmlFor={`filter-${index}`}
                className="cursor-pointer text-sm"
              >
                {option.label}
              </label>

              <div className="flex">
                <p className="mr-4">{option?.inStock}</p>
                <input
                  type="checkbox"
                  id={`filter-${index}`}
                  checked={selectedFilters.includes(option.label)}
                  onChange={() => toggleOption(option.label)}
                  className="h-4 w-4 hover:border-4 accent-black "
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default FiSelect;
