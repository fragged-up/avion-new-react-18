import FilterSelect from '@/features/filters/FilterSelectNew';
import { SortOptions } from '@/types/optionsTypes'; // types import
import { sortOptions } from '@/constants/sortOptions';
import Sort from '@/features/filters/Sort';
import { filterPriceOptions } from '@/constants/filterOptions';
import { filterOptions } from '@/constants/filterOptions';
import { RootState } from '@/stores/core/store';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected } from '@/stores/filters/slice';
import { useEffect, useState } from 'react';
import fsIcon from '@/assets/icons/fsIcon.svg'; // icons imports
// import outIcon from '@/assets/icons/outIcon.svg';
import chevronLeft from '@/assets/icons/chevronLeft.svg';
import { toggleSelection } from '@/utils/updateFilter';
import { clearFilters } from '@/stores/filters/slice';
import closeIcon from '@/assets/icons/close-icon.svg';
import { FilterOptions } from '@/types/optionsTypes';
// import { selectIsModalOpen } from '@/features/modal/selectors';
import { openGlobalModal,openFilterFromModal,openSortFromModal} from '@/stores/modal/slice';





const SortFilterModal = () => {
  const dispatch = useDispatch();

  const apis = [filterPriceOptions, filterOptions, filterOptions];

  const [resultNumbers, setResultNumbers] = useState<
    null | number | string | any
  >(0);
  const defaultSortState =
    sortOptions.find((option) => option.order === 'by-rating') || null;
  const [sortSelection, setSortSelection] = useState<SortOptions | null>(
    defaultSortState,
  );

  //selectors
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const { selectedFilters } = useSelector((state: RootState) => state.filters);

  const handleRemoved = (option: string) => {
    const updatedSelection = toggleSelection(selectedFilters, option);
    dispatch(setSelected(updatedSelection));
  };
  const clearSelection = () => {
    dispatch(clearFilters());
  };
  const handleOpenModal = () => {
    dispatch(openGlobalModal(!isOpen));
  };
  const handleFilterFromModal = () => {
    dispatch(openFilterFromModal());
  };

  const handleSortFromModal = () => {
    dispatch(openSortFromModal());
  };

  const handleSortChange = (value: string) => {
    const selected = sortOptions.find((option) => option.value === value);
    if (selected) {
      setSortSelection?.(selected);
      handleSortAction(selected);
    }
  };

  const handleNumberChange = (value: any) => {
    const derrivedResult = Array.from(value).length.toString();
    return derrivedResult;
  };
  const handleSortAction = async (
    option: SortOptions | null,
  ): Promise<void> => {
    if (!option) return;
    const queryParams = new URLSearchParams({ order: option.order }).toString();
    try {
      const req = await fetch(`http://localhost:5001/sort?${queryParams}`);
      const response = await req.json();
      const data = response.items;
      const dataLength = handleNumberChange(data);
      setResultNumbers(dataLength);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; // Reset on unmount
    };
  }, [isOpen, resultNumbers]);

  return (
    <div className="bg-white w-full">
      <div className="flex justify-between items-start max-w-[95%] mx-auto">
        <div className="inline-flex justify-start items-center">
          <button
            onClick={handleOpenModal}
            className="bg-slate-100 px-3 flex justify-start items-center font-satoshi text-lg text-nowrap py-3">
            All Filters
            <img src={fsIcon} alt="all-filters" className="w-6 h-6 mx-4" />
          </button>
        </div>

        <div className="flex justify-end items-end w-full gap-4">
          <button
            onClick={handleSortFromModal}
            className="p-3 bg-slate-100 font-satoshi text-lg text-nowrap">
            <p>Sort By</p>
          </button>
          <button
            onClick={handleFilterFromModal}
            className="p-3 bg-slate-100 font-satoshi text-lg text-nowrap">
            <p>Filter By</p>
          </button>
        </div>
      </div>
      <div className="present-filter-selections flex overflow-x-auto">
        {selectedFilters &&
          selectedFilters.map((value: string, index: number) => (
            <div
              key={index}
              onClick={() => handleRemoved(value)}
              className="px-4 py-3 bg-gray-200 flex selected-filter-border items-center">

              <p className="font-medium text-sm">{value}</p>
              <img className="w-4 h-4 ml-2" src={closeIcon} alt="close-icon" />
            </div>
          ))}
        {selectedFilters.length > 0 && (
          <div
            onClick={clearSelection}
            className="ml-4 bg-gray-100 px-4 py-3 selected-filter-border !border-none">
            Clear All
          </div>
        )}
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-end justify-center bg-gray-800 lg:bg-white bg-opacity-50 lg:right-auto lg:w-[45%]">
          <div className="h-[90%] w-full overflow-auto rounded-t-2xl bg-white p-8 slide-animation lg:h-full lg:rounded-none ">
            {/* <SelectDropDown label={'brand'} options={['s', 'm', 'l']} onSelect={closeModal} /> */}

            <div className="my-12 flex flex-col gap-6">
              <Sort
                sortingOptions={sortOptions}
                currSelection={sortSelection}
                onChange={handleSortChange} />

              {apis.map((filtersGroups, index) => (
                <div key={index} className="bg-white py-12 w-full">
                  <FilterSelect filterOptions={filtersGroups} />
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <button
                onClick={handleOpenModal}
                className="w-full rounded-xl bg-black px-2 py-3 font-satoshi text-base text-white" >

                {`Show Results ${resultNumbers !== null ? resultNumbers : ''}`}
              </button>

              <button
                // @ts-ignore
                // this option currently not exist .. onClick={() => handleCleanUp()}
                className={`w-full rounded-xl px-2 py-3 font-satoshi text-base text-white ${resultNumbers !== null ? 'bg-gray-400' : 'bg-gray-100'}`}>
                Clear All
              </button>
            </div>
          </div>

          <div className="absolute left-[5%] top-[2%] mb-24 border-2 border-green-500">
            <img
              src={chevronLeft}
              onClick={handleOpenModal}
              className="w-10 h-10"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SortFilterModal;
