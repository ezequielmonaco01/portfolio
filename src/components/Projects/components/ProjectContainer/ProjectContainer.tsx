import ReactNativeIcon from '../../../../assets/icons/reactNativeIcon.png'
import TypescriptIcon from '../../../../assets/icons/typeScriptIcon.png'
import FirebaseIcon from '../../../../assets/icons/firebaseIcon.png'

export const ProjectContainer = () => {
  return (
    <div className="w-[300px] h-[300px] flex flex-col justify-center items-center gap-3">
        <div className='w-[250px] h-[250px] bg-chip-color'>
            <img src="" alt="" />
        </div>
        <div className='flex flex-col w-[300px] h-[50px] gap-3'>
            <h1 className='text-center text-xl font-bold'>App Mobile</h1>
            <div className='flex justify-evenly items-center'>
                <img src={ReactNativeIcon} alt="ReactNativeIcon" className='max-w-[45px] max-h-[30px]' />
                <img src={TypescriptIcon} alt="TypeScriptIcon" className='max-w-[35px] max-h-[30px]' />
                <img src={FirebaseIcon} alt="FirebaseIcon" className='max-w-[45px] max-h-[30px]'/>
            </div>
        </div>
    </div>
  )
}
