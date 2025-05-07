import { cn } from '@/utils';
import { useState } from 'react';
import { Label } from '@/components/ui/Label';
import { VariantProps } from './Filters';

const colorKeywords = new Set([
  'White',
  'Black',
  'Red',
  'Green',
  'Blue',
  'Yellow',
  'Brown',
  'Gray',
  'Silver',
  'Gold',
  'Orange',
  'Purple',
  'Pink',
  'Teal',
  'Cyan',
  'Magenta',
  'Lime',
  'Olive',
  'Maroon',
  'Navy',
  'Turquoise',
  'Violet',
  'Indigo',
  'Beige',
  'Cream',
  'Khaki',
  'Tan',
  'Lavender',
  'Coral',
  'Salmon',
  'Bronze',
  'Copper',
  'Charcoal',
  'Mint',
  'Mustard',
  'Plum',
  'Rust',
  'Scarlet',
  'Sky Blue',
  'Slate',
  'Snow',
  'Steel',
  'Taupe',
  'Wheat',
  'Wine',
  'Forest Green',
  'Royal Blue',
  'Light Blue',
  'Dark Blue',
  'Light Green',
  'Dark Green',
  'Light Gray',
  'Dark Gray',
  'Pastel Blue',
  'Pastel Green',
  'Pastel Pink',
  'Soft Blue',
  'Navy Blue',
  'Light Yellow',
  'Dark Yellow',
  'Light Red',
  'Dark Red',
  'Light Purple',
  'Dark Purple',
  'Off-White',
  'Matte White',
  'Matte Black',
  'Light Pink',
  'Dark Pink',
  'Olive Green',
  'Sage Green',
  'Terracotta',
  'Light Brown',
  'Dark Brown',
  'Slate Gray',
  'Light Orange',
  'Dark Orange',
  'Light Teal',
  'Dark Teal',
  'Light Cyan',
  'Dark Cyan',
  'Light Magenta',
  'Dark Magenta',
]);

const bgColor = (color?: string): string | undefined => {
  if (!color) return undefined;

  const lowerCaseColor = color.toLowerCase();

  if (lowerCaseColor === 'white' || lowerCaseColor.includes('white')) return 'bg-white text-black border-black';
  if (lowerCaseColor === 'black') return 'bg-black text-white';
  if (lowerCaseColor.includes('red')) return 'bg-red-600 text-white';
  if (lowerCaseColor.includes('green')) return 'bg-green-600 text-white';
  if (lowerCaseColor.includes('blue')) return 'bg-blue-600 text-white';
  if (lowerCaseColor.includes('yellow')) return 'bg-yellow-600';
  if (lowerCaseColor.includes('brown')) return 'bg-brown-600 text-white';
  if (
    lowerCaseColor.includes('gray') ||
    lowerCaseColor.includes('silver') ||
    lowerCaseColor.includes('slate') ||
    lowerCaseColor.includes('charcoal')
  )
    return 'bg-gray-400 text-white';
  if (lowerCaseColor.includes('pink')) return 'bg-pink-400 text-white';
  if (
    lowerCaseColor.includes('purple') ||
    lowerCaseColor.includes('lavender') ||
    lowerCaseColor.includes('violet') ||
    lowerCaseColor.includes('indigo') ||
    lowerCaseColor.includes('plum')
  )
    return 'bg-purple-400 text-white';
  if (lowerCaseColor.includes('orange')) return 'bg-orange-400';
  if (lowerCaseColor.includes('teal') || lowerCaseColor.includes('cyan') || lowerCaseColor.includes('turquoise'))
    return 'bg-teal-400 text-white';
  if (lowerCaseColor.includes('lime')) return 'bg-lime-400';
  if (lowerCaseColor.includes('olive') || lowerCaseColor.includes('sage')) return 'bg-olive-400 text-white';
  if (
    lowerCaseColor.includes('maroon') ||
    lowerCaseColor.includes('wine') ||
    lowerCaseColor.includes('rust') ||
    lowerCaseColor.includes('scarlet')
  )
    return 'bg-red-800 text-white';
  if (lowerCaseColor.includes('navy') || lowerCaseColor.includes('royal blue')) return 'bg-blue-800 text-white';
  if (
    lowerCaseColor.includes('beige') ||
    lowerCaseColor.includes('cream') ||
    lowerCaseColor.includes('khaki') ||
    lowerCaseColor.includes('tan') ||
    lowerCaseColor.includes('ivory') ||
    lowerCaseColor.includes('natural') ||
    lowerCaseColor.includes('off-white') ||
    lowerCaseColor.includes('wheat')
  )
    return 'bg-yellow-200 text-black';
  if (lowerCaseColor.includes('coral') || lowerCaseColor.includes('salmon')) return 'bg-orange-300 text-white';
  if (lowerCaseColor.includes('bronze') || lowerCaseColor.includes('copper') || lowerCaseColor.includes('gold')) return 'bg-yellow-500';
  if (lowerCaseColor.includes('mint')) return 'bg-green-300';
  if (lowerCaseColor.includes('mustard')) return 'bg-yellow-600';
  if (lowerCaseColor.includes('sky blue')) return 'bg-blue-300';
  if (lowerCaseColor.includes('snow')) return 'bg-gray-100 text-black';
  if (lowerCaseColor.includes('steel')) return 'bg-gray-500 text-white';
  if (lowerCaseColor.includes('taupe')) return 'bg-gray-600 text-white';
  if (lowerCaseColor.includes('forest green')) return 'bg-green-800 text-white';

  return undefined;
};

const ColorFilter = ({ color, className }: { color?: string; className?: string }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const backgroundColorClass = bgColor(color);

  return (
    <div
      className={cn('rounded-full w-[3.75rem] h-[3.75rem] flex items-center justify-center', backgroundColorClass, className)}
      onClick={() => setSelected(!selected)}
      style={{ border: '2px solid gray', cursor: 'pointer' }}>
      <span>{selected ? '✔︎' : ''}</span>
    </div>
  );
};

export const ColorVariant = ({ filterItems, handleCheckboxChange, isChecked }: VariantProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2" onClick={() => handleCheckboxChange}>
      <ColorFilter color={filterItems.value} className="m-4" />
      <Label className="items-center">{filterItems.value}</Label>
      <Label className="text-gray-500 text-center flex text-nowrap">{filterItems.count}</Label>
    </div>
  );
};
