

function Navbar() {
  return (
    <nav className=" bg-white pt-4 px-4">
        
        <ul className="flex justify-between  text-black px-5">
            <div>
                <li >
                    <a href="/" className="site-title font-extrabold text-black text-6xl">C.I.E.</a>
                </li>
                <li>
                <a href="/" className="font-light text-black">consentimiento informado electronico</a>
                </li>
            </div>
            
            <div className="flex m-5 pt-5 text-xl ">
                <li className="px-4 mr-8 transition ease-in-out delay-150 bg-slate-900 text-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-300 rounded-md">
                    <a href="">Inicio</a>
                </li>
                <li className="px-4 transition ease-in-out delay-150 bg-slate-900 text-white hover:-translate-y-1 hover:scale-110 hover:hover:bg-gray-600duration-300 rounded-md">
                    <a href="">Firma</a>
                </li>
            </div>
            
        </ul>

        <a href="">Home</a>



    </nav>
  )
}

export default Navbar