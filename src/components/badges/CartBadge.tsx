import { CartBadgeIcon } from "@/icons";
import { selectCartItemCount } from '@/stores/cart/selectors';
import { useAppSelector } from "@/stores/core/hooks";
import { cn } from "@/utils";

type CartIconProps = {
  onClick?: () => void;
  className?: string;
};

export const CartBadge = ({ onClick, className }: CartIconProps) => {
    const itemCount = useAppSelector(selectCartItemCount)
  return (
    <button onClick={onClick} className={cn(`relative`,className)}>
      <img src={CartBadgeIcon} alt="Cart-Icon" className="w-5 h-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 text-[10px] bg-[#4E4D91] text-white w-4 h-4 rounded-full flex items-center justify-center">
          {itemCount  > 9 ? '9+' : itemCount }
        </span>
      )}
    </button>
  );
};

