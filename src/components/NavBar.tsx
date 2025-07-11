import { BsDownload } from "react-icons/bs";
import { IoCodeSharp } from "react-icons/io5";


export const NavBar = () => {
  return (
    <div className="p-5 flex justify-between items-center border-b border-gray-400">
        <div className="flex gap-5 items-center">
            <div className="flex gap-4 items-center">
                <IoCodeSharp size={25}/>
                <p className="text-xl font-medium">AL</p>
            </div>
            <nav className="flex gap-4">
                <a href="#sobreMi" className="cursor-pointer hover:text-gray-400">Sobre Mi</a>
                <a href="#habilidade" className="cursor-pointer hover:text-gray-400">Habilidades</a>
                <a href="#proyecto" className="cursor-pointer hover:text-gray-400">Proyectos</a>
                <a href="#contacto" className="cursor-pointer hover:text-gray-400">Contacto</a>
            </nav>
        </div>

        <button className="items-center flex gap-5 border border-gray-300 px-2 py-1 rounded-sm hover:bg-gray-200 cursor-pointer">
            <BsDownload/>
            <p>CV</p>
        </button>
    </div>
  )
}
