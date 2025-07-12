import { ThemedTitle } from "./ThemedTitle"

const Skill = () => {
  return (
    <section id='skill' className='py-24 bg-gray/50'>

        <ThemedTitle title="Habilidades Tecnicas" subTitle="Tecnologias y herramientas que domino y utilizo en mi proyecto"/>

        <div className='mx-auto max-w-3xl text-center'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

                <div className='border border-gray-300 rounded-lg p-5 shadow-2xl mt-15'>
                    <h3 className='text-xl font-semibold'>Frontend</h3>
                    <div className='flex flex-wrap gap-2 p-2'>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>HTML5</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Css3</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Javascript</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>React</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>TypeScript</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Next.Js</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Tailwind Css</p>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-lg p-5 shadow-2xl mt-15'>
                    <h3 className='text-xl font-semibold'>Backend</h3>
                    <div className='flex flex-wrap gap-2 p-2'>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Node.js</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Express</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Express-validator</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Mongoose</p>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-lg p-5 shadow-2xl mt-15'>
                    <h3 className='text-xl font-semibold'>Database</h3>
                    <div className='flex flex-wrap gap-2 p-2'>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>MongoDB</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>MongoDB Atlas</p>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-lg p-5 shadow-2xl mt-15'>
                    <h3 className='text-xl font-semibold'>Tools</h3>
                    <div className='flex flex-wrap gap-2 p-2'>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Git</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Git Hub</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Vs Code</p>
                    </div>
                </div>


            </div>
        </div>
    </section>
  )
}

export default Skill