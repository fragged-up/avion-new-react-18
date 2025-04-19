import { CloseIcon } from "@/icons"
import { Link } from "react-router-dom"
import { NavLinks } from "@/config"
import { useDispatch, useSelector } from "react-redux"
import { closeMenu } from "@/stores/modal"
import { selectIsMenuOpen } from "@/stores/modal/selectors"

export default function MenuModal() {
  const dispatch = useDispatch()
  const isMenuOpen = useSelector(selectIsMenuOpen)

  const handleCloseMenu = () => {
    dispatch(closeMenu())
  }

  return (
    <div
      className={`fixed top-0 right-0 h-full z-[1] bg-[#2a254b] text-white flex flex-col items-end gap-4
      transition-all duration-500 ease-out
      ${isMenuOpen ? 'w-full opacity-100 visible' : 'w-0 opacity-0 invisible'}`}
    >
      <div
        className="relative w-full left-[22px] top-[14px] cursor-pointer"
        onClick={handleCloseMenu}
      >
        <img src={CloseIcon} alt="close-icon" className="w-5 h-5" />
      </div>

      <div className="flex flex-col items-end gap-4 pr-8 pt-16">
        {NavLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            onClick={handleCloseMenu}
            className="font-clash font-normal text-[1.7em]"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
