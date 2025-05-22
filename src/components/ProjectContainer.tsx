export const ProjectContainer = () => {
  return (
    <div className="w-[200px] md:w-[300px] h-auto md:h-[300px] flex flex-col justify-center items-center gap-2 md:gap-3">
      <div className="w-[100px] md:w-[250px] h-[100px] md:h-[250px] bg-chip-color border">
        <img src="" alt="" />
      </div>
      <div className="flex flex-col w-full md:w-[300px] h-auto md:h-[50px] gap-2 md:gap-3">
        <h1 className="text-center text-lg md:text-xl font-bold">App Mobile</h1>
        <div className="flex justify-evenly items-center">
          <img
            src="/icons/reactNativeIcon.png"
            alt="ReactNativeIcon"
            className="max-w-[35px] md:max-w-[45px] max-h-[25px] md:max-h-[30px]"
          />
          <img
            src="/icons/typeScriptIcon.png"
            alt="TypeScriptIcon"
            className="max-w-[30px] md:max-w-[35px] max-h-[25px] md:max-h-[30px]"
          />
          <img
            src="/icons/firebaseIcon.png"
            alt="FirebaseIcon"
            className="max-w-[35px] md:max-w-[45px] max-h-[25px] md:max-h-[30px]"
          />
        </div>
      </div>
    </div>
  );
};
