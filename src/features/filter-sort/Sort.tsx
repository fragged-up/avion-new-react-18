import { useState } from 'react';
import { SortOptions } from '@/types/optionsTypes';
import DropdownHeader from '@/components/ui/DropDownHeader';
import DropdownList from '@/components/ui/DropDownList';

export interface SortProps {
  sortLabel?: string | null;
  sortingOptions: SortOptions[];
  currSelection?: string | null;
  onChange?: (value: string) => void;
}

const Sort: React.FC<SortProps> = ({ sortingOptions, currSelection, sortLabel = 'Sort By', onChange }) => {
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);

  const handleSortOpen = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleOnChange = (value: string) => {
    onChange?.(value);
    setIsSortOpen(false);
  };

  const dropdownItems = sortingOptions.map((option) => ({
    id: option.value,
    label: option.label,
    value: option.value,
    isSelected: currSelection === option.value,
    onChange: handleOnChange,
  }));

  return (
    <div className="flex w-full flex-col">
      <DropdownHeader label={sortLabel} isOpened={isSortOpen} onToggle={handleSortOpen} />
      {isSortOpen && <DropdownList items={dropdownItems} name="sort" />}
    </div>
  );
};

export default Sort;
