import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { IoCodeSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { MenuHambur } from "./MenuHambur";


export const NavBar = () => {

    const [menuHambur, setMenuHambur] = useState<boolean>(false);
  return (
    <div className="p-5 flex justify-between items-center border-b border-gray-400 sticky w-full top-0 z-50 bg-white">
        <div className="flex gap-5 items-center">
            <div className="flex gap-4 items-center">
                <IoCodeSharp size={25}/>
                <p className="text-xl font-medium">AL</p>
            </div>
            <nav className="gap-4 md:flex hidden">
                <a href="#about" className="cursor-pointer hover:text-gray-400">Sobre Mi</a>
                <a href="#skill" className="cursor-pointer hover:text-gray-400">Habilidades</a>
                <a href="#project" className="cursor-pointer hover:text-gray-400">Proyectos</a>
                <a href="#contact" className="cursor-pointer hover:text-gray-400">Contacto</a>
            </nav>
        </div>

        <div className="block md:hidden mr-5">
            
            <div className="border border-gray-300 p-2 rounded-sm cursor-pointer hover:bg-gray-200">
                <MdMenu size={20} onClick={() => setMenuHambur(!menuHambur)}/>
            </div>

            {menuHambur && <div className="fixed inset-0 bg-black/80"></div>}
            {menuHambur && <MenuHambur setMenuHambur={setMenuHambur}/>}
        </div>

        <a href="/CV_Agustin_Lorenzatto.pdf" download className="items-center md:flex hidden gap-5 border border-gray-300 px-2 py-1 rounded-sm hover:bg-gray-200 cursor-pointer">
            <BsDownload/>
            <p>CV</p>
        </a>
    </div>
  )
}
