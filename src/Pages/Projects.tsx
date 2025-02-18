import { TransparentContainer } from '../Components';
import {
    buala, sniffs, endft, magsecure, mochigo, macjach,
    react, django, flutter, flask, node, html5, css as css3
} from '../assets/img';

const projects = [
    {
        img: buala,
        title: "Buala Travel",
        description: "Desarrollo de página web de Buala Travel con tecnologías: ",
        technologies: [react, django],
        link: "https://bualatravel.com/"
    },
    {
        img: sniffs,
        title: "Sniffs",
        description: "Desarrollo de página web de Sniffs con tecnologías: ",
        technologies: [react, django],
        link: "https://sniffs.vip/"
    },
    {
        img: endft,
        title: "Endft",
        description: "Plataforma de desarrollo html y css para aprendizaje avanzado",
        technologies: [html5, css3],
        link: "https://jossuejativa.github.io/Front-end-dev/"
    },
    {
        img: magsecure,
        title: "Magsecure",
        description: "Pagina de automatización de magerit con tecnologías: ",
        technologies: [django],
        link: "https://github.com/JossueJativa/SeguridadDeLaInformacion"
    },
    {
        img: mochigo,
        title: "Mochigo",
        description: "Aplicación celular con microservicios con tecnologías: ",
        technologies: [django, flutter, flask, node],
        link: "https://github.com/JossueJativa/touristApp"
    },
    {
        img: macjach,
        title: "Macjach",
        description: "Plataforma de ventas en linea con las tecnologías: ",
        technologies: [django],
        link: "https://github.com/JossueJativa/majach"
    },
];

export const Projects = () => {
    return (
        <>
            <p className='title' id="projects">Mis Proyectos</p>
            <div className="grid-3-items">
                {projects.map((project, index) => (
                    <TransparentContainer
                        key={index}
                        img={project.img}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                    />
                ))}
            </div>
        </>
    )
}
