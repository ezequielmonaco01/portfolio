import { links } from "../../constants/links";
import { useTranslation } from "react-i18next";

export const Index = () => {
  const { t } = useTranslation();
  return (
    <header
      id="header"
      className="w-full h-screen grid md:grid-cols-2 grid-cols-1 snap-center p-4 md:p-[100px] flex justify-center items-center"
    >
      <div className="flex flex-col justify-center">
        <div className="w-full mb-4 md:mb-[50px]">
          <h1 className="font-bold text-4xl md:text-8xl">
            {t("header.title")}
          </h1>
          <div>
            <h3 className="text-2xl md:text-4xl mt-2 md:mt-5">
              {t("header.subtitle")}
            </h3>
            <h4 className="text-xl md:text-3xl">{t("header.platform")}</h4>
          </div>
        </div>

        <div className="flex gap-10 pt-5 md:pt-0">
          <div>
            <a href={links.linkedin} target="_blank">
              <img src="/icons/linkedinIcon.png" className="w-8 md:w-[40px]" />
            </a>
          </div>
          <div>
            <a href={links.github} target="_blank">
              <img src="/icons/githubIcon.png" className="w-8 md:w-[40px]" />
            </a>
          </div>
          <div>
            <a
              download="cvezequielmonaco.pdf"
              href="/cvezequielmonaco.pdf"
              className="w-[60px] md:w-[80px] h-full bg-white text-black font-bold rounded-md border flex justify-center items-center"
            >
              CV
              <img
                src="/icons/downloadIcon.png"
                alt="downloadIcon"
                className="max-w-[20px] md:max-w-[25px] bg-white pl-1"
              />
            </a>
          </div>
        </div>

        <div className="w-full md:w-[800px] flex gap-2 md:gap-3 pt-[50px]">
          <div>
            <h2 className="text-lg md:text-2xl">{t("scroll.message")}</h2>
            <hr className="mt-3" />
          </div>
          <div>
            <img
              src="/icons/scrollinIcon.png"
              alt="scrollingIcon"
              className="w-8 md:w-[50px]"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <img
          src="/images/userImage.webp"
          alt="Perfil"
          className="max-w-full max-h-[70vh] object-contain"
        />
      </div>
    </header>
  );
};
