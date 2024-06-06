import AboutMeImage from '../../assets/images/aboutMeImage.png'

export const Index = () => {
  return (
    <section id='about' className='flex justify-center items-center h-screen p-[100px]'> 
        <div className='w-full h-[400px] flex gap-7'>
            <img src={AboutMeImage} alt="aboutMeImage" />
            <div>
                <h1 className='font-bold text-5xl mb-7'>Sobre Mí</h1>
                <h2 className='text-xl'>
                    Nací en San Vicente un pueblo del Sur de Buenos Aires, actualmente vivo en Lanús. 
                    Tengo 22 años, desde los 16 que desarrollo. En mi día a día colaboro como desarrollador Front-End en Adviters.
                    En un futuro busco ser desarrollador autónomo, por lo mismo busco una mejora constante en mi stack de tecnologías.
                </h2>
            </div>
        </div>
    </section>
  )
}
