import { correo, linkedin, github } from '../assets/img';

export const Contacts = () => {
    return (
        <div className="container-contact">
            <div className='grid-contact'>
                <div className="item">
                    <a href='https://github.com/JossueJativa'>
                        <img className='box-img' src={github} alt="github" />
                    </a>
                </div>
                <div className="item">
                    <a href='https://www.linkedin.com/in/jossuejativawebm%C3%B3vil/'>
                        <img className='box-img' src={linkedin} alt="linkedin" />
                    </a>
                </div>
                <div className="item">
                    <a href='mailto:jossuedavidjt@gmail.com'>
                        <img className='box-img' src={correo} alt="correo" />
                    </a>
                </div>
            </div>
        </div>
    )
}
