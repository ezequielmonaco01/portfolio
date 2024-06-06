import ScrollingIcon from '../../assets/icons/scrollinIcon.png'
import { techs } from '../../constants/techs';
import { ChipTech } from './components/ChipTech';

export const Index = () => {
  return (
    <section id='techs' className='flex justify-center items-center flex-col p-[100px] w-full h-screen'>
        <div className='w-full'>
            <h1 className='text-5xl font-bold text-center'>
                Habilidades y experiencia con tecnologías
            </h1>
            <h2 className='text-xl text-center my-7'>
                Actualmente mi experiencia se basa en el desarrollo y diseño Front-End, estas son algunas de las tecnologías que logre dominar en mi camino: 
            </h2>
        </div>
        <div className='h-[200px] w-[70%] flex flex-wrap justify-center gap-6 my-8'>
            {techs.map((item, index) => (
                <ChipTech text={item} key={index}/>
            ))}
        </div>
        <div className='w-[550px] flex my-[50px] gap-3'>
            <div>
                <h2 className="text-2xl">
                    Segui scrolleando para ver los proyectos
                </h2>
                <hr className='mt-3'/>
            </div>
            <div>
                <img src={ScrollingIcon} alt="scrollingIcon" width={50}/>
            </div>
        </div>
    </section>
  )
}
