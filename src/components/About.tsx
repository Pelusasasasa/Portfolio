import { TbWorld } from "react-icons/tb";
import { IoMdCode } from "react-icons/io";
import { FiSmartphone } from "react-icons/fi";
import { GrStorage } from "react-icons/gr";


export const About = () => {
  return (
    <section className="py-24" id="about">
      <div className="flex flex-col items-center">
        <h2 className="md:text-5xl sm:text-4xl text-3xl tracking-tighter font-bold">Sobre Mi</h2>

        <p className="text-gray-600 text-xl mt-4 md:text-lg">Soy un desarrollador web junior con una gran pasion por la tecnologia y el aprendizaje continuo.</p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <div className="rounded-lg border shadow-2xl">
          <div className="p-6">
              <div className="grid gap-6 lg:grid-cols-2">

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Mi Historia</h3>
                  <p className="text-gray-600">
                    Comencé mi viaje en el desarrollo web hace 2 años,
                     fascinado por la posibilidad de crear soluciones digitales que impacten positivamente en la vida de las personas.
                     Desde entonces, he estado aprendiendo y construyendo proyectos que me permiten crecer como desarrollador.
                  </p>
                  <p className="text-gray-600">
                    Me especializo en el desarrollo frontend con React y Next.js, pero también tengo experiencia en backend con Node.js y bases de datos.
                    Siempre estoy buscando nuevos desafíos y oportunidades para aprender.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3>Lo que me motiva</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex gap-2 items-center">
                        <TbWorld color="black"/>
                        <p className="text-gray-600">Crear Experencias web intuitivas y accesibles</p>
                    </li>

                    <li className="flex gap-2 items-center">
                        <IoMdCode color="black"/>
                        <p className="text-gray-600">Escribir codigo limpio y mantenible</p>
                    </li>

                    <li className="flex gap-2 items-center">
                        <FiSmartphone color="black"/>
                        <p className="text-gray-600">Desarrollar aplicaciones responsive</p>
                    </li>

                    <li className="flex gap-2 items-center">
                        <GrStorage color="black"/>
                        <p className="text-gray-600">Aprender nuevas tecnologias constantemente</p>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}
