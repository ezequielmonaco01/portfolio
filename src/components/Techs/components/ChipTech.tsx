interface Props {
    text: string
}

export const ChipTech = (props: Props) => {
  return (
    <div className="h-[50px] px-8 py-1 bg-chip-color rounded-3xl border border-chip-border-color flex justify-center items-center">
        <h4 className="font-bold">{props.text}</h4>
    </div>
  )
}
