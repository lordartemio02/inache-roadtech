import { FC, useState } from "react";

import logo from "/logo.svg";

import {
  circleFlagsIcon,
  CloseIcon,
  HamburgerIcon,
  HeartIcon,
  mosturizmIcon,
  userIcon,
} from "../../assets/icons";
import Button from "../Button";
import Navigation from "../Navigation";

const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClickMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <header
      className={`z-50 fixed top-0 left-0 w-full bg-white ${
        isOpenMenu ? "rounded-b-3xl" : ""
      }`}>
      <div className="container flex justify-between items-center py-3">
        <div className="flex items-center gap-[20px]">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Rosspass" />
            <div className="w-0.5 h-7 rounded-sm bg-natural-500" />
            <div className="uppercase text-brand-100 font-bold">Россия</div>
          </div>
          <div className="flex items-center">
            <div
              aria-hidden
              onClick={handleClickMenu}
              className="p-3 flex items-center gap-2 cursor-pointer">
              {isOpenMenu ? <CloseIcon /> : <HamburgerIcon />}
              Меню
            </div>
            <Button type="thetriary">Бонусы</Button>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <Button
              type="thetriary"
              leftIcon={<img src={mosturizmIcon} alt="Мои планы" />}>
              Проекты Мостуризма
            </Button>
            <Button type="thetriary" leftIcon={<HeartIcon />}>
              Мои планы
            </Button>
            <Button
              type="thetriary"
              leftIcon={<img src={userIcon} alt="Профиль" />}>
              Войти
            </Button>
            <Button type="thetriary">
              <img src={circleFlagsIcon} alt="Локализация" />
            </Button>
          </div>
        </div>
      </div>
      {isOpenMenu && <Navigation />}
    </header>
  );
};

export default Header;
