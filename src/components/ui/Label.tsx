import { cn } from '@/utils';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children?: React.ReactNode;
  htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({ className, children, ...props }) => {
  const baseClasses = cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className);

  return (
    <label className={baseClasses} {...props}>
      {children}
    </label>
  );
};
