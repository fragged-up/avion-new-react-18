import SelectNF from './SelectNF';
import { useState } from 'react';
export type FOptions = {
  options: {
    isSelected?: null | true;
    SelectedOps?: null | any[];
    SelectAction?: (action: any) => void;
    product?: {
      id: number;
      name: string;
      brand: string;
      price?: null | number;
      image?: null | any | string;
      material?: null | string;
      isAvailable?: null | boolean | any;
      stock?: null | number;
      tags?: null | string[];
      ratings?: null | number;
    }[];
  };
};

const NF: React.FC<FOptions> = ({ options }) => {
  const [selected, setSelected] = useState<null | boolean | any[]>(null);
  const [selectedOps, setSelectedOps] = useState<null | any | any[]>([]);
  const handleSelected = (ops: any) => {
    setSelectedOps((prev: any | any[]) => [...prev, ops]);
    const result = [...selectedOps, ops];
    return result;
  };
  const handleSelect = (select: null | any | any[]) => {
    if (select === null) return null;
    if (Array.isArray(select)) {
      setSelected(select);
    } else if (select !== null) {
      setSelected([select]);
    }
  };
  return (
    <div className="w-full bg-slate-400 h-screen">
      {options.product?.map((op: any, index: number) => (
        <div key={index}>
          {/* <div onClick={() => handleSelect} onChange={handleSelected}> */}
          <div>
            <p>{op.id}</p>
            <p>name : {op.name}</p>
            <p>brand : {op.brand}</p>
            <p>price : {op.price}</p>
            <div>
              <img
                src={op.image}
                alt="op-image"
                className="w-[220px] h-[220px]"
              />
            </div>
            <p>material : {op.material}</p>
            <p>isAvailable : {op.isAvailable.toString()}</p>
            <p>number in stock : {op.stock}</p>
            <p>tags : {op.tags?.join(' | ')}</p>
            <p>ratings : {op.ratings}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NF;
