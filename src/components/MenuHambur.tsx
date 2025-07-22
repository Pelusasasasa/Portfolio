
import { BsDownload } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { CiMail } from 'react-icons/ci'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin} from 'react-icons/fi'
import { IoCodeSharp } from 'react-icons/io5'

interface Props {
    setMenuHambur: (arg: boolean) => void
}

export const MenuHambur = ({ setMenuHambur }:Props) => {
    const text = 'Hola%20Agustín,%20vi%20tu%20portfolio%20y%20quiero%20contactarte para trabajar juntos'
    const urlWSAP = `https://wa.me/543456445977?text=${text}`
return (
    <div className="flex flex-col absolute z-50 top-0 right-0 bg-white px-2 mt-5 min-h-screen">
        <div className="text-xl font-medium flex gap-5 py-5 px-3 border-b-gray-300 border-b">
            <IoCodeSharp size={25}/>
            <p className="text-xl font-bold">Agustin Lorenzatto</p> 
            <CgClose  onClick={() => setMenuHambur(false)} className="cursor-pointer text-gray-500 hover:text-black"/>
        </div>

        <div className="flex flex-col gap-5 py-5 px-2 border-b border-gray-300">
            <a href="#about" onClick={() => setMenuHambur(false)} className="cursor-pointer font-semibold text-xl hover:text-gray-400">Sobre Mi</a>
            <a href="#skill" onClick={() => setMenuHambur(false)} className="cursor-pointer font-semibold text-xl hover:text-gray-400">Habilidades</a>
            <a href="#project" onClick={() => setMenuHambur(false)} className="cursor-pointer font-semibold text-xl hover:text-gray-400">Proyectos</a>
            <a href="#contact" onClick={() => setMenuHambur(false)} className="cursor-pointer font-semibold text-xl hover:text-gray-400">Contacto</a>
        </div>
        <div className="flex bg-black rounded-lg mx-auto mt-5 mb-5 px-10 py-2 gap-5 items-center hover:opacity-70 hover:cursor-pointer">
            <BsDownload className="text-white hover:cursor-pointer" size={20}/>
            <a download href='/CV_Agustin_Lorenzatto.pdf' className="text-white hover:cursor-pointer">Descargar CV</a>
        </div>

        <div className='px-5'>
            <p className='text-gray-500 pb-5'>Sigueme en: </p>
            <div className='flex gap-5'>
                <a href='https://github.com/Pelusasasasa' target='_blank' className='cursor-pointer hover:bg-gray-200 p-2 border border-gray-300 rounded-sm'>
                    <FiGithub size={20}/>
                </a>
                <a href='https://www.linkedin.com/in/agustin-lorenzatto-74854b357/' target='_blank' className='cursor-pointer hover:bg-gray-200 p-2 border border-gray-300 rounded-sm'>
                    <FiLinkedin size={20} color='blue'/>
                </a>
                <a href='mailto:agustinlorenzatto@outlook.com' target='_blank' className='cursor-pointer hover:bg-gray-200 p-2 border border-gray-300 rounded-sm'>
                    <CiMail size={20} color='gray'/>
                </a>
                <a href={urlWSAP} target='_blank' className='cursor-pointer hover:bg-gray-200 p-2 border border-gray-300 rounded-sm'>
                    <FaWhatsapp size={20} color='green'/>
                </a>
            </div>
        </div>
    </div>
)
}
