import useWindowSize from "../WindowSize/UseWindowSize";
import { useState, useEffect } from "react";


export const useMousePosition = (defaultPosition = [0, 0]) => {
    let [position, setPosition] = useState(defaultPosition);

    useEffect(() => {
        // Change the value when we move the mouse, ⚠ performance issue maybe.
        let handleMouseMove = (event) =>
            setPosition([event.clientX, event.clientY]);

        // Add Event listener that we launch the function above on move.
        window.addEventListener("mousemove", handleMouseMove, false);

        // Remove event on Cleanup.
        return () =>
            window.removeEventListener("mousemove", handleMouseMove, false);
    }, []);
    return position;
};

// function to call the above and 
export const useCoordinate = () => {
    // Get the window size.
    let size = useWindowSize();
    let originX = size.width / 2;
    let originY = size.height / 2;
    let totalX = size.width / 2;
    let totalY = size.height / 2;

    // Get the mouse position with initial state: (window.width && window.height) / 2. 
    let [mouseX, mouseY] = useMousePosition([originX, originY]);
    // Compute the actual position of the mouse inside the card.
    let positionX = mouseX - originX;
    let positionY = mouseY - originY;
    let scaleX = Math.min(positionX / totalX, 1);
    let scaleY = Math.min(positionY / totalY, 1);

    return {
        position: [positionX, positionY],
        total: [totalX, totalY],
        scale: [scaleX, scaleY]
    };
};

// range is for how much we want to turn the card.
export const usePerspective = (range = 10) => {
    // Get the computed value to scale our card.
    let [scaleX, scaleY] = useCoordinate().scale;
    let x = scaleX * range;
    let y = -scaleY * range;
    let styles = {
        frame: {
            transform: `rotateX(${y}deg) rotateY(${x}deg)`
        },
        image: {
            transform: `translateX(${-x * 1.5}px) translateY(${y * 1.5}px)`
        },
        background: {
            backgroundPosition: `${-x * 2.5}px ${y * 2.5}px`
        }
    };
    // frame :  give the effect of rotating card.
    // image : 
    // background : 
    return styles;
};