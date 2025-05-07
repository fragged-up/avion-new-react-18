import { CartBadgeIcon } from "@/icons";
import { selectCartCount, selectCartItems, selectIsCartOpen } from '@/stores/cart/selectors';
import { useAppSelector } from "@/stores/core/hooks";
import { useEffect } from "react";

type CartIconProps = {
  onClick?: () => void;
  className?: string;
};

export const CartBadge = ({ onClick, className }: CartIconProps) => {
    const cartItems = useAppSelector(selectCartItems)
    const cartCount = useAppSelector(selectCartCount)
    console.log(" CartBadge ~ cartCount:", cartCount)
    console.log(" CartBadge ~ cartItems:", cartItems)


  return (
    <button onClick={onClick} className={`relative ${className}`}>
      <img src={CartBadgeIcon} alt="Cart-Icon" className="w-5 h-5" />
      {cartItems.length > 0 && (
        <span className="absolute -top-1 -right-1 text-[10px] bg-[#4E4D91] text-white w-4 h-4 rounded-full flex items-center justify-center">
          {cartItems.length  > 9 ? '9+' : cartItems.length }
        </span>
      )}
    </button>
  );
};

// usage :
{/* <CartIcon count={cartItems.length} onClick={() => openCart() /> */}
