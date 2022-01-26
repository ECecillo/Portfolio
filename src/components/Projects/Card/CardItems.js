import React from 'react';
import { CardBackground } from './CardStyles';

// data : les données que l'on va afficher.
// styles : le style <=> animation de scale que l'on calcul dans le parent Card.
export default function CardItems({ data, styles }) {
    let { name, image, imageStyle, background } = useI18n(data, I18nContext);

    return (
        <div className="card">
            <CardBackground />
            <img
                style={{ ...styles.image, ...imageStyle }}
                className="card__img"
                src={image}
                alt={name}
                title={name}
            />
            <div className="card__text">
                <p className="card__title">{name}</p>
            </div>
        </div>
    );
}
