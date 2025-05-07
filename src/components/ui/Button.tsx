import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  className?: string;
  icon?: string | React.ReactSVGElement;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  rounded = false,
  icon,
  iconPosition = 'left',
  className,
  onClick,
  ...rest
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-satoshi transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const roundedStyles = rounded ? 'rounded-md' : '';

  const variantStyles = clsx({
    'p-3 bg-slate-100 text-lg text-nowrap': variant === 'primary',
    'text-indigo-600 hover:text-indigo-700 focus:ring-indigo-500': variant === 'text',
  });

  const sizeStyles = clsx({
    'px-3 py-2 text-sm': size === 'small',
    'px-4 py-2 text-base': size === 'medium',
    'px-5 py-3 text-lg': size === 'large',
  });

  const iconStyles = 'flex-shrink-0';

  const combinedClasses = twMerge(
    baseStyles,
    roundedStyles,
    variantStyles,
    sizeStyles,
    className
  );

  return (
    <button className={combinedClasses} onClick={onClick} {...rest}>
      {icon && iconPosition === 'left' && (
        <span className={clsx(iconStyles, 'mr-2')}>
          {typeof icon === 'string' ? <img src={icon} alt="" className="h-5 w-5" /> : icon}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={clsx(iconStyles, 'ml-2')}>
          {typeof icon === 'string' ? <img src={icon} alt="" className="h-5 w-5" /> : icon}
        </span>
      )}
    </button>
  );
}
