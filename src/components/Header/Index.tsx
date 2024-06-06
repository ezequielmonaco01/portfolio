import userImage from '../../assets/images/userImage.webp'
import { ButtonContainer } from './components/ButtonContainer/ButtonContainer'
import { ScrollMessage } from './components/ScrollMessageContainer/ScrollMessage'
import { TitleContainer } from './components/TitleContainer/TitleContainer'

export const Index = () => {
  return (
    <header id='header' className="w-full h-screen p-[85px] flex">
        <div className="w-[55%] pl-5">
            <TitleContainer/>
            <ButtonContainer />
            <ScrollMessage/>
        </div>
      <div className="w-[45%]">
        <div className="w-[500px] h-[550px] bg-white overflow-hidden ">
          <img src={userImage} className='object-cover w-full h-full'/>
        </div>
      </div>
    </header>
  )
}
