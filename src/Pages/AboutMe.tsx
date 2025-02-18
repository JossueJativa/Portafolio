import { ReactNode } from 'react';

import { BlueLightButton, Contacts } from '../Components';
import { 
    me, html5, css, javascript, java, typescript, dart, python, c,
    react, django, flutter, flask, node
} from '../assets/img';

// Lista de iconos de lenguajes
const languages = [
    { src: html5, alt: "html" },
    { src: css, alt: "css" },
    { src: javascript, alt: "javascript" },
    { src: java, alt: "java" },
    { src: typescript, alt: "typescript" },
    { src: dart, alt: "dart" },
    { src: python, alt: "python" },
    { src: c, alt: "c" },
];

const frameworks = [
    { src: react, alt: "react" },
    { src: django, alt: "django" },
    { src: flutter, alt: "flutter" },
    { src: flask, alt: "flask" },
    { src: node, alt: "node" },
];

interface FloatTextBoxProps {
    children: ReactNode;
    className: string;
}

const FloatTextBox = ({ children, className }: FloatTextBoxProps) => (
    <div className={`float-text-box ${className}`}>{children}</div>
);

// Componente para los iconos de lenguajes
const LanguageIcons = () => (
    <FloatTextBox className="text-box-images">
        <div className="grid-4-items">
            {languages.map(({ src, alt }) => (
                <div className="item" key={alt}>
                    <img src={src} alt={alt} />
                </div>
            ))}
        </div>
    </FloatTextBox>
);

export const AboutMe = () => {
    return (
        <>
            <div className='container' id='about'>
                <div className="grid-2-items">
                    <div className="item">
                        <div className="left-line">
                            <h2 className="title">Jossue Játiva</h2>
                            <h1 className="description">Desarrollador Full Stack Web y Móvil</h1>
                        </div>

                        <BlueLightButton text='Mis Proyectos' link='#projects' />

                        <p>Contactos rápidos:</p>
                        <br />
                        <Contacts />
                    </div>

                    <div className="item">
                        <div className='center-image'>
                            <FloatTextBox className="bigger-font">
                                <img src={me} alt="Jossue Játiva" className='img-me' />
                            </FloatTextBox>

                            <FloatTextBox className="text-box-dominante">
                                <h3>
                                    Lenguajes <br />
                                    Dominantes
                                </h3>
                            </FloatTextBox>

                            <LanguageIcons />
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <p className='title'>Frameworks Trabajados</p>
            <div className="grid-5-items">
                {frameworks.map(({ src, alt }) => (
                    <div className="item" key={alt}>
                        <img src={src} alt={alt} />
                    </div>
                ))}
            </div>

            <br />
            <p className='title'>Sobre mi</p>
            <FloatTextBox className="text-box-about">
                <p className='description min-mobile'>
                    ¡Hola! Soy Jossue Játiva, y va a ser un placer trabajar con usted/es, 
                    soy un joven que trabaja desde el 2023 en desarrollo de software, 
                    con fácil adaptabilidad a lo que requieras, con distintas tecnologías, 
                    si te gusta saber mas de que he logrado hacer, podrás ver mas abajo los 
                    proyectos que he realizado en empresas y em proyectos personales.
                    <div className='center'>
                        <Contacts />
                    </div>
                </p>
            </FloatTextBox>
        </>
    );
};
