import { CloseIcon } from "@/icons"
import { Link } from "react-router-dom"
import { NavLinks } from "@/config"
import { closeMenu } from "@/stores/modal"
import { selectIsMenuOpen } from "@/stores/modal/selectors"
import { useAppSelector, useAppDispatch } from "@/stores/core/hooks"

export default function MenuModal() {
  const dispatch = useAppDispatch()
  const isMenuOpen = useAppSelector(selectIsMenuOpen)

  const handleCloseMenu = () => {
    dispatch(closeMenu())

  }

  return (
    <div className={`fixed top-0 right-0 h-full cursor-pointer z-[1] bg-indigo-800 text-white flex flex-col items-end gap-4 transition-all duration-500 ease-out
      ${isMenuOpen ? 'w-full opacity-100 visible' : 'w-0 opacity-0 invisible'}`} >

      <div className="relative w-full left-[22px] top-[14px] cursor-pointer">
        <img src={CloseIcon} alt="close-icon" className="w-5 h-5 cursor-pointer" onClick={handleCloseMenu}/>
      </div>

      <div className="flex flex-col items-end gap-4 pr-8 pt-16">
        {NavLinks.map(({ to, label }) => (
          <Link key={to} to={to} onClick={handleCloseMenu} className="font-clash cursor-pointer font-normal text-[1.7em]">
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
