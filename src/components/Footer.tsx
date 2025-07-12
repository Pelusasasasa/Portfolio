import { BiCode } from 'react-icons/bi'
import { CiLinkedin } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'

export const Footer = () => {
  return (
    
    <div className='flex justify-between border-t border-gray-300 py-5'>
        <div className='flex gap-2 items-center'>
            <BiCode size={20}/>
            <p className='text-gray-600'>© 2025 Agustin Lorenzatto. Todos los derechos reservados</p>
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
