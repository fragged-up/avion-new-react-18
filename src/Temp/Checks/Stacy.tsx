import FiSelect from '@/nukes/FilterSelect';
import { filterPriceOptions, filterOptions } from '@/constants';
import { RootState } from '@/features/store';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected } from '@/features/filters/filtersSlice';
import { toggleSelection } from '@/utils/updateFilter';
import { clearFilters } from '@/features/filters/filtersSlice';
import closeIcon from '@/assets/icons/close-icon.svg';
import { FilterOptions } from '@/types/optionsTypes';

const Stacy = () => {
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

  return (
    <div className="h-screen bg-gray-700 w-full">
      <div className="py-12">
        <p className="text-center  text-white font-clash text-base">
          (stacyComponent)
        </p>
        <p className="font-semibold text-white font-clash text-3xl text-center">
          Modal
        </p>
      </div>
      <div className="present-filter-selections flex overflow-x-auto">
        {selectedFilters &&
          selectedFilters.map((value: string, index: number) => (
            <div
              key={index}
              className="px-4 py-3 bg-gray-200 flex selected-filter-border items-center"
            >
              <p
                className="font-medium text-sm"
                onClick={() => handleRemoved(value)}
              >
                {value}
              </p>
              <img className="w-4 h-4 ml-2" src={closeIcon} alt="close-icon" />
            </div>
          ))}
        {selectedFilters.length > 1 && (
          <div
            onClick={clearSelection}
            className="ml-4 bg-gray-100 px-4 py-3 selected-filter-border !border-none "
          >
            Clear All
          </div>
        )}
      </div>
      <div>
        {apis.map((filtersGroups, index) => (
          <div key={index} className="bg-white py-12 w-full">
            <FiSelect filterOptions={filtersGroups} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stacy;
