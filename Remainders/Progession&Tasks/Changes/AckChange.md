## AskComponent Updated Change 
## Why Changed is Commited in ReasonForChanges/AckReason.md 

<!-- import { useEffect, useState, useCallback, useMemo } from 'react';
import Filter from '@/components/Filter';
import Sort from '@/components/Sort';

export default function Ack() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeClearing, setActiveClearing] = useState(false);
  const [filterSelectedOptions, setFilterSelectedOptions] = useState<any>(null);
  const [sortSelectedOptions, setSortSelectedOptions] = useState<any>('by-rating');
  const abortController = useMemo(() => new AbortController(), []);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const sortOptions = useMemo(() => [
    { label: 'Best Sellers', value: 'best-sellers', order: 'by-rating' },
    { label: 'Sort by Price: Low To High', value: 'low-to-high', order: 'by-low' },
    { label: 'Sort by Price: High To Low', value: 'high-to-low', order: 'by-high' },
    { label: 'Name', value: 'name', order: 'by-name' },
    { label: 'Availability', value: 'availability', order: 'by-av' },
    { label: 'Height', value: 'height', order: 'by-height' },
    { label: 'Depth', value: 'depth', order: 'by-depth' },
  ], []);

  const filterOptions = useMemo(() => [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
  ], []);

  const handleSortChange = useCallback((value: any) => {
    setSortSelectedOptions(value);
    // ניתן להוסיף לוגיקה נוספת לסידור
  }, []);

  const handleFilterChange = useCallback((updatedOptions: any) => {
    setFilterSelectedOptions(updatedOptions);
    // ניתן להוסיף לוגיקה נוספת לסינון
  }, []);

  const handleSortAction = useCallback(async () => {
    try {
      abortController.abort(); // ביטול בקשות קודמות
      const newAbortController = new AbortController();
      const queryParams = new URLSearchParams({ order: sortSelectedOptions });
      
      const req = await fetch(`http://localhost:5001/sort?${queryParams.toString()}`, {
        signal: newAbortController.signal,
      });
      
      const response = await req.json();
      console.log('Sorted Data:', response.items);
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        console.error('Error fetching sorted data:', err.message);
      }
    }
  }, [sortSelectedOptions, abortController]);

  const handleFilterAction = useCallback(async () => {
    try {
      abortController.abort(); // ביטול בקשות קודמות
      const newAbortController = new AbortController();
      const queryParams = new URLSearchParams();

      filterSelectedOptions?.forEach((option: any) => {
        queryParams.append(option.value, option.order);
      });

      const req = await fetch(`http://localhost:5001/filter?${queryParams.toString()}`, {
        signal: newAbortController.signal,
      });

      const response = await req.json();
      console.log('Filtered Data:', response);
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        console.error('Error fetching filtered data:', err.message);
      }
    }
  }, [filterSelectedOptions, abortController]);

  useEffect(() => {
    document.body.style.overflow = isModalVisible ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; // Reset on unmount
    };
  }, [isModalVisible]);

  return (
    <div className='h-[100dvh] bg-black'>
      <div className='button-container flex items-center justify-center py-12'>
        <button
          className='text-purple flex items-center justify-center rounded-xl bg-white px-2 py-4 text-center font-satoshi text-base font-medium'
          onClick={openModal}
        >
          Click for modal
        </button>
      </div>

      {isModalVisible && (
        <div
          className='fixed inset-0 flex items-end justify-center bg-gray-800 bg-opacity-50'
          onClick={closeModal}
        >
          <div
            className='h-[90%] w-full overflow-auto rounded-t-2xl bg-white p-8'
            onClick={e => e.stopPropagation()}
          >
            <div className='my-12 flex flex-col gap-12'>
              <Sort
                options={sortOptions}
                selectedOption={sortSelectedOptions}
                sortHeader='Sort By'
                onChange={handleSortChange}
              />

              <Filter
                options={filterOptions}
                selectedOptions={filterSelectedOptions}
                filterHeader='Categories'
                onChange={handleFilterChange}
              />
            </div>

            <div className='flex flex-col items-center justify-center gap-4'>
              <button className='w-full rounded-xl bg-black px-2 py-3 font-satoshi text-base text-white' onClick={handleSortAction}>
                Show Results []
              </button>

              <button
                className={`w-full rounded-xl px-2 py-3 font-satoshi text-base ${activeClearing ? 'bg-black' : 'bg-red-500'}`}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} -->