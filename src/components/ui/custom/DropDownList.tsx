import React from 'react';

interface DropdownListItem {
  id: string | number;
  label: string;
  value: any;
  isSelected?: boolean;
  onChange?: (value: any) => void;
}

interface DropdownListProps {
  items: DropdownListItem[];
  name?: string;
}

const DropdownList: React.FC<DropdownListProps> = ({ items, name }) => {
  return (
    <ul className="w-full space-y-2 px-6 py-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex w-full items-center justify-between space-x-3"
        >
          <label
            htmlFor={`${name}-${item.id}`}
            className="cursor-pointer text-sm"
          >
            {item.label}
          </label>
          <input
            type="radio"
            id={`${name}-${item.id}`}
            name={name}
            className="h-4 w-4 accent-black"
            checked={item.isSelected}
            onChange={() => item.onChange?.(item.value)}
          />
        </li>
      ))}
    </ul>
  );
};

export default DropdownList;
