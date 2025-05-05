import Sort from './Sort';
import FilterSortContainer from './FilterSortContainer';
import FilterSortContent from './FilterSortContent';
import FilterSortFooter from './FilterSortFooter';
import Button from '@/components/ui/Button';
import Filters from './Filters';
import { FilterOptions, SortOptions } from '@/types/optionsTypes';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  sortOptions: SortOptions[];
  sortSelection: string | null;
  onSortChange: (selectedValue: string) => void;
  filterGroups: any;
  itemCount?: number | null;
  showAction?: () => void;
};

const FilterSortModal = ({isOpen,onClose,sortOptions,filterGroups,onSortChange,sortSelection,itemCount,showAction}: ModalProps) => {

  const clearAllStyle = itemCount !== null ? 'bg-gray-400' : 'bg-gray-100';
  const itemCountResult = `Show Results ${itemCount !== null ? itemCount : ''}`;

  return (
    <>
     {isOpen && (
      <FilterSortContainer onClose={onClose}>
        <FilterSortContent>
          <Sort sortLabel="Sort By :" sortingOptions={sortOptions} currSelection={sortSelection || ''} onChange={onSortChange} />
          <Filters filtersMeta={filterGroups} />
        </FilterSortContent>

        <FilterSortFooter>
          <Button className={`w-full rounded-xl px-2 py-3 font-satoshi text-base text-white ${clearAllStyle}`}>Clear All</Button>
          <Button className="w-full rounded-xl bg-black px-2 py-3 font-satoshi text-base text-white" onClick={showAction}>
            {itemCountResult}
          </Button>
        </FilterSortFooter>
      </FilterSortContainer> )

     }
    </>
  );
};

export default FilterSortModal;
