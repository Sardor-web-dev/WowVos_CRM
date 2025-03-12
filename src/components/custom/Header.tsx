import { IoSearch } from "react-icons/io5"
import { IoMdNotificationsOutline } from "react-icons/io"
import { CiCirclePlus } from "react-icons/ci"
import { IoSettingsOutline } from "react-icons/io5"
import { MdKeyboardArrowDown } from "react-icons/md"

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between p-6">
      {!isSidebarOpen && (
        <img src="/Wowvos-logo.svg" alt="WOWVOS" className="cursor-pointer" />
      )}

      <div className="flex items-center gap-[78px] text-[#909090]">
        <button className="flex items-center space-x-2">
          <CiCirclePlus size={24} className="cursor-pointer"/>
          <span>Создать пациента</span>
        </button>

        <button className="flex items-center space-x-2">
          <IoSettingsOutline size={24} className="cursor-pointer" />
          <span>Настройки</span>
        </button>

        <div className="flex items-center border rounded-lg w-[296px] h-[48px] p-4">
          <IoSearch size={24} className="text-[#909090] cursor-pointer" />
          <input
            type="text"
            placeholder="Поиск..."
            className="outline-none pl-2"
          />
        </div>
      </div>

      <div className="flex items-center gap-[19px] text-[#909090]">
        <IoMdNotificationsOutline size={24} className="cursor-pointer"/>
        <span>|</span>
        <span>RU</span><MdKeyboardArrowDown className="cursor-pointer"/>
        <span>|</span>
        <img src="/Header-logo.svg" alt="" /><MdKeyboardArrowDown className="cursor-pointer"/>
      </div>
    </header>
  )
}

export default Header
