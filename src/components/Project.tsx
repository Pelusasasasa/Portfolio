import { ProjectCard } from "./ProjectCard"
import { ThemedTitle } from "./ThemedTitle"

export const Project = () => {
  return (
    <section id="project" className="py-24">

        <ThemedTitle title="Mis Proyectos" subTitle="Una seleccion de mis proyectos que he desarrollado para demostrar mis habilidades"/>

        <div className="mx-auto mt-12 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <ProjectCard demo titulo="E-ComerceApp" descripcion="Una aplicación de comercio electrónico completa con carrito de compras, autenticación de usuarios y pasarela de pagos." tecnologias={['React', 'Node.js', 'MongoDB']} github="asd"/>
                <ProjectCard demo titulo="E-ComerceApp" descripcion="Una aplicación de comercio electrónico completa con carrito de compras, autenticación de usuarios y pasarela de pagos." tecnologias={['React', 'Node.js', 'MongoDB']} github="asd"/>
                <ProjectCard demo titulo="E-ComerceApp" descripcion="Una aplicación de comercio electrónico completa con carrito de compras, autenticación de usuarios y pasarela de pagos." tecnologias={['React', 'Node.js', 'MongoDB']} github="asd"/>
                <ProjectCard demo titulo="E-ComerceApp" descripcion="Una aplicación de comercio electrónico completa con carrito de compras, autenticación de usuarios y pasarela de pagos." tecnologias={['React', 'Node.js', 'MongoDB']} github="asd"/>
            </div>
        </div>
    </section>
  )
}
