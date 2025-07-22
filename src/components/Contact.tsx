import { CgMail } from 'react-icons/cg'
import { CiInstagram, CiLinkedin  } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'
import { ThemedTitle } from './ThemedTitle'
import { FaWhatsapp } from 'react-icons/fa'

export const Contact = () => {
    const text = 'Hola%20Agustín,%20vi%20tu%20portfolio%20y%20quiero%20contactarte para trabajar juntos'
    const urlWSAP = `https://wa.me/543456445977?text=${text}`

  return (
    <div className='mb-25' id='contact'>
        <ThemedTitle title='¡Trabajemos Juntos!' subTitle='Estoy buscando oportunidades para crecer como desarrollador. ¡No dudes en contactarme!'/>

        <div className='mx-auto mt-12 max-w-2xl'>
            <div className='border border-gray-300 rounded-lg'>

                <div className='flex gap-5 p-5 border-b border-gray-300 mx-5 flex-col md:flex-row'>
                    <div>
                        <h3 className='text-xl font-semibold'>Informacion de Contacto</h3>
                        <div className='flex gap-2 items-center mt-5 flex-col sm:flex-row'>
                            <CgMail size={25} className='text-gray-800'/>
                            <p className='text-lg'>agustinlorenzatto@outlook.com</p>
                        </div>
                        <div className='flex gap-2  items-center flex-col sm:flex-row mt-2 '>
                            <CiLinkedin size={25} className='text-gray-800'/>
                            <a className='text-lg' href='https://www.linkedin.com/in/agustin-lorenzatto-74854b357/' target='_blank'>linkedin</a>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold'>Redes Sociales</h3>

                        <div className='flex gap-5 mt-5'>
                            <a href="https://github.com/Pelusasasasa" target='_blank'>
                                <FiGithub className='border border-gray-300 rounded-lg p-2 text-gray-800 cursor-pointer hover:bg-gray-300/50' size={40}/>
                            </a>
                            <a href="https://www.linkedin.com/in/agustin-lorenzatto-74854b357/" target='_blank'>
                                <CiLinkedin className='border border-gray-300 rounded-lg p-2 text-gray-800 cursor-pointer hover:bg-gray-300/50' size={40}/>
                            </a>
                            <a href='https://www.instagram.com/pelusaal' target='_blank'>
                                <CiInstagram  className='border border-gray-300 rounded-lg p-2 text-gray-800 cursor-pointer hover:bg-gray-300/50' size={40}/>
                            </a>
                            <a href={urlWSAP} target='_blank'>
                                <FaWhatsapp  className='border border-gray-300 rounded-lg p-2 text-gray-800 cursor-pointer hover:bg-gray-300/50' size={40}/>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className='flex justify-center my-5'>
                    <button className='border rounded-lg bg-black/90 hover:bg-black/80 cursor-pointer flex items-center px-5 gap-5 py-2'>
                        <CgMail className='text-white' size={20}/>
                        <a href='mailto:agustinlorenzatto@outlook.com' className='text-white'>Enviar Mensaje</a>
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}
