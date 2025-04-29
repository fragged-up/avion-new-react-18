
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'white' | 'transparent'; // Example variants
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  variant = 'white',
  ...rest
}) => {
  const variantStyles = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-200',
    white: 'bg-white',
    transparent: 'bg-transparent',
  };

  const combinedClassName = `${className || ''} flex justify-between items-center ${variantStyles[variant] || ''}`.trim();

  return (
    <section className={combinedClassName} {...rest}>
      {children}
    </section>
  );
};

export default Section;
