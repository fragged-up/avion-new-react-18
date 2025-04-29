import { cn } from "@/utils";
import * as React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onCheckedChange,
  className,
  children,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    onCheckedChange?.(newChecked);
  };

  const containerClasses = cn(
    'relative inline-flex items-center justify-center w-6 h-6 rounded-md',
    'border-2',
    checked
      ? 'border-blue-500 bg-blue-500 text-white' // Changed colors
      : 'border-gray-300 bg-white',        // Changed colors
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2', // Changed ring color
    'cursor-pointer',
    className
  );

  return (
    <div className="flex items-center gap-2">
       {children && <label onClick={() => onCheckedChange?.(!checked)} className="cursor-pointer">{children}</label>}
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="sr-only"
        {...props}
      />
      <span className={containerClasses} onClick={() => onCheckedChange?.(!checked)}>
        {checked ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <></>
        )}
      </span>

    </div>
  );
};
