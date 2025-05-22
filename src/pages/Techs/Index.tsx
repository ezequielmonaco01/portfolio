import { useTranslation } from "react-i18next";
import ScrollingIcon from "../../assets/icons/scrollinIcon.png";
import { techs } from "../../constants/techs";

export const Index = () => {
  const { t } = useTranslation();
  return (
    <section
      id="techs"
      className="w-full h-screen flex flex-col justify-center snap-center p-4 md:p-[100px]"
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold my-4 md:my-7">
          {t("techs.title")}
        </h1>
        <h2 className="text-base md:text-xl my-2">{t("techs.description")}</h2>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-8 mt-4 md:mt-8 justify-center md:justify-start">
        {techs.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <img
              src={tech.icon}
              alt={tech.alt}
              className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] hover:scale-125 transition-transform"
            />
            <span className="text-xs md:text-sm mt-1 md:mt-2">{tech.name}</span>
          </div>
        ))}
      </div>
      <h2 className="text-base md:text-xl mt-4 md:mt-8">
        {t("techs.description2")}
      </h2>
      <div className="w-full md:w-[550px] flex my-6 md:my-[100px] gap-2 md:gap-3 flex justify-center self-center">
        <div>
          <h2 className="text-lg md:text-2xl">{t("scroll.message2")}</h2>
          <hr className="mt-3" />
        </div>
        <img
          src={ScrollingIcon}
          alt="scrollingIcon"
          className="w-8 md:w-[50px]"
        />
      </div>
    </section>
  );
};
