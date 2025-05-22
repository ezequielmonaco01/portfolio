import { useTranslation } from "react-i18next";

export const Index = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row justify-center items-center h-screen snap-center p-4 md:p-[100px] gap-5 md:gap-10"
    >
      <div className="text-center md:text-left">
        <h1 className="font-bold text-3xl md:text-5xl my-4 md:my-7">
          {t("aboutme.title")}
        </h1>
        <h2 className="text-base md:text-xl">{t("aboutme.description")}</h2>
      </div>
      <img
        src="/images/aboutMeImage.png"
        alt="aboutMeImage"
        className="w-[120px] md:w-[300px]"
      />
    </section>
  );
};
