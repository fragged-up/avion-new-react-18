import drsvg from '@/assets/icons/dropdown.svg';
import React from 'react';

import { useState } from 'react';

const SelectNF: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<null | boolean>(null);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between px-6 py-2.5 transition-all duration-200 ease-in-out"
      >
        <p
          className="font-satoshi text-base"
          style={{ textDecoration: isOpen ? 'underline black' : 'none' }}
        >
          Filter By
        </p>

        <img
          src={drsvg}
          alt="drop-down-icon"
          className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default SelectNF;
