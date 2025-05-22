import { links } from "../../constants/links";
import { ProjectContainer } from "../../components/ProjectContainer";
import { useTranslation } from "react-i18next";

export const Index = () => {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="flex justify-center items-center flex-col w-full h-screen snap-center p-4 md:p-[100px]"
    >
      <div className="w-full">
        <h1 className="text-3xl md:text-5xl font-bold">
          {t("projects.title")}
        </h1>
        <p className="text-base md:text-xl my-4 md:my-7">
          {t("projects.description")}
          <a
            href={links.githubRepositories}
            target="_blank"
            className="underline"
          >
            {t("projects.linkWord")}
          </a>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 my-4 md:my-9 overflow-y-auto md:overflow-visible max-h-[60vh] md:max-h-none">
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
      </div>
    </section>
  );
};
