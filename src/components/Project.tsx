import { ProjectCard } from "./ProjectCard"
import { ThemedTitle } from "./ThemedTitle"

export const Project = () => {
  return (
    <section id="project" className="py-10">

        <ThemedTitle title="Mis Proyectos" subTitle="Una seleccion de mis proyectos que he desarrollado para demostrar mis habilidades"/>

        <div className="mx-auto mt-12 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <ProjectCard img="/assets/MovilApp.jpg" titulo="Movil App" descripcion="Una aplicacion Creada con React Native para consultar datos de los productos en una base de datos con un buscador" tecnologias={['React Native', 'Nativewind', 'Redux']} github="https://github.com/Pelusasasasa/Electro-Avenida/tree/main/movil"/>
                <ProjectCard img="/assets/Rotiseria.webp" titulo="Rotiseria App" descripcion="Una aplicacion para una rotiseria local para la toma de pedidos dentro de la red, con un carrito" tecnologias={['React Native', 'Redux']} github="https://github.com/Pelusasasasa/RotiseriaDesktop/tree/main/appMovil"/>
                <ProjectCard img="/assets/Comercio.png" titulo="Comercio Venta Desktop (En Proceso)" descripcion="Una aplicación de escritorio para comerco, para el manejo de stock, cuenta corriente, ventas y facturacion" tecnologias={['React', 'Electron.Js', 'TailWindCss', 'Redux']} github="asd"/>
                <ProjectCard img="/assets/Anclacentro.webp" titulo="Presentacion Web de Comercio" descripcion="Es una Presentacion Web para Un comercio local de venta de pinturas y materiales para la construccion en seco" tecnologias={['Next.js', 'TailwindCss']} github="https://github.com/Pelusasasasa/Anclaflex-web" demo='https://anclacentrochajari.com.ar'/>
            </div>
        </div>
    </section>
  )
}
