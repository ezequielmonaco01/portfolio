import LinkedinIcon from '../../../../assets/icons/linkedinIcon.png'
import GithubIcon from '../../../../assets/icons/githubIcon.png'
import DownloadIcon from '../../../../assets/icons/downloadIcon.png'
import { links } from '../../../../constants/links'

export const ButtonContainer = () => {

  return (
    <section className='width w-1/3 flex justify-between'>
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
        <div>
            <button className='w-[80px] h-full bg-white text-black font-bold rounded-md border flex justify-center items-center' >
                CV
                <img src={DownloadIcon} alt="downloadIcon" className='w-[25px] bg-white'/>
            </button>
        </div>
    </section>
  )
}
