import { strings } from "../../../../constants/strings"

export const TitleContainer = () => {
  return (
    <div className="w-full mb-[50px]">
        <h1 className="font-bold text-9xl">{strings.header.title}</h1>
        <div>
          <h3 className="text-4xl mt-5">
            {strings.header.subtitle}
          </h3>
          <h4 className="text-3xl">{strings.header.platform}</h4>
        </div>
    </div>
  )
}
