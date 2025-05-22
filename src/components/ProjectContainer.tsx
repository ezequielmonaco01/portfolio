import ReactNativeIcon from "../assets/icons/reactNativeIcon.png";
import TypescriptIcon from "../assets/icons/typeScriptIcon.png";
import FirebaseIcon from "../assets/icons/firebaseIcon.png";

export const ProjectContainer = () => {
  return (
    <div className="w-[250px] md:w-[300px] h-auto md:h-[300px] flex flex-col justify-center items-center gap-2 md:gap-3">
      <div className="w-[200px] md:w-[250px] h-[200px] md:h-[250px] bg-chip-color border">
        <img src="" alt="" />
      </div>
      <div className="flex flex-col w-full md:w-[300px] h-auto md:h-[50px] gap-2 md:gap-3">
        <h1 className="text-center text-lg md:text-xl font-bold">App Mobile</h1>
        <div className="flex justify-evenly items-center">
          <img
            src={ReactNativeIcon}
            alt="ReactNativeIcon"
            className="max-w-[35px] md:max-w-[45px] max-h-[25px] md:max-h-[30px]"
          />
          <img
            src={TypescriptIcon}
            alt="TypeScriptIcon"
            className="max-w-[30px] md:max-w-[35px] max-h-[25px] md:max-h-[30px]"
          />
          <img
            src={FirebaseIcon}
            alt="FirebaseIcon"
            className="max-w-[35px] md:max-w-[45px] max-h-[25px] md:max-h-[30px]"
          />
        </div>
      </div>
    </div>
  );
};
