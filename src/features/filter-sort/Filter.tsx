import { useState } from 'react';
import { cn } from '@/utils';
import { Label } from '@/components/ui/Label';
import { Container } from '@/components/ui/Semantic';
import { Checkbox } from '@/components/ui/CheckBox';
import { Accordion } from '@/components/ui/Accordion';
import DropDownIcon from '@/assets/icons/dropdown.svg';

type FilterItemProps = {
  count?: number;
  label?: string;
  className?: string;
};

type FilterColor = {
  name: string;
  count: number;
};

type FilterItem = {
  key: string;
  count: number;
};

type FilterPrice = {
  range: string;
  count: number;
};

type FiltersMetaT = {
  filtersMeta: {
    brands?: FilterItem[];
    colors?: FilterColor[];
    materials?: FilterItem[];
    priceRanges?: FilterPrice[];
  };
};

type FilterKey = keyof FiltersMetaT['filtersMeta'];

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

const isColor = (label?: string): boolean => {
  if (!label) {
    return false;
  }
  const lowerCaseLabel = label.toLowerCase();
  if (colorKeywords.has(label)) {
    return true;
  }
  return Array.from(colorKeywords).some((keyword) => lowerCaseLabel.includes(keyword.toLowerCase()));
};

const bgColor = (color?: string): string | undefined => {
  if (!color) return undefined;

  const lowerCaseColor = color.toLowerCase();

  if (lowerCaseColor === 'white') return 'bg-white text-black';
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

const ColorFilter = ({ color }: { color?: string }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const selectedStyle = `${selected ? 'border-2 border-black' : 'border border-gray-300'}`;
  const backgroundColorClass = bgColor(color);
  const textColorClass = backgroundColorClass?.includes('text-white') ? 'text-white' : 'text-black';

  return (
    <div
      className={cn(
        'rounded-full w-[3.75rem] h-[3.75rem] flex items-center justify-center',
        selectedStyle,
        backgroundColorClass,
        textColorClass,
      )}
      onClick={() => setSelected(!selected)}>
      {selected ? '✔︎' : ''}
    </div>
  );
};

const ColorVariant = ({ name, count }: FilterColor) => {
  return (
    <Container className="flex flex-col items-center justify-center">
      <ColorFilter color={name} />
      <Label className="items-center">{name}</Label>
      <Label className="text-gray-500 text-center flex text-nowrap">{count}</Label>
    </Container>
  );
};

const DefaultVariant = ({ label, count }: FilterItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const setCheckboxChecked = () => setIsChecked(!isChecked);

  return (
    <Container className="flex justify-between">
      <Label>{label}</Label>
      <Checkbox
        checked={isChecked}
        onCheckedChange={setCheckboxChecked}
        id={`non-color-${label}`}
        children={<p className="text-gray-500">{count}</p>}
      />
    </Container>
  );
};

const PriceVariant = ({ label, count }: FilterItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const setCheckboxChecked = () => setIsChecked(!isChecked);

  return (
    <Container className="flex justify-between">
      <Label>{label}</Label>
      <Checkbox
        checked={isChecked}
        onCheckedChange={setCheckboxChecked}
        id={`non-color-${label}`}
        children={<p className="text-gray-500">{count}</p>}
      />
    </Container>
  );
};



;

const getTitleFromFilterKey = (key: FilterKey): string => {
  const titleMap: Record<FilterKey, string> = {
    brands: 'Brands',
    colors: 'Colors',
    materials: 'Materials',
    priceRanges: 'Price Range',
  };
  return titleMap[key];
};

const renderFilterItems = (key: FilterKey, filterData: any[]) => {
  switch (key) {
    case 'colors':
      return filterData.map((item: FilterColor, idx) => <ColorVariant key={item.name || idx} name={item.name} count={item.count || 0} />);
    default:
      return filterData.map((item: { id?: string | number; name: string; count?: number }, idx) => (
        <DefaultVariant key={item.id || idx} label={item.name } count={item.count || 0} />
      ));
  }
};

export const FilterComponent: React.FC<FiltersMetaT> = ({ filtersMeta }) => {
  return (
    <>
      {Object.entries(filtersMeta)
        .filter(([, value]) => value && value.length > 0)
        .map(([key, filterData]) => {console.log(key);
          const filterKey = key as FilterKey;
          const title = getTitleFromFilterKey(filterKey);

          return (
            <Accordion key={filterKey} title={title} icon={DropDownIcon}>
              <Container className="flex flex-wrap items-center gap-2">{renderFilterItems(filterKey, filterData)}</Container>
            </Accordion>
          );
        })}
    </>
  );
};

// check with key bindings is on Fn + arrow up / arrow down

const filtersMeta = {
  colors: [
    { count: 9, key: 'Blue' },
    { count: 1, key: 'Soft Blue' },
    { count: 1, key: 'Navy Blue' },
    { count: 1, key: 'Mint Green' },
    { count: 5, key: 'Cream' },
    { count: 2, key: 'Pastel Green' },
    { count: 4, key: 'Brown' },
    { count: 1, key: 'Tan' },
    { count: 1, key: 'Multicolor' },
    { count: 1, key: 'Matte White' },
    { count: 1, key: 'Pastel Blue' },
    { count: 1, key: 'Off-White' },
    { count: 1, key: 'Pink' },
    { count: 1, key: 'Charcoal' },
    { count: 2, key: 'Light Blue' },
    { count: 1, key: 'Assorted' },
    { count: 4, key: 'Black' },
    { count: 26, key: 'White' },
    { count: 6, key: 'Terracotta' },
    { count: 1, key: 'Yellow' },
    { count: 1, key: 'Sage Green' },
    { count: 9, key: 'Gray' },
    { count: 4, key: 'Ivory' },
    { count: 2, key: 'Natural' },
    { count: 1, key: 'Red' },
    { count: 1, key: 'Assorted Patterns' },
    { count: 1, key: 'Olive' },
    { count: 1, key: 'Light Gray' },
    { count: 1, key: 'Slate Gray' },
    { count: 5, key: 'Green' },
    { count: 2, key: 'Matte Black' },
    { count: 1, key: 'Lavender' },
    { count: 2, key: 'Pastel Pink' },
    { count: 5, key: 'Beige' },
  ],
  brands: [
    { count: 1, key: 'ComfortDine' },
    { count: 28, key: 'Flora Boutique' },
    { count: 1, key: 'BakingBuddies' },
    { count: 1, key: 'FarmhouseFinds' },
    { count: 1, key: 'GameLuxe' },
    { count: 1, key: 'LoungeLux' },
    { count: 1, key: 'TimberCraft' },
    { count: 1, key: 'ZenBrew' },
    { count: 1, key: 'CulinaryArts' },
    { count: 1, key: 'BakeWell' },
    { count: 1, key: 'RusticSpread' },
    { count: 1, key: 'ElevateSeating' },
  ],
  materials: [
    { count: 1, key: 'RusticPlates' },
    { count: 1, key: 'PurePour' },
    { count: 1, key: 'TableTopGrace' },
    { count: 1, key: 'CookEase' },
    { count: 1, key: 'RelaxLounge' },
    { count: 1, key: 'RestEase' },
    { count: 1, key: 'GlowCraft' },
    { count: 1, key: 'SauceCraft' },
    { count: 1, key: 'ArtisanCraft' },
    { count: 1, key: 'GreenScape' },
    { count: 1, key: 'RetroNest' },
    { count: 1, key: 'RusticCharm' },
    { count: 1, key: 'ErgoElite' },
    { count: 1, key: 'RusticOutdoors' },
    { count: 1, key: 'PosturePerfect' },
    { count: 1, key: 'OfficeX' },
    { count: 22, key: 'Classic Creations' },
  ],
  prices: [
    {
      count: 120,
      range: '0₪ - 99₪',
    },
    {
      count: 8,
      range: '100₪ - 199₪',
    },
    {
      count: 33,
      range: '200₪ - 299₪',
    },
    {
      count: 12,
      range: '3000₪ - 399₪',
    },
    {
      count: 31,
      range: '400 + ₪',
    },
  ],
}
