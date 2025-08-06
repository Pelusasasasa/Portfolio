import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ModalImagen } from "./ModalImagen";

interface Props {
    titulo: string;
    descripcion: string;
    tecnologias: string[];
    github: string;
    demo?: string;
    img?: string;
};

export const ProjectCard = ({titulo, img = '/assets/placeholder.svg' , descripcion, tecnologias, github, demo}: Props) => {
    const [modalImagen, setModalImagen] = useState<boolean>(false);

  return (
    <div className="border border-gray-300 rounded-lg flex flex-col">
        {modalImagen && <ModalImagen src={img} setModal={setModalImagen}/>}
        <div className="w-full aspect-video">
            <img src={img} alt="" onClick={() => setModalImagen(true)} className="w-full h-64 object-cover cursor-pointer"/>
        </div>

        <div className="p-5">
            <h3 className="text-2xl font-semibold">{titulo}</h3>    

            <p className="text-gray-600">{descripcion}</p>
        </div>

        <div className="flex gap-2 px-5">
            {tecnologias.map((tecnologia, index) => (
                <span className="inline-flex rounded-full border border-gray-400 text-xs px-3 py-1 font-semibold bg-gray-100" key={index}>{tecnologia}</span>
            ))}
        </div>

        <div className="flex gap-2 my-5 p-5  mt-auto">
            <button className="cursor-pointer py-1  border border-gray-300 hover:bg-gray-300/50 flex gap-5 rounded-lg items-center px-2">
                <FiGithub/>
                <a href={github} target="_blank" className="font-semibold">Codigo</a>
            </button>

            {
                demo && (
                    <button className="cursor-pointer py-1 border bg-black hover:bg-black/85 flex gap-5 items-center px-2 rounded-lg">
                        <FiExternalLink className="text-white"/>
                        <a href={demo} target="_blank" className="text-white">Demo</a>
                    </button>
                )
            }
        </div>
    </div>
  )
}