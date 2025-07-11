import React from 'react'

const Skill = () => {
  return (
    <section id='skill' className='py-24 bg-gray/50'>
        <div className='mx-auto max-w-3xl text-center'>
            <h3 className='lg:text-5xl sm:text-4xl font-bold text-3xl tracking-tighter'>Habilidades Tecnicas</h3>

            <p className='text-gray-600 mt-4 text-xl md:text-lg'>Tecnologias y herramientas que domino y utilizo en mi proyecto</p>
        </div>

        <div className='mx-auto max-w-3xl text-center'>
            <div className='grid md:grid-cols-4 gap-5'>

                <div className='border rounded-lg mt-15'>
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

                <div className='border rounded-lg mt-15'>
                    <h3 className='text-xl font-semibold'>Backend</h3>
                    <div className='flex flex-wrap gap-2 p-2'>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Node.js</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Express</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Express-validator</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>Mongoose</p>
                    </div>
                </div>

                <div className='border rounded-lg mt-15'>
                    <h3 className='text-xl font-semibold'>Database</h3>
                    <div className='flex flex-wrap gap-2 p-2'>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>MongoDB</p>
                        <p className='bg-gray-200 inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold border-gray-200 rounded-full'>MongoDB Atlas</p>
                    </div>
                </div>

                <div className='border rounded-lg mt-15'>
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