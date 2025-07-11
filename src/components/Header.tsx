import { CiMail, CiLocationOn, CiCalendar } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";


export const Header = () => {
  return (
    <header className="grid grid-cols-2 px-10 py-24 md:py-32">

      <div className="flex flex-col gap-2 space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Hola, Soy Agustin Lorenzatto</h1>
          <p className="text-gray-600  text-xl">
            Desarrollador Web Junior apasionado por crear experiencias digitales increíbles. Especializado en React, Next.js y tecnologías modernas.</p>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-black text-white hover:bg-black/70 cursor-pointer">
            <CiMail size={20}/>
            <a href="#contact">Contactame</a>
          </button>

          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg border-gray-300 hover:bg-gray-300/70 cursor-pointer">
            <FiGithub/>
            <a href="https://github.com/Pelusasasasa" target="_blank">Ver GitHub</a>
          </button>
        </div>

        <div className="flex gap-5">
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-gray-600"/>
            <p className="text-gray-600">Argentina</p>
          </div>

          <div className="flex gap-2 items-center">
            <CiCalendar className="text-gray-600"/>
            <p className="text-gray-600">Disponible para Trabajar</p>
          </div>
        </div>

      </div>

      <div className="flex justify-center ">
        <div className="relative">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br flex justify-center items-center">
            <img src="/src/assets/Me.jpeg" alt="Imagen" className="rounded-full" />
          </div>
        </div>
      </div>
      
    </header>
  )
}
