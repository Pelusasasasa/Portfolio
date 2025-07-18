import { ThemedTitle } from "./ThemedTitle"
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMongoose, SiElectron } from "react-icons/si";
import { BiLogoJavascript, BiLogoTypescript, BiLogoMongodb, BiLogoTailwindCss   } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";




const Skill = () => {
  return (
    <section id='skill' className='py-24 bg-gray/50 mx-2'>

        <ThemedTitle title="Habilidades Tecnicas" subTitle="Tecnologias y herramientas que domino y utilizo en mi proyecto"/>

        <div className='mx-auto text-center'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 md:mx-0'>

                <div className='border border-gray-300 rounded-lg p-5 mt-15'>
                    <h3 className='text-xl text-start font-semibold'>Frontend</h3>
                    <div className='flex flex-wrap gap-2 p-2'>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <FaHtml5 className='text-xl text-orange-500' />
                            <p className='text-xs font-semibold'>HTML</p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <FaCss3  className='text-xl text-blue-500' />
                            <p className='text-xs font-semibold'>Css3</p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <BiLogoJavascript className='text-xl text-yellow-500' />
                            <p className='text-xs font-semibold'>JavaScript</p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <FaReact className='text-xl text-blue-500' />
                            <p className='text-xs font-semibold'>React</p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <BiLogoTypescript className='text-xl text-blue-500' />
                            <p className='text-xs font-semibold'>TypeScript</p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <RiNextjsFill className='text-xl text-black-500' />
                            <p className='text-xs font-semibold'>Next</p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <SiElectron className='text-xl text-cyan-500' />
                            <p className='text-xs font-semibold'>Electron</p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <BiLogoTailwindCss className='text-xl text-cyan-500' />
                            <p className='text-xs font-semibold'>Tailwind Css</p>
                        </div>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-lg p-5 mt-15'>
                    <h3 className='text-start text-xl font-semibold'>Backend</h3>
                    <div className='flex flex-wrap gap-2 p-2'>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <FaNodeJs className='text-xl text-green-500' />
                            <p className='text-xs font-semibold'>Node.js</p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <SiExpress className='text-xl text-black-500' />
                            <p className='text-xs font-semibold'>Express</p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <SiExpress className='text-xl text-black-500' />
                            <p className='text-xs font-semibold'>Express-Validator</p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <SiMongoose className='text-xl text-green-500' />
                            <p className='text-xs font-semibold'>Mongoose</p>
                        </div>
                        
                    </div>
                </div>

                <div className='border border-gray-300 rounded-lg p-5 mt-15'>
                    <h3 className='text-start text-xl font-semibold'>Database</h3>
                    <div className='flex flex-wrap gap-2 p-2'>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <BiLogoMongodb className='text-xl text-green-500' />
                            <p className='text-xs font-semibold'>Mongo DB</p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <BiLogoMongodb className='text-xl text-green-500' />
                            <p className='text-xs font-semibold'>Mongo DB Atlas</p>
                        </div>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-lg p-5 mt-15'>
                    <h3 className='text-start text-xl font-semibold'>Tools</h3>
                    <div className='flex flex-wrap gap-2 p-2'>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <FaGitAlt  className='text-xl text-red-500' />
                            <p className='text-xs font-semibold'>Git</p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <FaGithub className='text-xl text-black-500' />
                            <p className='text-xs font-semibold'>Git Hub</p>
                        </div>
                        <div className="flex gap-2 bg-gray-200 px-2.5 py-0.5 border-gray-200 rounded-full  items-center border">
                            <VscVscode className='text-xl text-blue-500' />
                            <p className='text-xs font-semibold'>Vs Code</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill