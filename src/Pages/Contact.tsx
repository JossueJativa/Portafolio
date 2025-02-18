import { github, correo, linkedin } from '../assets/img';

export const Contact = () => {
    const FormField = ({ label, is_Area }: { label: string; is_Area: boolean }) => (
        <div className="control-form column-control">
            <h4 className="description name">{label}</h4>
            {
                is_Area ? <textarea className="input" style={{
                    width: '100%',
                    height: '100px',
                    maxLines: 5,
                    resize: 'none',
                    borderRadius: '5px',
                }} /> : <input type="text" className="input" />
            }
        </div>
    );

    const handleSendEvent = () => {
        console.log('Send event');
    };

    return (
        <>
            <p className="title" id="contact">Contácteme</p>
            <div className="container">
                <div className="grid-2-item-half">
                    <div className="item">
                        <div className="float-text-box text-box-about" style={{
                            width: '100%',
                            height: '100%',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}>
                            <FormField label="Nombres y apellidos" is_Area={false} />
                            <FormField label="Correo" is_Area={false} />
                            <FormField label="Descripción" is_Area={true} />

                            <button onClick={handleSendEvent} className="blue-light-button" style={{ width: '60%', border: 'none' }}>
                                Enviar
                            </button>
                        </div>
                    </div>
                    <div className="item final-contacts">
                        <a href="http://">
                            <img src={linkedin}
                                alt="linkedin" style={{ width: '100%'}} />
                        </a>
                        <a href="http://">
                            <img src={github}
                                alt="github" style={{ width: '100%'}} />
                        </a>
                        <a href="mailto:">
                            <img src={correo}
                                alt="correo" style={{ width: '100%'}} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
