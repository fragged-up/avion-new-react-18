import React, { useState } from 'react';
import { cn } from '@/utils';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

export const Accordion = ({ items }: AccordionProps) => {
  return (
    <ul className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <AccordionItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

interface SingleAccordionItemProps {
  item: AccordionItemProps;
  index: number;
}

export const AccordionItem = ({ item, index }: SingleAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="py-4">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left focus:outline-none"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${index}`}
      >
        <span className="font-medium">{item.title}</span>
        <svg
          className={cn(
            'w-5 h-5 transition-transform duration-200',
            { 'rotate-180': isOpen }
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        id={`accordion-panel-${index}`}
        className={cn('mt-2 overflow-hidden transition-max-h duration-300', {
          'max-h-0': !isOpen,
          'max-h-screen': isOpen, // Adjust as needed based on content
        })}
        aria-hidden={!isOpen}
      >
        <div className="px-4 py-3 text-gray-500">{item.content}</div>
      </div>
    </li>
  );
};

export default Accordion;
