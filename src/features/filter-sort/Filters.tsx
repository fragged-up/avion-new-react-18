import { useState, useCallback, useEffect } from 'react';
import { Label } from '@/components/ui/Label';
import { Container } from '@/components/ui/Semantic';
import { Checkbox } from '@/components/ui/CheckBox';
import { Accordion } from '@/components/ui/Accordion';
import { cn } from '@/utils';
import { ColorVariant } from '@/features/filter-sort/ColorVariant';
import DropDownIcon from '@/assets/icons/dropdown.svg';

type FilterOption = {
  value: string;
  count: number;
};

type FilterGroupProps = {
  filterItems: FilterOption;
  className?: string;
  onFilterChange: (value: string, isChecked: boolean) => void;
  isSelected: boolean;
  hasColors?: boolean;
};

export type VariantProps = {
  filterItems: FilterOption;
  handleCheckboxChange: (newChecked: boolean) => void;
  isChecked: boolean;
};

type FilterCategoryProps = {
  title: string;
  items: FilterOption[];
  className?: string;
  selectedOptions: string[];
  onFilterChange: (value: string, isChecked: boolean) => void;
};

type FiltersMeta = {
  colors?: FilterOption[];
  brands?: FilterOption[];
  materials?: FilterOption[];
  prices?: FilterOption[];
  [key: string]: FilterOption[] | undefined;
};

const DefaultVariant = ({ filterItems, handleCheckboxChange, isChecked }: VariantProps) => (
  <>
    <Label>{filterItems.value}</Label>
    <Checkbox
      checked={isChecked}
      onCheckedChange={handleCheckboxChange}
      className={cn('border border-gray-300 w-5 h-5 rounded-sm opacity-1', isChecked ? 'bg-black text-white' : 'bg-white')}
      children={<p>{filterItems.count}</p>}
    />
  </>
);

const FilterGroup: React.FC<FilterGroupProps> = ({ filterItems, hasColors, className, onFilterChange, isSelected }) => {
  const [isChecked, setIsChecked] = useState(isSelected);

  const handleCheckboxChange = useCallback(
    (newChecked: boolean) => {
      setIsChecked(newChecked);
      onFilterChange(filterItems.value, newChecked);
    },
    [filterItems.value, onFilterChange],
  );

  return (
    <>
      {hasColors ? (
         <Container className='inline-flex justify-start items-start gap-x-3 gap-y-3' style={{ gap:"20px"}}>
         <ColorVariant filterItems={filterItems} handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} />
         </Container>
      ) : (
        <Container className={cn('flex justify-between', className)}>
        <DefaultVariant filterItems={filterItems} handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} />
        </Container>
      )}
    </>
  );
};

const FilterCategory: React.FC<FilterCategoryProps> = ({ title, items, className, selectedOptions, onFilterChange }) => {
  const hasColors = title.includes("Colors");
  return (
    <Accordion title={title} icon={DropDownIcon} selectedOptions={selectedOptions}>
      {items.map((item) => (
        <FilterGroup
          key={item.value}
          hasColors={hasColors}
          filterItems={item}
          className={className}
          onFilterChange={onFilterChange}
          isSelected={selectedOptions.includes(item.value)
          }
        />
      ))}
    </Accordion>
  );


};

export type OnFilterChange = (filters: { [category: string]: string[] }) => void;

type FilterProps = {
    filtersMeta:FiltersMeta
    onFilterChange: (filters: { [category: string]: string[] }) => void;
}

const Filter: React.FC<FilterProps> = ({ filtersMeta,  onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<{ [category: string]: string[] }>({});
  const handleCheckboxChange = useCallback((category: string, value: string, isChecked: boolean) => {
    setSelectedFilters((prevSelected) => {
      const categoryFilters = prevSelected[category] || [];
      const updatedFilters = isChecked
        ? { ...prevSelected, [category]: [...categoryFilters, value] }
        : { ...prevSelected, [category]: categoryFilters.filter((item) => item !== value) };
      return updatedFilters;
    });
  }, []);

  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  return (
    <Container>
      <h2 className="font-clash font-medium text-lg text-center my-8">Filter By : </h2>
      {Object.entries(filtersMeta).map(([categoryName, filterOptions]) =>
        filterOptions && filterOptions.length > 0 ? (
          <FilterCategory
            key={categoryName}
            title={categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
            items={filterOptions}
            selectedOptions={selectedFilters[categoryName] || []}
            onFilterChange={(value, isChecked) => handleCheckboxChange(categoryName, value, isChecked)}
          />
        ) : null,
      )}
    </Container>
  );
};

export default Filter;

