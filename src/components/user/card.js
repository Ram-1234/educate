import React from "react";

import {
    articleBoxStyle,
    imageBoxStyle,
    titleBoxStyle,
    cardTitleStyle,
    cardSubtitleStyle,
    cardImageStyle
} from "./style";

const Card = ({ title, subtitle, image }) => {

    return (
        <div style={articleBoxStyle} className="article__container">
            <div style={imageBoxStyle}>
                <img style={cardImageStyle} src={image} alt={'logo'} />
            </div>
            <div style={titleBoxStyle}>
                <h1 style={cardTitleStyle} className={`title$${title}`}>{title || 'Title'}</h1>
                <p style={cardSubtitleStyle} className={`title$${title}`}>{subtitle || 'Subtitle'}</p>
            </div>
        </div>
    )
}

export { Card }