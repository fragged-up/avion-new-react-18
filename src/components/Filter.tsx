import { useState, useEffect } from 'react';
import { useCallback } from 'react';
import drsvg from '@/assets/icons/dropdown.svg';

export type FilterOptions = {
  label: string;
  value: string;
  order: string;
};

interface FilterProps {
  filterOptions: FilterOptions[];
  cat?: string;
  actionListener?: (event: any | null) => any | void;
}

const Filter: React.FC<FilterProps> = ({ filterOptions, actionListener }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentChecked, setCurrentChecked] = useState<string[]>([]);

  const handleActionListener = (event: any) => {
    event && actionListener?.(setIsOpen(true));
  };

  const handleCheckChange = (value: string, isChecked: boolean) => {
    setCurrentChecked((prev) => {
      if (isChecked) {
        if (!prev.includes(value)) {
          return [...prev, value];
        }
        return prev;
      } else {
        // Remove value if it's unchecked
        return prev.filter((item) => item !== value);
      }
    });
  };

  console.log(currentChecked);

  useEffect(() => {
    if (currentChecked.length === 5) return;
    handleFilterAction(currentChecked);
  }, [currentChecked]);

  const handleFilterAction = useCallback(
    async (option: any | any[]) => {
      const params = new URLSearchParams();
      if (currentChecked.length === 0) return;

      currentChecked.forEach((item) => {
        params.append('options', item);
      });
      const queryString = params.toString();
      console.log(queryString);
      try {
        const req = await fetch(`http://localhost:5001/filter?${queryString}`);
        const response = req.json();
        console.log(response);
      } catch (err: any) {
        console.log(err.message);
      }
    },
    [currentChecked],
  );

  return (
    <div className="flex w-full flex-col">
      <div className="flex cursor-pointer items-center justify-between px-6 py-3" onClick={() => setIsOpen(!isOpen)}>
        <p className="font-satoshi text-base" style={{ textDecoration: isOpen ? 'underline black' : 'none' }}>
          Filter By
        </p>

        <img
          src={drsvg}
          alt="drop-down-icon"
          className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      <div onClick={handleActionListener} className="h-32 w-32 bg-red-500"></div>

      {isOpen && (
        <ul className="w-full px-6 py-2">
          {filterOptions.map((option: any, index) => (
            <li key={index} className="flex w-full items-center justify-between">
              <label htmlFor={`filter-${index}`} className="cursor-pointer text-sm">
                {option.label}
              </label>

              <input
                type="checkbox"
                id={`filter-${index}`}
                checked={currentChecked.includes(option.value)}
                onChange={(e) => {
                  handleCheckChange(option.value, e.target.checked);
                }}
                onClick={() => handleFilterAction(option.value)}
                className="h-4 w-4"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Filter;
