import React from 'react';
import DropDownIcon from '@/assets/icons/dropdown.svg';

interface DropdownHeaderProps {
  label: string | null | undefined| any;
  isOpened: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
}

const DropdownHeader: React.FC<DropdownHeaderProps> = ({ label, isOpened, onToggle, children }) => {
  return (
    <div className="flex cursor-pointer items-center justify-between font-clash font-bold py-3" onClick={onToggle}>
      <p className="font-clash font-medium text-lg" style={{ textDecoration: isOpened ? 'underline black' : 'none' }}>
        {label}
      </p>
      <img src={DropDownIcon} alt="drop-down-icon" className={`h-6 w-6 transition-transform ${isOpened ? 'rotate-180' : 'rotate-0'}`} />
    </div>
  );
};

export default DropdownHeader;
