import { useEffect, useState } from 'react';
import Filter from '@/components/Filter';
import Sort from '@/components/Sort';

export default function Ack() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [activeClearing, setActiveClearing] = useState(false);
  const [filterSelectedOptions, setFilterSelectedOptions] = useState<any>(null);
  const [sortSelectedOptions, setSortSelectedOptions] = useState<any>('by-rating');
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const sortOptions = [
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

  const handleSortAction: any = async (order: any) => {
    const queryParams = new URLSearchParams({ order: sortSelectedOptions }).toString();

    console.log('queryParams : ', queryParams);

    try {
      const req = await fetch(`http://localhost:5001/sort?${queryParams}`);
      const response = await req.json();
      const data = response.items;
      console.log('data (response.items) : ', data);
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

  const handleSortChange = (value: any) => {
    setFilterSelectedOptions(value);

    // Any additional sorting logic you want to apply
  };

  const handleFilterChange = (updatedOptions: any) => {
    setSortSelectedOptions(updatedOptions);
  };
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
                options={sortOptions}
                selectedOption={sortSelectedOptions}
                sortHeader="Sort By"
                onChange={handleSortChange}
                // sortAction={handleSortAction(sortSelectedOptions)}
                onClick={handleSortAction(sortSelectedOptions)}
              />
              <Filter
                options={filterOptions}
                selectedOptions={filterSelectedOptions}
                filterHeader="Categories"
                onChange={handleFilterChange}
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <button className="w-full rounded-xl bg-black px-2 py-3 font-satoshi text-base text-white">
                Show Results []
              </button>
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
                className={`w-full rounded-xl px-2 py-3 font-satoshi text-base ${activeClearing !== undefined ? 'bg-black' : 'bg-red-500'}`}
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
