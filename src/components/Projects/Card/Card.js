import React, { useEffect, useRef, useState } from 'react';
import {
    CardWrapper,
    Card,
    CardBackground,
    CardInfo,
    Content,
    Header
} from './CardStyles';

import { projects } from "../../../constants/constants"; // data.
import { GridContainer } from '../ProjectsStyles'; // 


// Handle Ref element for array.
// https://linguinecode.com/post/get-current-element-react-onmouseover-or-onmouseenter

// Big thanks : https://armandocanals.com/posts/CSS-transform-rotating-a-3D-object-perspective-based-on-mouse-position.html


export default function ProjectCards() {

    // La logique c'est de récupérer les dimensions de la div que l'on pointe, on effectue des calculs pour la rotation ... et on les appliques aux styles des divs.

    const [cardPosition, setCardPosition] = useState([0, 0, 0, 0]);
    //(x,y,width, height)

    // position inside the window. (window.width window.height)
    const [pagePosition, setPagePosition] = useState([0, 0]);

    // rX and rY : Rotation hook.
    const [rotation, setRotation] = useState([0, 0]);
    // tX and tY : Translation hook.
    const [translation, setTranslation] = useState([0, 0]);

    // Store the styles (Rotation, Translation) that we will apply on our element to give them this rotation animation.
    const [styles, setStyle] = useState(0);

    // Function 
    function usePerspective() {

        // How much "strenght' we want to put on the rotation and Translation.
        let constrain = 20;

        let pageX = pagePosition[0]; // event.pageX
        let pageY = pagePosition[1]; // event.pageX

        //x : x-position of Rectangle targeted
        let cardOffSetX = cardPosition[0];
        //y : y-position of Rectangle targeted
        let cardOffSetY = cardPosition[1];
        //  : Rectangle Property
        let width = cardPosition[2];
        //  : Rectangle Property
        let height = cardPosition[3];


        rotation[0] =
            -(pageY - cardOffSetY - (height / 2)) / constrain; // rY
        rotation[1] = (pageX - cardOffSetX - (width / 2)) / constrain; // rX

        translation[0] = -(pageY - cardOffSetY - (height / 2)) / (constrain + 20); // tX
        translation[1] = (pageX - cardOffSetX - (width / 2)) / (constrain + 20); // tY

        let transforms = {
            frame:
                `rotateX(${rotation[0]}deg) rotateY(${rotation[1]}deg)`
            ,
            background:
                `translateY(${translation[0]}px) translateX(${translation[1]}px)`
        };
        return transforms; // Object.
    };

    const [mouseLeaveDelay, handleMouseLeave] = useState(null); // 

    return (
        <GridContainer>
            {projects.map((item) => (
                <CardWrapper key={item.title}
                    onMouseMove={(event) => {
                        // Position of the card inside window.
                        setCardPosition([
                            event.target.getBoundingClientRect().x, event.target.getBoundingClientRect().y,
                            event.target.getBoundingClientRect().width,
                            event.target.getBoundingClientRect().height]);

                        // Set the position of the mouse inside the window.
                        setPagePosition([event.clientX, event.clientY]);

                        // Compute and render the style.
                        setStyle(usePerspective());

                    }}
                    onMouseEnter={() => {
                        clearTimeout(mouseLeaveDelay);
                    }}
                    onMouseLeave={() => {
                        setTimeout(() => {
                            // Reset the rotation when we leave a card. 
                            setRotation([0, 0]);
                        }, 200);
                    }}  >
                    <Card style={{ transform: styles.frame }
                    }>

                        <CardBackground style={
                            { backgroundImage: `url("${item.image}")`, transform: styles.background }}
                        />
                        <CardInfo>
                            <Header>{item.title}</Header>
                            <p>{item.description}</p>
                        </CardInfo>

                    </Card>
                </CardWrapper>
            ))}
        </GridContainer>
    );
}