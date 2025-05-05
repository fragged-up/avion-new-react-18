import chevronLeft from '@/assets/icons/chevronLeft.svg';
import Button from '@/components/ui/Button';

interface SortContainerProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function FilterSortContainer({ children, onClose }: SortContainerProps) {
  return (
    <div className="bg-white w-full" aria-modal="true" aria-labelledby="filter-sort-title" role="dialog">
      <div className="fixed inset-0 flex items-end justify-center bg-gray-800 lg:bg-white bg-opacity-50 lg:right-auto lg:w-[45%]">
        <div className="h-[90%] w-full overflow-auto rounded-t-2xl bg-white p-8 slide-animation lg:h-full lg:rounded-none">{children}</div>
        <div className="absolute left-[5%] top-[2%] mb-24 border-2 border-green-500">
          <Button className="w-10 h-10" icon={chevronLeft} onClick={onClose} />
        </div>
      </div>
    </div>
  );
}
