import React from 'react'

interface BlueLightButtonProps {
    text: string;
    link: string;
    target?: string;
}

export const BlueLightButton: React.FC<BlueLightButtonProps> = ({ text, link, target }) => {
    return (
        <a href={link} type="button" className="blue-light-button" target={target}>
            {text}
        </a>
    )
}
