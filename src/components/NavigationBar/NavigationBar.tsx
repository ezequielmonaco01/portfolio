
export const NavigationBar = () => {
  return (
    <nav className="fixed top-0 right-0 h-screen flex justify-center items-center ">
        <div className="border-r-[4px] border-white flex flex-col justify-center items-center ">
            <a href="#header" className="py-2 px-4 m-2 rounded hover:bg-gray-300">01</a>
            <a href="#about" className="py-2 px-4 m-2 rounded hover:bg-gray-300">02</a>
            <a href="#techs" className="py-2 px-4 m-2 rounded hover:bg-gray-300">03</a>
            <a href="#projects" className="py-2 px-4 m-2 rounded hover:bg-gray-300">04</a>
            <a href="#contact" className="py-2 px-4 m-2 rounded hover:bg-gray-300">05</a>
        </div>
    </nav>
  )
}
