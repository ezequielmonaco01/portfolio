import { links } from "../../constants/links";

import LinkedinIcon from "../../assets/icons/linkedinIcon.png";
import GithubIcon from "../../assets/icons/githubIcon.png";
import { useTranslation } from "react-i18next";

export const Index = () => {
  const { t } = useTranslation();
  return (
    <footer
      id="contact"
      className="flex justify-center items-center flex-col p-4 md:p-[85px] w-full h-screen snap-center"
    >
      <div className="w-full">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          {t("contact.title")}
        </h1>
        <h2 className="mt-4 md:mt-7 text-lg md:text-2xl text-center">
          <span>{t("contact.description")}</span>
        </h2>
        <h2 className="mt-4 md:mt-7 text-lg md:text-2xl text-center">
          <span>{t("contact.description2")}</span>
        </h2>
        <h2 className="font-bold text-lg md:text-2xl text-center">
          <span>{t("contact.description3")}</span>
        </h2>
      </div>
      <div className="flex mt-6 md:mt-10 flex-col gap-6 md:gap-10 justify-center items-center">
        <label className="font-bold text-lg md:text-xl">
          monacoezequiel@gmail.com
        </label>
        <div className="flex w-[100px] md:w-[125px] justify-between items-center">
          <div>
            <a href={links.linkedin} target="_blank">
              <img src={LinkedinIcon} className="w-8 md:w-[40px]" />
            </a>
          </div>
          <div>
            <a href={links.github} target="_blank">
              <img src={GithubIcon} className="w-8 md:w-[40px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
