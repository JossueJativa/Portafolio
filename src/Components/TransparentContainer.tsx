import { BlueLightButton } from '../Components';

interface TransparentContainerProps {
    img: string;
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

export const TransparentContainer: React.FC<TransparentContainerProps> = ({ img, title, description, technologies, link }) => {
    return (
        <div className="float-text-box column text-box-about max-with">
            <img src={img} alt={title} className="card-image border-padding" style={{
                borderRadius: '10px !important'
            }} />
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <div className="grid-4-items">
                {technologies.map((tech, index) => (
                    <div className="item">
                        <img className="img-technologies" key={index} src={tech} alt={tech} />
                    </div>
                ))}
            </div>
            <div className='card-link'>
                <BlueLightButton text='Ir' link={link} target='_blank'/>
            </div>
        </div>
    )
}
