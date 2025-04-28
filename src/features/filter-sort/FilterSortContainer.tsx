import { useEffect, useRef } from 'react';
import chevronLeft from '@/assets/icons/chevronLeft.svg';
import Button from '@/components/ui/Button';

interface SortContainerProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function FilterSortContainer({ children,onClose }: SortContainerProps) {
  return (
    <div className="bg-white w-full">
      <div className="fixed inset-0 flex items-end justify-center bg-gray-800 lg:bg-white bg-opacity-50 lg:right-auto lg:w-[45%]">
        <div className="h-[90%] w-full overflow-auto rounded-t-2xl bg-white p-8 slide-animation lg:h-full lg:rounded-none">
          {children}
          </div>
        <div className="absolute left-[5%] top-[2%] mb-24 border-2 border-green-500">
          <Button className="w-10 h-10" icon={chevronLeft} onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

// interface SortContainerProps {
//   children: React.ReactNode;
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function FilterSortContainer({ children, isOpen, onClose }: SortContainerProps) {
//   const modalRef = useRef<HTMLDivElement>(null);

//   // Close modal on outside click (for smaller screens)
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (isOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
//         onClose();
//       }
//     }

//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="w-full fixed inset-0 z-20 flex items-end justify-center bg-gray-800 lg:bg-white bg-opacity-50 lg:right-auto lg:w-[45%]">
//       <div
//         ref={modalRef}
//         className={`h-[90%] w-full overflow-auto rounded-t-2xl bg-white p-8 transition-transform duration-300 ease-in-out ${
//          isOpen ? 'translate-y-0' : 'translate-y-full'} lg:h-full lg:rounded-none`}>
//         {children}
//       </div>

//       {/* Back button (visible on smaller screens) */}
//       <div className="absolute left-[5%] top-[2%] mb-24 lg:hidden">
//         <Button className="w-10 h-10" icon={chevronLeft} onClick={onClose} />
//       </div>

//       {/* Overlay to close modal on smaller screens */}
//       <div
//         className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity lg:hidden"
//         aria-hidden="true"
//         onClick={onClose}
//       />
//     </div>
//   );
// }
