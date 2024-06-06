import { Button } from "./components/Button/Button"
import { ProjectContainer } from "./components/ProjectContainer/ProjectContainer"

export const Index = () => {
  return (
    <section id="projects" className="flex justify-center items-center flex-col p-[100px] w-full h-screen">
        <div className="w-full">
            <h1 className="text-5xl font-bold">Proyectos</h1>
            <p className="text-xl my-7">
                Aca podes ver algunos de mis proyectos realizados, te dejo tres de los mas destacados, de todas formas, podes encontrar todos aca: 
            </p>
        </div>
        <Button text="Explorar"/>
        <div className="w-full flex justify-between my-9">
          <ProjectContainer/>
          <ProjectContainer/>
          <ProjectContainer/>
        </div>
    </section>
  )
}
