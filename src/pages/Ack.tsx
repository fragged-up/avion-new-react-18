import { useEffect, useState } from 'react';
import Sort, { SortOptions } from '@/components/Sort';

// import Filter from '@/components/Filter';
// const [activeClearing, setActiveClearing] = useState(false);
// const [filterSelectedOptions, setFilterSelectedOptions] = useState<any>(null);

export default function Ack() {
  let activeClearing = undefined;
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
  const defaultSortState = sortOptions.find((option) => option.order === 'by-rating') || null;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sortSelection, setSortSelection] = useState<SortOptions | null>(defaultSortState);

  const closeModal = () => setIsModalVisible(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const handleSortChange = (value: string) => {
    const selected = sortOptions.find((option) => option.value === value);
    if (selected) {
      setSortSelection(selected);
    }
  };

  const handleSortAction = async (option: SortOptions | null): Promise<void> => {
    if (!option) return;
    const queryParams = new URLSearchParams({ order: option.order }).toString();

    console.log('queryParams : ', queryParams);

    try {
      const req = await fetch(`http://localhost:5001/sort?${queryParams}`);
      const response = await req.json();
      const data = response.items;
      console.log('data (response.items) : ', data);
      console.log('data.length', data.length);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleFilterAction = async () => {
    const queryParams = new URLSearchParams();

    filterOptions.forEach((option: any) => {
      queryParams.append(option.value, option.order);
    });

    try {
      const req = await fetch(`http://localhost:5001/filter?${queryParams.toString()}`);

      const response = req.json();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const filterOptions = [
    { label: 'Option 1', value: 'option1' },

    { label: 'Option 2', value: 'option2' },

    { label: 'Option 3', value: 'option3' },

    { label: 'Option 4', value: 'option4' },
  ];

  // const handleFilterChange = (updatedOptions: any) => {
  //   setSortSelectedOptions(updatedOptions);
  // };
  useEffect(() => {
    document.body.style.overflow = isModalVisible ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto'; // Reset on unmount
    };
  }, [isModalVisible]);

  return (
    <div className="h-[100dvh] bg-black">
      <div className="button-container flex items-center justify-center py-12">
        <button
          className="text-purple flex items-center justify-center rounded-xl bg-white px-2 py-4 text-center font-satoshi text-base font-medium"
          onClick={openModal}
        >
          Click for modal
        </button>
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 flex items-end justify-center bg-gray-800 bg-opacity-50" onClick={closeModal}>
          <div className="h-[90%] w-full overflow-auto rounded-t-2xl bg-white p-8" onClick={(e) => e.stopPropagation()}>
            {/* <SelectDropDown

              label={"brand"}

              options={["s", "m", "l"]}

              onSelect={closeModal}

            /> */}

            <div className="my-12 flex flex-col gap-12">
              <Sort
                sortLabel="Sort By"
                sortingOptions={sortOptions}
                selectedOption={sortSelection}
                onChange={handleSortChange}
                onClick={() => handleSortAction(sortSelection)}
              />

              {/* <Filter Filteroptions={filterOptions} selectedOptions={filterSelectedOptions} filterHeader="Categories" onChange={handleFilterChange} /> */}
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <button className="w-full rounded-xl bg-black px-2 py-3 font-satoshi text-base text-white">Show Results []</button>
              {/* this how the button and active clearing is supposed to be */}
              {/* <button
                className={`w-full rounded-xl px-2 py-3 font-satoshi text-base ${activeClearing ? 'bg-black' : 'bg-red-500'}`}
              >
              Clear All
              </button> */}
              {/* for now i changed activeClearing !== null || activeClearing !== undefined
                but its supposed to be activeClearing ? so bg black : bg-red
                 */}
              <button
                // @ts-ignore
                className={`w-full rounded-xl px-2 py-3 font-satoshi text-base text-white${activeClearing === undefined ? 'bg-black' : 'bg-red-500'}`}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
