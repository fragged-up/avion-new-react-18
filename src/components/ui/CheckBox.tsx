interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onCheckedChange, className, children, ...props }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    onCheckedChange?.(newChecked);
  };

  return (
    <div className="flex items-center gap-2">
      {children && (
        <label onClick={() => onCheckedChange?.(!checked)} className="cursor-pointer">
          {children}
        </label>
      )}
      <input type="checkbox" checked={checked} onChange={handleChange} className="accent-black w-4 h-4" {...props} />
    </div>
  );
};
