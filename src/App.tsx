import "./index.css";

import { Index as Header } from "./pages/Home/Index";
import { Index as AboutMe } from "./pages/AboutMe/Index";
import { Index as Techs } from "./pages/Techs/Index";
import { Index as Projects } from "./pages/Projects/Index";
import { Index as Contact } from "./pages/Contact/Index";
import { NavigationBar } from "./components/NavigationBar";
import { ThemeAndLanguageSelector } from "./components/ThemeAndLanguageSelector";

export const App = () => {
  return (
    <div className="w-full h-screen snap-y snap-mandatory relative overflow-auto bg-black overscroll-none">
      <NavigationBar />
      <Header />
      <AboutMe />
      <Techs />
      <Projects />
      <Contact />
      <ThemeAndLanguageSelector />
    </div>
  );
};
