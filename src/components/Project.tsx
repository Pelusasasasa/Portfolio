import { ProjectCard } from "./ProjectCard"
import { ThemedTitle } from "./ThemedTitle"

export const Project = () => {
  return (
    <section id="project" className="py-24">

        <ThemedTitle title="Mis Proyectos" subTitle="Una seleccion de mis proyectos que he desarrollado para demostrar mis habilidades"/>

        <div className="mx-auto mt-12 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <ProjectCard img="/src/assets/MovilApp.jpg" titulo="Movil App" descripcion="Una aplicacion Creada con React Native para consultar datos de los productos en una base de datos con un buscador" tecnologias={['React Native', 'Nativewind', 'Redux']} github="https://github.com/Pelusasasasa/Electro-Avenida/tree/main/movil"/>
                <ProjectCard img="/src/assets/Rotiseria.webp" titulo="Rotiseria App" descripcion="Una aplicacion para una rotiseria local para la toma de pedidos dentro de la red, con un carrito" tecnologias={['React Native', 'Redux']} github="https://github.com/Pelusasasasa/RotiseriaDesktop/tree/main/appMovil"/>
                <ProjectCard img="/src/assets/Comercio.png" titulo="Comercio Venta Desktop (En Proceso)" descripcion="Una aplicación de escritorio para comerco, para el manejo de stock, cuenta corriente, ventas y facturacion" tecnologias={['React', 'Electron.Js', 'TailWindCss', 'Redux']} github="asd"/>
                <ProjectCard demo titulo="E-ComerceApp" descripcion="Una aplicación de comercio electrónico completa con carrito de compras, autenticación de usuarios y pasarela de pagos." tecnologias={['React', 'Node.js', 'MongoDB']} github="asd"/>
            </div>
        </div>
    </section>
  )
}
