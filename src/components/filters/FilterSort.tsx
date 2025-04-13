import { useState } from 'react';
import SelectDropDown from '@/components/ui/SelectDropDown';

export interface FilterSortProps {
  onApplyFiltersAndSort: (filters: any) => void;
  categories: string[];
  brands: string[];
  sortOptions: string[];
}

export default function FilterSort({
  onApplyFiltersAndSort,
  categories,
  brands,
  sortOptions,
}: FilterSortProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedSortOption, setSelectedSortOption] = useState<string>('');
  const [isMobileModalOpen, setIsMobileModalOpen] = useState<boolean>(false);

  const handleApply = () => {
    const filters = {
      category: selectedCategory,
      brand: selectedBrand,
      sortOption: selectedSortOption,
    };

    onApplyFiltersAndSort(filters);
    setIsMobileModalOpen(false);
  };

  return (
    <>
      {/* Mobile Button */}

      <button
        onClick={() => setIsMobileModalOpen(true)}
        className="fixed bottom-4 right-4 rounded bg-blue-500 px-4 py-2 text-white lg:hidden"
      >
        Open Filters & Sorting
      </button>

      {/* Mobile Modal */}

      <div
        className={`fixed inset-0 z-50 flex items-end transition-opacity duration-300 ${
          isMobileModalOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        } bg-gray-800 bg-opacity-50 lg:hidden`}
        onClick={() => setIsMobileModalOpen(false)}
      >
        <div
          className={`w-full max-w-lg transform rounded-t-2xl bg-white p-6 transition-transform duration-300 ${
            isMobileModalOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="mb-4 text-xl font-bold">Filter & Sort Options</h2>

          {/* Filter Section */}

          <div className="mb-4">
            <h3 className="mb-2 font-semibold">Category</h3>

            <SelectDropDown
              options={categories}
              label="Select Category"
              onSelect={setSelectedCategory}
            />
          </div>

          <div className="mb-4">
            <h3 className="mb-2 font-semibold">Brand</h3>

            <SelectDropDown options={brands} label="Select Brand" onSelect={setSelectedBrand} />
          </div>

          {/* Sort Section */}

          <div className="mb-4">
            <h3 className="mb-2 font-semibold">Sort By</h3>

            <SelectDropDown
              options={sortOptions}
              label="Select Sorting Option"
              onSelect={setSelectedSortOption}
            />
          </div>

          {/* Apply Button */}

          <div className="text-right">
            <button onClick={handleApply} className="rounded bg-blue-500 px-4 py-2 text-white">
              Apply Filters & Sort
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}

      <div className="hidden lg:fixed lg:left-0 lg:top-0 lg:z-50 lg:flex lg:h-full lg:w-1/4 lg:flex-col lg:bg-white lg:p-8 lg:shadow-md">
        <h2 className="mb-4 text-xl font-bold">Filter & Sort Options</h2>

        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Category</h3>

          <SelectDropDown
            options={categories}
            label="Select Category"
            onSelect={setSelectedCategory}
          />
        </div>

        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Brand</h3>

          <SelectDropDown options={brands} label="Select Brand" onSelect={setSelectedBrand} />
        </div>

        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Sort By</h3>

          <SelectDropDown
            options={sortOptions}
            label="Select Sorting Option"
            onSelect={setSelectedSortOption}
          />
        </div>

        <div className="text-right">
          <button onClick={handleApply} className="rounded bg-blue-500 px-4 py-2 text-white">
            Apply Filters & Sort
          </button>
        </div>
      </div>
    </>
  );
}
