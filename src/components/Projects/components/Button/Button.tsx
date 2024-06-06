interface Props {
    text: string
}

export const Button = (props: Props) => {
  return (
    <button 
        className='p-3 h-[50px] w-[150px] bg-chip-color border border-chip-border-color rounded-2xl'
    >
        {props.text}
    </button>
  )
}
