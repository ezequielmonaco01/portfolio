import { links } from '../../constants/links'

import LinkedinIcon from '../../assets/icons/linkedinIcon.png'
import GithubIcon from '../../assets/icons/githubIcon.png'

export const Index = () => {
  return (
    <footer id='contact' className='flex justify-center items-center flex-col p-[85px] w-full h-screen'>
        <div className='w-full'>
            <h1 className='text-5xl font-bold text-center'>
                Contacto
            </h1>
            <h2 className='mt-7 text-2xl text-center'>
                <span>Que harias si tuvieses a un experto en Front End a tu alcance? </span> 
            </h2>
            <h2 className='mt-7 text-2xl text-center'>
                Si me necesitas para cualquier proyecto, o simplemente queres saludarme.
            </h2>
            <h2 className='font-bold text-2xl text-center'>
                Podes hacerlo aca:
            </h2>
        </div>
        <div className='flex mt-10 flex-col gap-10 justify-center items-center'>
            <label htmlFor="" className='font-bold text-xl'>monacoezequiel@gmail.com</label>
            <div className='flex w-[125px] justify-between items-center'>
                <div>
                    <a href={links.linkedin} target='_blank'>
                        <img src={LinkedinIcon} width={'40px'}/>
                    </a>
                </div>
                <div>
                    <a href={links.github} target='_blank'>
                        <img src={GithubIcon} width={'40px'}/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}
