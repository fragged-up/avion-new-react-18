import type { OnFilterChange } from './Filters';
import type { SortOptions } from '@/types/optionsTypes';
import FilterSortContainer from './FilterSortContainer';
import FilterSortContent from './FilterSortContent';
import FilterSortFooter from './FilterSortFooter';
import Button from '@/components/ui/Button';
import Sort from './Sort';
import Filters from './Filters';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  filterGroups: any;
  sortOptions: SortOptions[];
  sortSelection: string | null;
  onSortChange: (selectedValue: string) => void;
  onFilterChange: OnFilterChange;
  itemCount?: number | null;
  showAction?: () => void;
};

const FilterSortModal = ({
  isOpen,
  onClose,
  sortOptions,
  filterGroups,
  onSortChange,
  onFilterChange,
  sortSelection,
  itemCount,
  showAction,
}: ModalProps) => {
  const clearAllStyle = itemCount !== null ? 'bg-gray-400' : 'bg-gray-100';
  const itemCountResult = `Show Results ${itemCount !== null ? itemCount : ''}`;

  return (
    <>
      {isOpen && (
        <FilterSortContainer onClose={onClose}>
          <FilterSortContent>
            <Sort sortLabel="Sort By :" sortingOptions={sortOptions} currSelection={sortSelection || ''} onChange={onSortChange} />
            <Filters filtersMeta={filterGroups} onFilterChange={onFilterChange} />
          </FilterSortContent>

          <FilterSortFooter>
            <Button className={`w-full rounded-xl px-2 py-3 font-satoshi text-base text-white ${clearAllStyle}`}>Clear All</Button>
            <Button className="w-full rounded-xl bg-black px-2 py-3 font-satoshi text-base text-white" onClick={showAction}>
              {itemCountResult}
            </Button>
          </FilterSortFooter>
        </FilterSortContainer>
      )}
    </>
  );
};

export default FilterSortModal;
