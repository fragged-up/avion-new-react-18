import apImage from '@/assets/deskProduct/Ap-image.svg';
import { useState } from 'react';
import FiSelect from '@/nukes/FiSelect';
import { filterPriceOptions, filterOptions } from '@/constants';
import { RootState } from '@/features/store';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected } from '@/features/filters/filtersSlice';

const Stacy = () => {
  const dispatch = useDispatch();
  const { selectedFilters } = useSelector((state: RootState) => state.filters);
  console.log('selectedFilters : ', selectedFilters);

  const handleRemoved = (filter: string) => {
    // Toggle logic: Remove if exists, or add otherwise
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((item) => item !== filter) // Remove
      : [...selectedFilters, filter]; // Add

    dispatch(setSelected(updatedFilters)); // Update Redux state
  };
  // console.log('selectedValues from stacy :', selectedValues);
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
      {selectedFilters &&
        selectedFilters.map((value: string, index: number) => (
          <div key={index}>
            <p onClick={() => handleRemoved(value)}>value :{value}</p>
          </div>
        ))}

      <div className="bg-white py-12 w-full">
        <FiSelect filterOptions={filterPriceOptions} />
      </div>
      <div className="bg-white  py-12 w-full">
        <FiSelect filterOptions={filterOptions} />
      </div>
      <div className="bg-white  py-12 w-full">
        <FiSelect filterOptions={filterOptions} />
      </div>
    </div>
  );
};

export default Stacy;
