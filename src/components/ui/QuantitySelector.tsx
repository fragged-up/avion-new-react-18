import { cn } from '@/utils';

type QuantityProps = {
  item: any | any[];
  quantity: number;
  onInc: (item: string | number) => void;
  onDec: (item: string | number) => void;
  className?: string;
};

export default function QuantitySelector({ item, quantity, onInc, onDec, className }: QuantityProps) {
  return (
    <div className={cn('bg-[#f9f9f9] flex justify-center items-center gap-[30px] px-5 py-[5px] border-black', className)}>
      <button onClick={() => onDec(item._id)} className="text-[#ebe8f4] bg-transparent appearance-none">
        -
      </button>
      <h2 className="font-satoshi">{quantity}</h2>
      <button onClick={() => onInc(item._id)} className="text-[#ebe8f4] bg-transparent appearance-none">
        +
      </button>
    </div>
  );
}
