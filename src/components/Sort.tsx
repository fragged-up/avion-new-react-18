import { useState } from "react";

export interface SortProps {
  onApplySort: (filters: any) => void;
  onClose: () => void;
  sortOptions: string[]; // Pass sort options
}

export default function Sort({ onApplySort, onClose, sortOptions }: SortProps) {
  const [selectedSortOption, setSelectedSortOption] = useState<string | null>(
    null,
  );

  const handleApply = () => {
    const filters = {
      sortOption: selectedSortOption,
    };
    onApplySort(filters);
    onClose();
  };

  return (
    <div className="w-full max-w-lg rounded-lg bg-white p-8">
      <h2 className="mb-4 text-xl font-bold">Sort Options</h2>

      <div className="mb-4">
        <h3 className="mb-2 font-semibold">Sort By</h3>
        <div className="space-y-2">
          {sortOptions.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center space-x-3"
            >
              <input
                type="radio"
                name="sortOption"
                value={option}
                checked={selectedSortOption === option}
                onChange={() => setSelectedSortOption(option)}
                className="hidden"
              />
              <span className="custom-radio-desktop"></span>
              <span className="text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-right">
        <button
          onClick={handleApply}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Apply Sort
        </button>
      </div>
    </div>
  );
}
