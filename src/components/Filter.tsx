import { useState } from "react";

export interface FilterProps {
  onApplyFilters: (filters: any) => void;
  onClose: () => void;
  categories: string[]; // Pass categories
  brands: string[]; // Pass brands
}

export default function Filter({
  onApplyFilters,
  onClose,
  categories,
  brands,
}: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleApply = () => {
    const filters = {
      category: selectedCategory,
      brand: selectedBrand,
    };
    onApplyFilters(filters);
    onClose();
  };

  return (
    <div className="w-full max-w-lg rounded-lg bg-white p-8">
      <h2 className="mb-4 text-xl font-bold">Filter Options</h2>

      <div className="mb-4">
        <h3 className="mb-2 font-semibold">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center space-x-3"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="hidden"
              />
              <span className="custom-radio-desktop"></span>
              <span className="text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="mb-2 font-semibold">Brand</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center space-x-3"
            >
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
                className="hidden"
              />
              <span className="custom-radio-desktop"></span>
              <span className="text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-right">
        <button
          onClick={handleApply}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
