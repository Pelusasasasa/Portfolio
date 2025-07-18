import { BiCode } from 'react-icons/bi'
import { CiLinkedin } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'

export const Footer = () => {
  return (
    
    <div className='flex flex-col md:flex-row items-center justify-between border-t border-gray-300 py-5'>
        <div className='flex gap-2 items-center flex-col md:flex-row mb-5'>
            <BiCode size={35}/>
            <p className='text-gray-600 w-sm md:w-full text-center'>© 2025 Agustin Lorenzatto. Todos los derechos reservados</p>
        </div>

        <div className='flex gap-2'>
            <a className='text-gray-600 hover:text-black' target='_blank' href="https://github.com/Pelusasasasa">
                <FiGithub size={25}/>
            </a>

            <a className='text-gray-600 hover:text-black' target='_blank' href="https://www.linkedin.com/in/agustin-lorenzatto-74854b357/">
                <CiLinkedin size={25}/>
            </a>
        </div>
    </div>

  )
}
