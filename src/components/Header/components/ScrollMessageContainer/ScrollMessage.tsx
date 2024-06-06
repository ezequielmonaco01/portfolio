import ScrollingIcon from '../../../../assets/icons/scrollinIcon.png'

export const ScrollMessage = () => {
  return (
    <div className='w-[310px] flex my-[50px] gap-3'>
        <div>
        <h2 className="text-2xl">
            Scroll para continuar
        </h2>
        <hr className='mt-3'/>
        </div>
        <div>
            <img src={ScrollingIcon} alt="scrollingIcon" width={50}/>
        </div>
    </div>
  )
}
