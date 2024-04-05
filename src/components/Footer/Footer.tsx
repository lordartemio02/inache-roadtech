import { FC } from "react";
import { Link } from "react-router-dom";

import footerLogo from "/footerLogo.svg";

import { dzenIcon, okIcon, telegramIcon, vkIcon } from "../../assets/icons";

const Footer: FC = () => {
  return (
    <div className="bg-natural-100 text-white">
      <div className="container p-4">
        <div className="flex justify-between">
          <div className="flex gap-8 flex-col">
            <div className="flex flex-col gap-3">
              <div className="text-white/50 text-body-p2">Контакты</div>
              <a href="tel:88003006122" className="text-body-p1 text-white">
                8 (800) 300-6-122
              </a>
              <a
                href="mailto:press@welcome.moscow"
                className="text-body-p1 text-white">
                press@welcome.moscow
              </a>
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <Link to={""} className="text-body-p1 text-white">
                О проекте
              </Link>
              <Link to={""} className="text-body-p1 text-white">
                Вход для партнеров
              </Link>
              <div className="flex gap-2 items-center">
                <img src={vkIcon} alt="vkontakte" />
                <img src={dzenIcon} alt="dzen" />
                <img src={telegramIcon} alt="telegram" />
                <img src={okIcon} alt="okIcon" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 pb-2 flex flex-col gap-6 justify-between border-t border-t-white/15">
          <img src={footerLogo} className="w-44" alt="logo" />
          <div className="flex flex-col gap-1">
            <Link className="text-body-p3 text-white" to={"/"}>
              Политика конфиденциальности
            </Link>
            <Link className="text-body-p3 text-white" to={"/"}>
              Политика обработки персональных данных
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
