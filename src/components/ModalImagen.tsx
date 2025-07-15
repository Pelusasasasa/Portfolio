import { IoClose } from "react-icons/io5";

interface Props {
    src: string;
    setModal: (arg: boolean) => void;
}

export const ModalImagen = ({src, setModal}: Props) => {

    const closeModal = () => {
        setModal(false);
    }

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
        <div className="relative max-w-4xl w-full px-4">
            <button onClick={closeModal} className="absolute top-2 right-1 bg-gray-500 rounded-full text-white text-3xl hover:text-red-400 cursor-pointer">
                <IoClose/>
            </button>
            <img className="w-full max-h-[90vh] object-contain rounded" src={src} alt="" />
        </div>
    </div>
  )
}
