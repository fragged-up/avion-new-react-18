import { useEffect, useState } from 'react';
import Sort, { SortOptions } from '@/components/Sort';
import SelectDropDown from '@/components/SelectDropDown';
import Filter, { FilterOptions } from '@/components/Filter';
import allFS from '@/assets/icons/allFS.svg';
import outIcon from '@/assets/icons/outIcon.svg';

// import TryKafkaRequest from '@/features/KafkaCheck';
export type SFModalProps = {
  // openAction: boolean | any | null | ((openAction: any) => void | any) | (() => void);
  isModalVisible?: null | any;
  toggleVisibility: (event: null | any) => any | void;
  eventDrill?: null | any;
  // modalOpen?: null | boolean | any | ((openAction: any) => void);
};

function SFModal({ isModalVisible, toggleVisibility, eventDrill = null }: SFModalProps) {
  const sortOptions: SortOptions[] = [
    { label: 'Best Sellers', value: 'best-sellers', order: 'by-rating' },
    {
      label: 'Sort by Price: Low To High',
      value: 'low-to-high',
      order: 'by-low',
    },
    {
      label: 'Sort by Price: High To Low',
      value: 'high-to-low',
      order: 'by-high',
    },
    { label: 'Name', value: 'name', order: 'by-name' },
    { label: 'Availablility', value: 'availablility', order: 'by-av' },
    { label: 'Height', value: 'height', order: 'by-height' },
    { label: 'Depth', value: 'depth', order: 'by-depth' },
  ];
  const filterOptions: FilterOptions[] = [
    { label: 'Brand', value: 'by-brand', order: '' },
    { label: 'Material', value: 'by-tags', order: '' },
    { label: 'Colors', value: 'by-material', order: '' },
    { label: 'Availability', value: 'by-colors', order: '' },
    { label: 'PriceRange', value: 'by-avail', order: '' },
  ];

  //state Initalizations
  // const kafkaRequest = TryKafkaRequest();
  const defaultSortState = sortOptions.find((option) => option.order === 'by-rating') || null;
  const [sortSelection, setSortSelection] = useState<SortOptions | null>(defaultSortState);
  const [resultNumbers, setResultNumbers] = useState<null | number | string | any>(null);
  const [isVisible, setIsVisible] = useState(false);

  //handleStateFunctionsx

  const openModal = () => {
    toggleVisibility(true);
  };
  const closeIt = () => {
    toggleVisibility(false);
  };

  const handleCleanUp = () => {
    resultNumbers && setResultNumbers(null);
  };

  const handleEventDrill = (event: any) => (event = null);
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

  const handleSortAction = async (option: SortOptions | null): Promise<void> => {
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
    document.body.style.overflow = isModalVisible ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto'; // Reset on unmount
    };
  }, [isModalVisible, resultNumbers]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-start">
        <div className="inline-flex justify-start items-center">
          <button
            onClick={openModal}
            className="bg-slate-100 px-3 flex justify-start items-center font-satoshi text-lg text-nowrap py-3"
          >
            All Filters
            <img src={allFS} alt="all-filters" className="w-6 h-6 mx-4" />
          </button>
        </div>

        <div className="flex justify-end items-end w-full gap-4">
          <button className="p-3 bg-slate-100 font-satoshi text-lg text-nowrap">
            <p>Sort By</p>
          </button>
          <button className="p-3 bg-slate-100 font-satoshi text-lg text-nowrap">
            <p>Category</p>
          </button>
        </div>
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 flex items-end justify-center bg-gray-800 bg-opacity-50">
          <div className="h-[90%] w-full overflow-auto rounded-t-2xl bg-white p-8">
            {/* <SelectDropDown label={'brand'} options={['s', 'm', 'l']} onSelect={closeModal} /> */}

            <div className="my-12 flex flex-col gap-12">
              <Sort sortingOptions={sortOptions} currSelection={sortSelection} onChange={handleSortChange} />
              <Filter filterOptions={filterOptions} actionListener={handleEventDrill} />
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
            <img onClick={() => closeIt()} src={outIcon} className="w-12 h-12" />
          </div>
        </div>
      )}
    </div>
  );
}

export default SFModal;
