import { cn } from '@/utils';
import { useState } from 'react';

type AccordionProps = {
  children?: React.ReactNode;
  title?: string;
  icon?: string | React.ReactSVGElement;
  className?:string;
  selectedOptions?:string[];
};

export const Accordion = ({ children, title, icon, className, selectedOptions }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);4

  const accordionStyle = { 'max-h-0': !isOpen, 'max-h-screen': isOpen };
  const accordionId = `accordion-panel-${title}`;

  return (
    <li className={cn("py-5 group list-none border-b border-b-gray-200",className)}>
      <button
        type="button"
        className="flex items-center justify-between w-full text-left focus:outline-none cursor-pointer"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={accordionId}>
        <span className="accordion-label text-gray font-satoshi text-base group-hover:underline">{title}</span>
        {icon && <img src={icon as any} className="w-5 h-5" alt="drop-down-icon" />}
      </button>
       {!isOpen && selectedOptions && selectedOptions.map((op,idx)=>(
          <span key={idx} className='py-4'> {op} </span>
           ))}
      <div id={accordionId} className={cn('mt-2 overflow-hidden transition-max-h duration-300', accordionStyle)} aria-hidden={!isOpen}>
        <div className="px-4 py-3 text-gray-500">{children}</div>
      </div>
    </li>
  );
};

