import { TbWorld } from "react-icons/tb";
import { IoMdCode } from "react-icons/io";
import { FiSmartphone } from "react-icons/fi";
import { GrStorage } from "react-icons/gr";
import { ThemedTitle } from "./ThemedTitle";


export const About = () => {
  return (
    <section className="py-24" id="about">
      
      <ThemedTitle title="Sobre Mi" subTitle="Soy un desarrollador web junior con una gran pasion por la tecnologia y el aprendizaje continuo."/>

      <div className="mx-auto mt-12 max-w-4xl">
        <div className="rounded-lg border shadow-2xl">
          <div className="p-6">
              <div className="grid gap-6 lg:grid-cols-2">

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Mi Historia</h3>
                  <p className="text-gray-600">
                    Mi camino en el desarrollo web comenzó en 2023,
                    motivado por la curiosidad y la pasión por construir soluciones digitales que generen impacto real en la vida de las personas.
                    Desde entonces, he dedicado tiempo a aprender,
                    experimentar y desarrollar proyectos que me han permitido crecer tanto profesional como personalmente.
                    <br />
                    Actualmente estoy finalizando la carrera de Analista de Sistemas en la Facultad Autónoma de Entre Ríos,
                    donde me encuentro en el último año de cursado. 
                    Paralelamente, complemento mi formación académica con cursos especializados en frontend y backend, incluyendo tecnologías como React, 
                    React Native, Node.js, Express y MongoDB.
                    <br />
                    Me especializo en el desarrollo frontend con React y Next.js, creando interfaces modernas, accesibles y responsivas.
                    También tengo experiencia en desarrollo backend con Node.js y Express,
                    integrando APIs y manejando bases de datos NoSQL como MongoDB.
                    <br />
                    A lo largo de estos años he desarrollado proyectos reales para empresas locales,
                    lo que me ha permitido aplicar mis conocimientos en entornos productivos,
                    trabajar en equipo y adaptarme a las necesidades concretas de cada cliente.
                    <br />
                    Soy una persona comprometida con el aprendizaje continuo,la calidad del código y la mejora constante.
                    Siempre estoy en búsqueda de nuevos desafíos que me permitan seguir creciendo como Desarrollador Full Stack.
                  </p>
                  <p className="text-gray-600">
                    Me especializo en el desarrollo frontend con React y Next.js, pero también tengo experiencia en backend con Node.js y bases de datos.
                    Siempre estoy buscando nuevos desafíos y oportunidades para aprender.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Lo que me motiva</h3>
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
