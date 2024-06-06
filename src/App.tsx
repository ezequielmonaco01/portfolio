import "./index.css"

import { Index as Header} from "./components/Header/Index"
import { Index as AboutMe} from "./components/AboutMe/Index"
import { Index as Techs} from "./components/Techs/Index"
import { Index as Projects} from "./components/Projects/Index"
import { Index as WorkExperience} from "./components/WorkExperience/Index"
import { Index as Contact} from "./components/Contact/Index"
import { NavigationBar } from "./components/NavigationBar/NavigationBar"

export const App = () => {
  return (
    <div className="snap-y snap-mandatory relative w-full h-screen overflow-auto">
    <NavigationBar/>
      <div className="snap-center">
        <Header/>
      </div>
      <div className="snap-center">
        <AboutMe/>
      </div>
      <div className="snap-center">
        <Techs/>
      </div>
      <div className="snap-center">
        <Projects/>
      </div>
      <div className="snap-center">
        <Contact/>
      </div>
    </div>
  )
}
