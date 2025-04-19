import { CartBadgeIcon } from "@/icons";

type CartIconProps = {
  count?: number;
  onClick?: () => void;
  className?: string;
};

export const CartBadge = ({ count = 0, onClick, className = '' }: CartIconProps) => {
  return (
    <button onClick={onClick} className={`relative ${className}`}>
      <img src={CartBadgeIcon} alt="Cart-Icon" className="w-5 h-5" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </button>
  );
};
// usage :
{/* <CartIcon count={cartItems.length} onClick={() => openCart() /> */}
