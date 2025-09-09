import { ProjectContainer } from "../../components/ProjectContainer";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

export const Index = () => {
  const { t } = useTranslation();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showRepositories, setShowRepositories] = useState(false);

  const handleFetchRepositories = async () => {
    if (repositories.length > 0) {
      setShowRepositories(!showRepositories);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://api.github.com/users/ezequielmonaco01/repos');
      const data = await response.json();
      setRepositories(data);
      setShowRepositories(true);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section
      id="projects"
      className="flex justify-center items-center flex-col w-full h-screen snap-center p-4 md:p-[100px]"
    >
      <div className="w-full">
        <h1 className="text-3xl md:text-5xl font-bold">
          {t("projects.title")}
        </h1>
        <h2 className="text-base md:text-xl my-4 md:my-7">
          {t("projects.description")}
          <button
            onClick={handleFetchRepositories}
            className="underline cursor-pointer transition-colors"
            disabled={isLoading}
          >
            {t("projects.linkWord")}
          </button>
        </h2>
      </div>

      <div className="w-full mb-8">
        {showRepositories && (
          <>
            <h3 className="text-2xl font-bold mb-4 text-black">
              {t("projects.repositoriesTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto">
              {repositories.map((repo) => (
                <div
                  key={repo.id}
                  className="bg-black border border-white p-4 hover:bg-gray-900 transition-colors"
                >
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    {repo.name}
                  </h4>
                  <p className="text-gray-300 text-sm mb-3 min-h-[3rem]">
                    {repo.description || "Sin descripción disponible"}
                  </p>
                  <div className="flex justify-between items-center">
                    {repo.language && (
                      <span className="text-xs bg-white text-black px-2 py-1 font-medium">
                        {repo.language}
                      </span>
                    )}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 text-sm font-medium transition-colors underline"
                    >
                      {t("projects.viewOnGithub")}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="w-full mb-8">
        {!showRepositories && (
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 overflow-y-auto md:overflow-visible max-h-[60vh] md:max-h-none">
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
          </div>
        )}
      </div>
    </section>
  );
};
