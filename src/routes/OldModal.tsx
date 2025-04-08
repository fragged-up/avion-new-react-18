// import SelectDropDown from '@/components/SelectDropDown';
import { useEffect, useState } from 'react';
import { SortOptions } from '@/types/optionsTypes'; // types import
import { sortOptions } from '@/constants/sortOptions'; // constants import
import { filterOptions, filterPriceOptions } from '@/constants/filterOptions'; //constants import
import Sort from '@/components/Sort'; //components import
import { RootState } from '@/stores/core/store';
import Filter from '@/components/Filter'; //components import
import fsIcon from '@/assets/icons/fsIcon.svg'; // icons imports
import outIcon from '@/assets/icons/outIcon.svg'; //icons imports
import { setSelected } from '@/stores/filters/slice';
import { toggleSelection } from '@/utils/updateFilter';
import { clearFilters } from '@/stores/filters/slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  openGlobalModal,
  openFilterFromModal,
  openSortFromModal,
} from '@/stores/modal/slice';

export type OldModalProps = {
  isModalVisible?: null | any;
  eventDrill?: null | any;
};

export default function OldModal({ isModalVisible }: OldModalProps) {
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const defaultSortState =
    sortOptions.find((option) => option.order === 'by-rating') || null;
  const [sortSelection, setSortSelection] = useState<SortOptions | null>(
    defaultSortState,
  );

  const [resultNumbers, setResultNumbers] = useState<
    null | number | string | any
  >(null);
  // the redux function that accessing the state of triggerEvent from the store
  //state Initalizations

  const dispatch = useDispatch();

  const apis = [filterPriceOptions, filterOptions, filterOptions];

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

  //handleStateFunctionsx

  const handleCleanUp = () => {
    resultNumbers && setResultNumbers(null);
  };

  //handleChanges

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

  //handleRequests

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
    <div className="w-full">
      <div className="flex justify-between items-start">
        <div className="inline-flex justify-start items-center">
          <button
            onClick={handleOpenModal}
            className="bg-slate-100 px-3 flex justify-start items-center font-satoshi text-lg text-nowrap py-3"
          >
            All Filters
            <img src={fsIcon} alt="all-filters" className="w-6 h-6 mx-4" />
          </button>
        </div>

        <div className="flex justify-end items-end w-full gap-4">
          <button
            onClick={handleSortFromModal}
            className="p-3 bg-slate-100 font-satoshi text-lg text-nowrap"
          >
            <p>Sort By</p>
          </button>
          <button
            onClick={handleFilterFromModal}
            className="p-3 bg-slate-100 font-satoshi text-lg text-nowrap"
          >
            <p>Filter By</p>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-end justify-center bg-gray-800 lg:bg-white bg-opacity-50 lg:right-auto lg:w-[45%]">
          <div className="h-[90%] w-full overflow-auto rounded-t-2xl bg-white p-8 slide-animation lg:h-full lg:rounded-none ">
            {/* <SelectDropDown label={'brand'} options={['s', 'm', 'l']} onSelect={closeModal} /> */}

            <div className="my-12 flex flex-col gap-12">
              <Sort
                sortingOptions={sortOptions}
                currSelection={sortSelection}
                onChange={handleSortChange}
              />
              <Filter filterOptions={filterOptions} />
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <button className="w-full rounded-xl bg-black px-2 py-3 font-satoshi text-base text-white">
                {`Show Results ${resultNumbers !== null ? resultNumbers : ''}`}
              </button>

              <button
                // @ts-ignore
                onClick={() => handleCleanUp()}
                className={`w-full rounded-xl px-2 py-3 font-satoshi text-base text-white ${resultNumbers !== null ? 'bg-gray-400' : 'bg-gray-100'}`}
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="absolute left-[86%] mb-24 border-2 border-green-500">
            <img
              src={outIcon}
              onClick={handleOpenModal}
              className="w-12 h-12"
            />
          </div>
        </div>
      )}
    </div>
  );
}


// const OldModal = () => {
//   const dispatch = useDispatch();

//   const apis = [filterPriceOptions, filterOptions, filterOptions];

//   const { selectedFilters } = useSelector((state: RootState) => state.filters);
//   const handleRemoved = (option: string) => {
//     const updatedSelection = toggleSelection(selectedFilters, option);
//     dispatch(setSelected(updatedSelection));
//   };
//   const clearSelection = () => {
//     dispatch(clearFilters());
//   };

//   return (
//     <div className="h-screen bg-gray-700 w-full">
//       <div className="py-12">
//         <p className="text-center  text-white font-clash text-base">
//           (stacyComponent)
//         </p>
//         <p className="font-semibold text-white font-clash text-3xl text-center">
//           Modal
//         </p>
//       </div>
//       <div className="present-filter-selections flex overflow-x-auto">
//         {selectedFilters &&
//           selectedFilters.map((value: string, index: number) => (
//             <div
//               key={index}
//               className="px-4 py-3 bg-gray-200 flex selected-filter-border items-center"
//             >
//               <p
//                 className="font-medium text-sm"
//                 onClick={() => handleRemoved(value)}
//               >
//                 {value}
//               </p>
//               <img className="w-4 h-4 ml-2" src={closeIcon} alt="close-icon" />
//             </div>
//           ))}
//         {selectedFilters.length > 1 && (
//           <div
//             onClick={clearSelection}
//             className="ml-4 bg-gray-100 px-4 py-3 selected-filter-border !border-none "
//           >
//             Clear All
//           </div>
//         )}
//       </div>
//       <div>
//         {apis.map((filtersGroups, index) => (
//           <div key={index} className="bg-white py-12 w-full">
//             <FiSelect filterOptions={filtersGroups} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OldModal;
