import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

export const NavigationBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { href: "#header", text: t("navigationBar.home"), num: "01" },
    { href: "#about", text: t("navigationBar.about"), num: "02" },
    { href: "#techs", text: t("navigationBar.techs"), num: "03" },
    { href: "#projects", text: t("navigationBar.projects"), num: "04" },
    { href: "#contact", text: t("navigationBar.contact"), num: "05" },
  ];  

  const RenderMenuOpen = (): ReactNode => {
    return (
      <div
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-black bg-opacity-90 transform transition-transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-center items-center z-40`}
      >
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.num}
              href={item.href}
              className="flex items-center gap-3 text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="font-bold">{item.num}</span>
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    );
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 right-0 h-screen flex justify-end items-center z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[50vh] w-[3px] md:w-[4px] bg-white fixed right-0 top-1/2 -translate-y-1/2" />

      <button
        className="md:hidden fixed top-4 right-4 w-8 h-8 flex flex-col justify-center items-center gap-1 z-50"
        onClick={toggleMobileMenu}
      >
        <div
          className={`w-6 h-0.5 bg-white transform transition-transform ${
            mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-white transition-opacity ${
            mobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-white transform transition-transform ${
            mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      <div
        className={`hidden md:flex flex-col justify-center items-end transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {navItems.map((item) => (
          <a
            key={item.num}
            href={item.href}
            className="py-2 px-4 m-2 rounded hover:bg-gray-300 text-right w-full whitespace-nowrap"
          >
            {item.num}
          </a>
        ))}
      </div>

      <RenderMenuOpen />
    </nav>
  );
};
