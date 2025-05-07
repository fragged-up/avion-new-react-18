import { useEffect } from 'react';
import { RootState } from '@/stores/core/store';
import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import { openFilterFromModal, openSortFromModal } from '@/stores/modal/slice';
import Button from '@/components/ui/Button';
import fsIcon from '@/assets/icons/fsIcon.svg';

export default function FilterSortBar() {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state: RootState) => state.modal);

  const handleOpenModal = () => {
    dispatch(openFilterFromModal());
  };
  const handleOpenFilters = () => {
    dispatch(openFilterFromModal());
  };

  const handleOpenSort = () => {
    dispatch(openSortFromModal());
  };
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="flex justify-between items-center bg-white">
      <div>
        <Button variant="primary" icon={fsIcon} iconPosition="right" onClick={handleOpenModal}>
          All Filters
        </Button>
      </div>
      <div className="flex gap-2 items-center">
        <Button onClick={handleOpenSort}>Sort By</Button>
        <Button onClick={handleOpenFilters}>Filter By</Button>
      </div>
    </div>
  );
}
